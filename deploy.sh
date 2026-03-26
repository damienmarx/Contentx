#!/bin/bash

################################################################################
# LUXE CREATOR PLATFORM - AUTOMATED DEPLOYMENT SCRIPT
# No manual input required. Fully automated setup and deployment.
################################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="luxe-creator"
PORT=3000
DEPLOYMENT_METHOD="${1:-cloudflare}"  # cloudflare, docker, or manus

################################################################################
# UTILITY FUNCTIONS
################################################################################

log_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

################################################################################
# PRE-DEPLOYMENT CHECKS
################################################################################

check_prerequisites() {
    log_info "Checking prerequisites..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed"
        exit 1
    fi
    log_success "Node.js $(node --version) found"
    
    # Check pnpm
    if ! command -v pnpm &> /dev/null; then
        log_warning "pnpm not found, installing..."
        npm install -g pnpm
    fi
    log_success "pnpm $(pnpm --version) found"
    
    # Check Git
    if ! command -v git &> /dev/null; then
        log_error "Git is not installed"
        exit 1
    fi
    log_success "Git $(git --version | awk '{print $3}') found"
}

################################################################################
# BUILD PROCESS
################################################################################

build_project() {
    log_info "Building project..."
    
    # Install dependencies
    log_info "Installing dependencies..."
    pnpm install --frozen-lockfile
    log_success "Dependencies installed"
    
    # Build frontend
    log_info "Building frontend..."
    pnpm run build
    log_success "Frontend build complete"
    
    log_success "Project build successful"
}

################################################################################
# DEPLOYMENT METHODS
################################################################################

deploy_cloudflare() {
    log_info "Deploying via Cloudflare Tunnel..."
    
    # Check if cloudflared is installed
    if ! command -v cloudflared &> /dev/null; then
        log_warning "cloudflared not found, installing..."
        
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            brew install cloudflare/warp/cloudflared
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            # Linux
            curl -L https://github.com/cloudflare/warp-cli/releases/latest/download/warp-cli-linux-x86_64.deb -o warp-cli.deb
            sudo dpkg -i warp-cli.deb
            rm warp-cli.deb
        else
            log_error "Unsupported OS for automatic cloudflared installation"
            exit 1
        fi
    fi
    
    log_success "cloudflared is ready"
    
    # Start dev server in background
    log_info "Starting development server..."
    pnpm run dev > /tmp/luxe-creator-dev.log 2>&1 &
    DEV_PID=$!
    
    # Wait for server to start
    sleep 5
    
    if ! kill -0 $DEV_PID 2>/dev/null; then
        log_error "Failed to start development server"
        cat /tmp/luxe-creator-dev.log
        exit 1
    fi
    
    log_success "Development server started (PID: $DEV_PID)"
    
    # Start Cloudflare Tunnel
    log_info "Starting Cloudflare Tunnel..."
    log_warning "Your public URL will appear below. Keep this terminal open."
    echo ""
    
    cloudflared tunnel --url http://localhost:$PORT
}

deploy_docker() {
    log_info "Deploying via Docker..."
    
    # Check if Docker is installed
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    log_success "Docker $(docker --version | awk '{print $3}') found"
    
    # Create Dockerfile if it doesn't exist
    if [ ! -f "Dockerfile" ]; then
        log_info "Creating Dockerfile..."
        cat > Dockerfile << 'EOF'
FROM node:22-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy project files
COPY . .

# Build
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start server
CMD ["pnpm", "run", "start"]
EOF
        log_success "Dockerfile created"
    fi
    
    # Build Docker image
    log_info "Building Docker image..."
    docker build -t $PROJECT_NAME:latest .
    log_success "Docker image built"
    
    # Run Docker container
    log_info "Starting Docker container..."
    docker run -d \
        --name $PROJECT_NAME \
        -p $PORT:$PORT \
        -e NODE_ENV=production \
        $PROJECT_NAME:latest
    
    log_success "Docker container started"
    log_info "Access the application at: http://localhost:$PORT"
    
    # Show logs
    log_info "Container logs:"
    docker logs -f $PROJECT_NAME
}

deploy_manus() {
    log_info "Preparing for Manus deployment..."
    
    log_info "To deploy to Manus:"
    log_info "1. Click the 'Publish' button in the Management UI"
    log_info "2. Or use: webdev_save_checkpoint && webdev_publish"
    
    log_success "Project is ready for Manus deployment"
    log_info "Current dev server: http://localhost:3000"
    
    # Start dev server
    pnpm run dev
}

################################################################################
# PRODUCTION BUILD
################################################################################

build_production() {
    log_info "Building for production..."
    
    # Install dependencies
    pnpm install --frozen-lockfile
    
    # Build
    pnpm run build
    
    log_success "Production build complete"
    log_info "Output directory: dist/"
}

################################################################################
# ENVIRONMENT SETUP
################################################################################

setup_environment() {
    log_info "Setting up environment..."
    
    if [ ! -f ".env.local" ]; then
        log_info "Creating .env.local..."
        cat > .env.local << 'EOF'
# Luxe Creator Platform Environment Variables
VITE_APP_TITLE=Luxe Creator
VITE_APP_LOGO=LC
NODE_ENV=production
PORT=3000
EOF
        log_success ".env.local created"
    fi
}

################################################################################
# CLEANUP
################################################################################

cleanup() {
    log_info "Cleaning up..."
    
    # Kill any running dev servers
    pkill -f "pnpm run dev" || true
    
    # Remove temporary files
    rm -f /tmp/luxe-creator-dev.log
    
    log_success "Cleanup complete"
}

trap cleanup EXIT

################################################################################
# MAIN EXECUTION
################################################################################

main() {
    echo ""
    echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${BLUE}║        LUXE CREATOR PLATFORM - AUTOMATED DEPLOYMENT        ║${NC}"
    echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    # Check prerequisites
    check_prerequisites
    
    # Setup environment
    setup_environment
    
    # Build project
    build_production
    
    echo ""
    echo -e "${BLUE}Deployment Method: ${YELLOW}$DEPLOYMENT_METHOD${NC}"
    echo ""
    
    # Deploy based on method
    case $DEPLOYMENT_METHOD in
        cloudflare)
            deploy_cloudflare
            ;;
        docker)
            deploy_docker
            ;;
        manus)
            deploy_manus
            ;;
        *)
            log_error "Unknown deployment method: $DEPLOYMENT_METHOD"
            log_info "Usage: ./deploy.sh [cloudflare|docker|manus]"
            exit 1
            ;;
    esac
}

# Show usage if --help
if [[ "$1" == "--help" || "$1" == "-h" ]]; then
    echo "LUXE CREATOR PLATFORM - AUTOMATED DEPLOYMENT SCRIPT"
    echo ""
    echo "Usage: ./deploy.sh [METHOD]"
    echo ""
    echo "Methods:"
    echo "  cloudflare  - Deploy via Cloudflare Tunnel (default)"
    echo "  docker      - Deploy via Docker container"
    echo "  manus       - Prepare for Manus deployment"
    echo ""
    echo "Examples:"
    echo "  ./deploy.sh                 # Deploy via Cloudflare"
    echo "  ./deploy.sh docker          # Deploy via Docker"
    echo "  ./deploy.sh manus           # Prepare for Manus"
    exit 0
fi

# Run main
main
