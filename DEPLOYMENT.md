# Luxe Creator Platform - Deployment Guide

## Quick Start

### Automated Deployment (Recommended)

```bash
# Make script executable
chmod +x deploy.sh

# Deploy via Cloudflare Tunnel (default)
./deploy.sh

# Or specify deployment method
./deploy.sh cloudflare    # Cloudflare Tunnel
./deploy.sh docker        # Docker container
./deploy.sh manus         # Manus platform
```

---

## Deployment Methods

### 1. Cloudflare Tunnel (Zero Configuration)

**Best for:** Quick testing, temporary deployments, no server needed

```bash
./deploy.sh cloudflare
```

**What happens:**
- ✓ Installs cloudflared if needed
- ✓ Builds the project
- ✓ Starts development server
- ✓ Creates public tunnel URL
- ✓ No firewall configuration needed
- ✓ No domain required

**Output:**
```
Your public URL: https://xxxxx.trycloudflare.com
```

**Pros:**
- Zero configuration
- No server needed
- Instant public access
- Perfect for demos

**Cons:**
- URL changes on restart
- Limited to free tier speeds
- Not ideal for production

---

### 2. Docker (Containerized)

**Best for:** Production deployments, scalability, consistency

```bash
./deploy.sh docker
```

**What happens:**
- ✓ Checks Docker installation
- ✓ Builds Docker image
- ✓ Starts container
- ✓ Exposes on port 3000

**Manual Docker commands:**

```bash
# Build image
docker build -t luxe-creator:latest .

# Run container
docker run -d \
  --name luxe-creator \
  -p 3000:3000 \
  -e NODE_ENV=production \
  luxe-creator:latest

# View logs
docker logs -f luxe-creator

# Stop container
docker stop luxe-creator

# Remove container
docker rm luxe-creator
```

**Using Docker Compose:**

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

**Pros:**
- Consistent environment
- Easy scaling
- Production-ready
- Isolated dependencies

**Cons:**
- Requires Docker installation
- More complex setup
- Higher resource usage

---

### 3. Manus Platform (Recommended for Production)

**Best for:** Professional hosting, custom domains, automatic SSL

```bash
./deploy.sh manus
```

**What happens:**
- ✓ Prepares project for Manus
- ✓ Starts development server
- ✓ Ready for publishing

**To publish:**

1. Click **Publish** button in Management UI, OR
2. Use CLI:
   ```bash
   webdev_save_checkpoint
   # Then click Publish in UI
   ```

**Pros:**
- Automatic SSL/TLS
- Custom domain support
- Professional hosting
- Built-in analytics
- No DevOps needed

**Cons:**
- Requires Manus account
- Subscription-based

---

## Manual Deployment

### Development Server

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Server runs on http://localhost:3000
```

### Production Build

```bash
# Build for production
pnpm run build

# Start production server
pnpm run start

# Server runs on http://localhost:3000
```

---

## Environment Variables

Create `.env.local` in project root:

```env
# Application
VITE_APP_TITLE=Luxe Creator
VITE_APP_LOGO=LC
NODE_ENV=production
PORT=3000

# Optional: Analytics
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-id

# Optional: API
VITE_FRONTEND_FORGE_API_URL=https://api.example.com
VITE_FRONTEND_FORGE_API_KEY=your-key
```

---

## Nginx Configuration (Advanced)

For production with Nginx reverse proxy:

```nginx
upstream luxe_creator {
    server localhost:3000;
}

server {
    listen 80;
    server_name yourdomain.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    # SSL certificates
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    location / {
        proxy_pass http://luxe_creator;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## PM2 Deployment (Advanced)

For production process management:

```bash
# Install PM2
npm install -g pm2

# Create ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'luxe-creator',
    script: './dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
EOF

# Start with PM2
pm2 start ecosystem.config.js

# View logs
pm2 logs luxe-creator

# Monitor
pm2 monit
```

---

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Build Failures

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Rebuild
pnpm run build
```

### Docker Issues

```bash
# Check Docker status
docker ps -a

# View container logs
docker logs <container-id>

# Remove dangling images
docker image prune -a
```

---

## Performance Optimization

### Enable Caching

```bash
# Set cache headers in production
export CACHE_CONTROL="public, max-age=31536000, immutable"
```

### Monitor Performance

```bash
# Check server response time
curl -w "@curl-format.txt" -o /dev/null -s https://yourdomain.com

# Monitor resource usage
top
htop
```

---

## Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Set security headers
- [ ] Enable CORS properly
- [ ] Validate all inputs
- [ ] Use environment variables for secrets
- [ ] Keep dependencies updated
- [ ] Enable rate limiting
- [ ] Set up monitoring
- [ ] Configure backups
- [ ] Test disaster recovery

---

## Support

For issues or questions:
1. Check logs: `docker logs <container>` or `pm2 logs`
2. Review GitHub: https://github.com/damienmarx/Contentx
3. Check deployment method documentation

---

## Success Indicators

✓ Application accessible at deployment URL
✓ All pages load without errors
✓ Age gate working properly
✓ Forms submitting successfully
✓ Dashboard displaying data
✓ No console errors
✓ Performance acceptable
✓ HTTPS working (if applicable)
