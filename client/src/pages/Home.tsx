import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown, Play, Instagram, Youtube, MessageCircle, Music, Eye, Users, Star, Lock, Zap } from 'lucide-react';

/**
 * DESIGN PHILOSOPHY: Opulent Gothic Maximalism
 * - Hot pink (#FF1493) + Black obsidian (#0A0A0A) + Gold (#D4AF37)
 * - Ornamental details, asymmetrical layouts, theatrical lighting
 * - Premium, exclusive, unapologetic luxury aesthetic
 */

export default function Home() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [templatePreview, setTemplatePreview] = useState('onlyfans');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Age gate modal
  if (!ageVerified) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#FF1493] rounded-sm p-8 relative overflow-hidden">
            {/* Ornamental top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

            <h1 className="text-4xl font-bold text-center mb-4 text-[#FF1493]">
              18+ EXCLUSIVE
            </h1>
            <p className="text-center text-[#F5F1E8] mb-8 italic-accent">
              This platform contains adult content. You must be 18 or older to proceed.
            </p>

            <div className="space-y-4">
              <Button
                onClick={() => setAgeVerified(true)}
                className="w-full btn-luxury"
              >
                I'm 18+ - Enter Platform
              </Button>
              <Button
                onClick={() => window.location.href = 'https://www.google.com'}
                className="w-full btn-luxury-outline"
              >
                Exit
              </Button>
            </div>

            {/* Ornamental bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F1E8] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#FF1493]">
            LUXE<span className="text-[#D4AF37]">CREATOR</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => setActiveSection('hero')} className="hover:text-[#FF1493] transition">Home</button>
            <button onClick={() => setActiveSection('audition')} className="hover:text-[#FF1493] transition">Audition</button>
            <button onClick={() => setActiveSection('templates')} className="hover:text-[#FF1493] transition">Templates</button>
            <button onClick={() => setActiveSection('testimonials')} className="hover:text-[#FF1493] transition">Testimonials</button>
            <button className="btn-luxury text-sm px-6 py-2">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663481518643/Ns45j8S228ARiKdrsax22H/hero-luxury-gothic-YJKsPJCB2xNdK3NsD39Aja.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="animate-fade-in-up">
              <div className="mb-6 inline-block">
                <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">
                  ✦ Premium Platform for Content Creators ✦
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#FF1493]">MAINSTREAM</span>
                <br />
                <span className="text-[#D4AF37]">YOUR EMPIRE</span>
              </h1>

              <p className="text-xl text-[#F5F1E8] mb-8 leading-relaxed max-w-lg">
                Join the most exclusive platform for 18+ content creators. Professional marketing services, automated template generation, and multi-platform proliferation tools to scale your presence across OnlyFans, Instagram, TikTok, and beyond.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="btn-luxury">
                  Start Your Audition
                </button>
                <button className="btn-luxury-outline">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#FF1493]/20">
                <div>
                  <div className="text-3xl font-bold text-[#FF1493]">2,847</div>
                  <p className="text-sm text-[#A0A0A0]">Active Creators</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF1493]">$12.4M</div>
                  <p className="text-sm text-[#A0A0A0]">Revenue Generated</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF1493]">98%</div>
                  <p className="text-sm text-[#A0A0A0]">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Right - Floating elements */}
            <div className="hidden md:block relative h-96">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF1493]/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[#FF1493]" size={32} />
        </div>
      </section>

      {/* AUDITION SECTION */}
      <section className="relative py-24 bg-[#0A0A0A] border-t-2 border-[#FF1493]">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">✦ Join Our Elite ✦</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-[#FF1493]">AUDITION</span> NOW
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
              Limited audition slots available. Selective acceptance ensures premium quality across the platform.
            </p>
          </div>

          {/* Audition form */}
          <div className="max-w-2xl mx-auto">
            <div className="card-luxury border-2 border-[#FF1493]/30">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                      Stage Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#1A1A1A] border border-[#FF1493]/30 rounded-sm px-4 py-3 text-[#F5F1E8] focus:border-[#FF1493] focus:outline-none transition"
                      placeholder="Your creative name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#1A1A1A] border border-[#FF1493]/30 rounded-sm px-4 py-3 text-[#F5F1E8] focus:border-[#FF1493] focus:outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                    Current Platforms
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['OnlyFans', 'Instagram', 'TikTok', 'Snapchat'].map((platform) => (
                      <label key={platform} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-[#FF1493]" />
                        <span className="text-sm">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                    Portfolio Link
                  </label>
                  <input
                    type="url"
                    className="w-full bg-[#1A1A1A] border border-[#FF1493]/30 rounded-sm px-4 py-3 text-[#F5F1E8] focus:border-[#FF1493] focus:outline-none transition"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                    Why Join Luxe Creator?
                  </label>
                  <textarea
                    className="w-full bg-[#1A1A1A] border border-[#FF1493]/30 rounded-sm px-4 py-3 text-[#F5F1E8] focus:border-[#FF1493] focus:outline-none transition h-24 resize-none"
                    placeholder="Tell us about your goals..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="w-4 h-4 accent-[#FF1493]" />
                  <label htmlFor="terms" className="text-sm text-[#A0A0A0]">
                    I confirm I am 18+ and agree to terms
                  </label>
                </div>

                <button className="w-full btn-luxury">
                  Submit Audition
                </button>
              </form>
            </div>
          </div>

          {/* Limited slots counter */}
          <div className="text-center mt-12">
            <div className="inline-block bg-[#FF1493]/10 border border-[#FF1493]/30 rounded-sm px-6 py-3">
              <p className="text-[#FF1493] font-bold">⏰ Only 12 Audition Slots Remaining This Month</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATE MAKER SECTION */}
      <section
        className="relative py-24 border-t-2 border-[#FF1493]"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663481518643/Ns45j8S228ARiKdrsax22H/template-maker-bg-A7pMuZCJQPWTSymKFxfrBr.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">✦ Automated Tools ✦</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-[#FF1493]">TEMPLATE</span> GENERATOR
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
              Professional-grade templates for every platform. Customize in seconds, deploy instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Template selector */}
            <div className="space-y-6">
              {['onlyfans', 'instagram', 'tiktok', 'snapchat'].map((platform) => (
                <button
                  key={platform}
                  onClick={() => setTemplatePreview(platform)}
                  className={`w-full p-4 rounded-sm border-2 transition text-left font-bold uppercase tracking-widest ${
                    templatePreview === platform
                      ? 'border-[#FF1493] bg-[#FF1493]/10 text-[#FF1493]'
                      : 'border-[#2D2D2D] bg-[#1A1A1A] text-[#A0A0A0] hover:border-[#FF1493]/50'
                  }`}
                >
                  {platform === 'onlyfans' && '🔥 OnlyFans Pro'}
                  {platform === 'instagram' && '📸 Instagram Elite'}
                  {platform === 'tiktok' && '🎵 TikTok Viral'}
                  {platform === 'snapchat' && '👻 Snapchat Premium'}
                </button>
              ))}
            </div>

            {/* Template preview */}
            <div className="card-luxury border-2 border-[#FF1493]/50 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1493]/10 to-transparent"></div>
              <div className="relative z-10 text-center">
                <Play className="w-16 h-16 text-[#FF1493] mx-auto mb-4" />
                <p className="text-[#D4AF37] font-bold uppercase">
                  {templatePreview.toUpperCase()} TEMPLATE PREVIEW
                </p>
                <p className="text-sm text-[#A0A0A0] mt-2">Click to customize & download</p>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Zap, label: 'Instant Generation', desc: 'Create templates in seconds' },
              { icon: Users, label: 'Multi-Platform', desc: 'Deploy across all networks' },
              { icon: Star, label: 'Premium Quality', desc: 'Professional-grade designs' },
            ].map((feature, i) => (
              <div key={i} className="card-luxury text-center">
                <feature.icon className="w-8 h-8 text-[#FF1493] mx-auto mb-4" />
                <h3 className="font-bold uppercase text-[#FF1493] mb-2">{feature.label}</h3>
                <p className="text-sm text-[#A0A0A0]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM SELECTOR SECTION */}
      <section
        className="relative py-24 border-t-2 border-[#FF1493]"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663481518643/Ns45j8S228ARiKdrsax22H/platform-selector-bg-RTNhdzjARGxSXKWNkoNirX.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">✦ Multi-Platform Proliferation ✦</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-[#FF1493]">EXPAND</span> YOUR REACH
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'OnlyFans', icon: '🔥', subscribers: '847K+' },
              { name: 'Instagram', icon: '📸', subscribers: '1.2M+' },
              { name: 'TikTok', icon: '🎵', subscribers: '2.1M+' },
              { name: 'Snapchat', icon: '👻', subscribers: '634K+' },
            ].map((platform, i) => (
              <div key={i} className="card-luxury text-center border-2 border-[#FF1493]/30 hover:border-[#FF1493] group cursor-pointer">
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{platform.icon}</div>
                <h3 className="font-bold uppercase text-[#FF1493] mb-2">{platform.name}</h3>
                <p className="text-2xl font-bold text-[#D4AF37]">{platform.subscribers}</p>
                <p className="text-xs text-[#A0A0A0] mt-2">Active Subscribers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        className="relative py-24 border-t-2 border-[#FF1493]"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663481518643/Ns45j8S228ARiKdrsax22H/testimonial-section-bg-FjSYkM2ceV8NmqQn6doAb2.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">✦ Creator Testimonials ✦</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-[#FF1493]">HEAR</span> FROM OUR ELITE
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Aria Luxe',
                platform: 'OnlyFans Creator',
                quote: 'Luxe Creator transformed my business. In 3 months, my earnings tripled. The template maker saved me countless hours.',
                rating: 5,
              },
              {
                name: 'Jasmine Star',
                platform: 'Multi-Platform Creator',
                quote: 'Professional, discreet, and incredibly effective. The multi-platform tools are game-changers for scaling.',
                rating: 5,
              },
              {
                name: 'Sienna Gold',
                platform: 'Content Strategist',
                quote: 'The best platform for serious creators. Premium quality service, premium results. Worth every penny.',
                rating: 5,
              },
              {
                name: 'Venus Prime',
                platform: 'OnlyFans Top Creator',
                quote: 'Their marketing insights helped me reach 500K subscribers. Absolutely recommend to any creator.',
                rating: 5,
              },
              {
                name: 'Mystique Rose',
                platform: 'TikTok Influencer',
                quote: 'The audition process was thorough but fair. Now I have access to tools that actually work.',
                rating: 5,
              },
              {
                name: 'Scarlett Vex',
                platform: 'Content Creator',
                quote: 'Joined 6 months ago. Best decision ever. The community support is unmatched.',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="card-luxury border-2 border-[#FF1493]/30">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="italic-accent text-[#F5F1E8] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[#FF1493]/20 pt-4">
                  <p className="font-bold text-[#FF1493]">{testimonial.name}</p>
                  <p className="text-xs text-[#A0A0A0]">{testimonial.platform}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18+ EXCLUSIVE CONTENT SECTION */}
      <section className="relative py-24 bg-[#0A0A0A] border-t-2 border-[#FF1493]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">✦ Exclusive Features ✦</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-[#FF1493]">PREMIUM</span> TOOLS
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
              Advanced analytics, content protection, and subscriber management for mature creators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye,
                title: 'Content Protection',
                desc: 'Watermarking, DRM, and anti-piracy tools to protect your premium content.',
              },
              {
                icon: Users,
                title: 'Subscriber Analytics',
                desc: 'Deep insights into subscriber behavior, engagement, and retention metrics.',
              },
              {
                icon: Lock,
                title: 'Secure Payments',
                desc: 'PCI-compliant payment processing with instant payouts to your account.',
              },
              {
                icon: Zap,
                title: 'Automation Suite',
                desc: 'Auto-scheduling, bulk uploads, and intelligent content distribution.',
              },
            ].map((feature, i) => (
              <div key={i} className="card-luxury border-2 border-[#FF1493]/30 flex gap-6">
                <div className="flex-shrink-0">
                  <feature.icon className="w-12 h-12 text-[#FF1493]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#FF1493] uppercase mb-2">{feature.title}</h3>
                  <p className="text-[#A0A0A0]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        className="relative py-24 border-t-2 border-[#FF1493]"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663481518643/Ns45j8S228ARiKdrsax22H/cta-section-bg-SnGXk46gYpUVMC8qmatCZd.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">✦ Investment Plans ✦</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-[#FF1493]">CHOOSE</span> YOUR TIER
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'EMERALD',
                price: '$299',
                period: '/month',
                features: [
                  'Template Generator',
                  'Basic Analytics',
                  'Single Platform',
                  'Email Support',
                  '5 Audition Slots',
                ],
                highlighted: false,
              },
              {
                name: 'PLATINUM',
                price: '$799',
                period: '/month',
                features: [
                  'All Emerald Features',
                  'Advanced Analytics',
                  'Multi-Platform Tools',
                  'Priority Support',
                  '20 Audition Slots',
                  'Content Protection',
                ],
                highlighted: true,
              },
              {
                name: 'DIAMOND',
                price: 'Custom',
                period: 'Enterprise',
                features: [
                  'All Platinum Features',
                  'Dedicated Manager',
                  'Custom Integrations',
                  '24/7 VIP Support',
                  'Unlimited Auditions',
                  'White-Label Options',
                ],
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`card-luxury relative border-2 transition transform hover:scale-105 ${
                  plan.highlighted
                    ? 'border-[#FF1493] scale-105 md:scale-110'
                    : 'border-[#FF1493]/30'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF1493] text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[#FF1493] uppercase mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#D4AF37]">{plan.price}</span>
                  <span className="text-[#A0A0A0]">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-[#FF1493]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={plan.highlighted ? 'w-full btn-luxury' : 'w-full btn-luxury-outline'}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative py-16 bg-[#0A0A0A] border-t-2 border-[#FF1493]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#FF1493]">ELEVATE</span> Your Career?
          </h2>
          <p className="text-xl text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
            Join 2,847+ premium creators already scaling their empires with Luxe Creator.
          </p>
          <button className="btn-luxury text-lg px-12 py-4">
            Begin Audition Process
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-[#FF1493]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-[#FF1493] uppercase mb-4">About</h3>
              <ul className="space-y-2 text-sm text-[#A0A0A0]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Our Story</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Mission</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#FF1493] uppercase mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-[#A0A0A0]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Features</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Pricing</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#FF1493] uppercase mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-[#A0A0A0]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Help Center</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Contact</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#FF1493] uppercase mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-[#A0A0A0]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Privacy</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Terms</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FF1493]/20 pt-8 text-center text-sm text-[#A0A0A0]">
            <p>&copy; 2026 Luxe Creator. All rights reserved. | 18+ Only Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
