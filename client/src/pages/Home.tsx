import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Instagram, Youtube, MessageCircle, Music, Eye, Users, Star, Lock, Zap, Plus } from 'lucide-react';

/**
 * MERGED DESIGN PHILOSOPHY
 * Combines Opulent Gothic Maximalism (hot pink/black/gold) with Content Cult's gradient aesthetic
 * - Hot pink (#FF1493) + Violet (#C45CFF) + Indigo (#7B7DFF) + Gold (#D4AF37)
 * - Glass morphism effects with backdrop blur
 * - Premium, exclusive, theatrical luxury aesthetic
 * - Professional creator growth positioning
 */

export default function Home() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [templatePreview, setTemplatePreview] = useState('onlyfans');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
          <div className="glass rounded-3xl p-8 relative overflow-hidden border-2 border-[#FF1493]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF1493]/10 via-transparent to-[#7B7DFF]/10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#FF1493] to-[#C45CFF] bg-clip-text text-transparent">
                18+ EXCLUSIVE
              </h1>
              <p className="text-center text-[#B9ADC9] mb-8 italic">
                This platform contains adult content. You must be 18 or older to proceed.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => setAgeVerified(true)}
                  className="btn-luxury w-full"
                >
                  I'm 18+ - Enter Platform
                </button>
                <button
                  onClick={() => window.location.href = 'https://www.google.com'}
                  className="btn-luxury-outline w-full"
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09070E] text-[#F7F2FF] overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-40 glass border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF1493] to-[#C45CFF] flex items-center justify-center font-bold text-white shadow-lg">
              LC
            </div>
            <div>
              <div className="text-lg font-bold uppercase tracking-widest">LUXE CREATOR</div>
              <div className="text-xs text-[#B9ADC9] uppercase tracking-widest">Premium Growth Studio</div>
            </div>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-[#B9ADC9] hover:text-[#F7F2FF] transition font-semibold">Home</a>
            <a href="#services" className="text-[#B9ADC9] hover:text-[#F7F2FF] transition font-semibold">Services</a>
            <a href="#process" className="text-[#B9ADC9] hover:text-[#F7F2FF] transition font-semibold">Process</a>
            <a href="#testimonials" className="text-[#B9ADC9] hover:text-[#F7F2FF] transition font-semibold">Testimonials</a>
            <button className="btn-luxury text-sm px-6 py-2">Apply Now</button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg border border-[#FF1493]/30 bg-[#120D19] flex items-center justify-center"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#FF1493]/20 bg-[#120D19]/80 backdrop-blur">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a href="#home" className="text-[#B9ADC9] hover:text-[#FF1493] transition">Home</a>
              <a href="#services" className="text-[#B9ADC9] hover:text-[#FF1493] transition">Services</a>
              <a href="#process" className="text-[#B9ADC9] hover:text-[#FF1493] transition">Process</a>
              <a href="#testimonials" className="text-[#B9ADC9] hover:text-[#FF1493] transition">Testimonials</a>
              <button className="btn-luxury w-full">Apply Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 overflow-hidden" id="home">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF1493]/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7B7DFF]/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="reveal">
              <div className="eyebrow">✦ Premium Creator Growth Studio ✦</div>

              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                The <span className="gradient-text">softer, smarter way</span> to grow.
              </h1>

              <p className="text-xl text-[#B9ADC9] mb-8 leading-relaxed max-w-lg">
                Luxe Creator is a modern sales and support studio designed for adult women creators who want branding, automation, audience growth, and professional guidance without pressure or manipulation.
              </p>

              <div className="flex gap-4 flex-wrap mb-8">
                <button className="btn-luxury">Start Registration</button>
                <a href="#services" className="btn-luxury-outline">Explore Services</a>
                <a href="#process" className="btn-ghost">How It Works</a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF1493] to-[#C45CFF] shadow-lg"></span>
                  <span className="text-sm font-semibold text-[#EADFFF]">Adults 18+ only</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF1493] to-[#C45CFF] shadow-lg"></span>
                  <span className="text-sm font-semibold text-[#EADFFF]">Privacy-first systems</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF1493] to-[#C45CFF] shadow-lg"></span>
                  <span className="text-sm font-semibold text-[#EADFFF]">No coercive tactics</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#FF1493]/20">
                <div>
                  <div className="text-3xl font-bold text-[#FF1493]">2.8K</div>
                  <p className="text-xs text-[#9E91B1]">Active Creators</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF1493]">$12.4M</div>
                  <p className="text-xs text-[#9E91B1]">Revenue Generated</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF1493]">98%</div>
                  <p className="text-xs text-[#9E91B1]">Satisfaction Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF1493]">24/7</div>
                  <p className="text-xs text-[#9E91B1]">Support Ready</p>
                </div>
              </div>
            </div>

            {/* Right - Dashboard preview */}
            <div className="hidden md:block reveal">
              <div className="glass rounded-3xl p-6 border border-[#FF1493]/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-lg">Creator Command View</h3>
                    <p className="text-sm text-[#B9ADC9]">Internal growth dashboard</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#74F0C1]/10 border border-[#74F0C1]/30">
                    <span className="w-2 h-2 rounded-full bg-[#74F0C1]"></span>
                    <span className="text-xs font-bold text-[#BFF7E2]">Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-[#120D19] rounded-2xl p-4 border border-[#FF1493]/10">
                    <div className="text-2xl font-bold text-[#FF1493]">7</div>
                    <div className="text-xs text-[#9E91B1]">Brand touchpoints</div>
                  </div>
                  <div className="bg-[#120D19] rounded-2xl p-4 border border-[#FF1493]/10">
                    <div className="text-2xl font-bold text-[#C45CFF]">24/7</div>
                    <div className="text-xs text-[#9E91B1]">Support ready</div>
                  </div>
                  <div className="bg-[#120D19] rounded-2xl p-4 border border-[#FF1493]/10">
                    <div className="text-2xl font-bold text-[#7B7DFF]">0</div>
                    <div className="text-xs text-[#9E91B1]">Harassment tolerance</div>
                  </div>
                </div>

                <div className="space-y-2 bg-[#120D19] rounded-2xl p-4 border border-[#FF1493]/10">
                  <div className="flex justify-between text-sm">
                    <span>Brand Positioning Kit</span>
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-[#FF1493]/20 text-[#FFD9EF]">In Review</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Lead Automation Flow</span>
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-[#7B7DFF]/20 text-[#DCDCFF]">Configured</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Safety + Boundaries Policy</span>
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-[#7B7DFF]/20 text-[#DCDCFF]">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 border-t border-[#FF1493]/20" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <div className="eyebrow justify-center">✦ Services ✦</div>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Everything a premium creator operation needs.
            </h2>
            <p className="text-xl text-[#B9ADC9] max-w-2xl mx-auto">
              Professional support layer for women entering or scaling in competitive creator markets. Focus on clarity, elegance, and conversion structure.
            </p>
          </div>

          <div className="grid-3">
            {[
              { icon: '✦', title: 'Brand Identity & Positioning', desc: 'Shape how your presence feels: tone, aesthetic, niche clarity, value promise, and premium first impression.' },
              { icon: '⚙', title: 'Automation & Workflow Design', desc: 'Replace reactive chaos with smoother systems for intake, communication, scheduling, and follow-up.' },
              { icon: '🛡', title: 'Boundaries, Safety & Moderation', desc: 'Create a brand culture that protects time, energy, privacy, and emotional sustainability.' },
              { icon: '📈', title: 'Audience Growth Systems', desc: 'Build cleaner visibility, warmer onboarding, better retention, and stronger conversion journeys.' },
              { icon: '🔐', title: 'Content Protection', desc: 'Watermarking, DRM, and anti-piracy tools to protect your premium content from unauthorized distribution.' },
              { icon: '💰', title: 'Premium Monetization', desc: 'Subscriber management, secure payments, and intelligent revenue optimization across platforms.' },
            ].map((service, i) => (
              <div key={i} className="card-luxury reveal">
                <div className="icon-box">{service.icon}</div>
                <h3 className="font-bold text-[#FF1493] mb-3">{service.title}</h3>
                <p className="text-[#B9ADC9]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 border-t border-[#FF1493]/20" id="process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <div className="eyebrow justify-center">✦ Process ✦</div>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              How we work together.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Application', desc: 'Submit your portfolio and tell us your goals.' },
              { num: '02', title: 'Strategy Call', desc: 'Deep-dive into your brand and growth vision.' },
              { num: '03', title: 'Custom Plan', desc: 'We design your personalized growth roadmap.' },
              { num: '04', title: 'Launch & Scale', desc: 'Execute with ongoing support and optimization.' },
            ].map((step, i) => (
              <div key={i} className="card-luxury reveal relative pl-16">
                <div className="absolute left-6 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#C45CFF] flex items-center justify-center font-bold text-white shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-bold text-[#FF1493] mb-2">{step.title}</h3>
                <p className="text-[#B9ADC9]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATE MAKER SECTION */}
      <section className="py-24 border-t border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <div className="eyebrow justify-center">✦ Automated Tools ✦</div>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              <span className="gradient-text">Template Generator</span>
            </h2>
            <p className="text-xl text-[#B9ADC9] max-w-2xl mx-auto">
              Professional-grade templates for every platform. Customize in seconds, deploy instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Template selector */}
            <div className="space-y-4">
              {['onlyfans', 'instagram', 'tiktok', 'snapchat'].map((platform) => (
                <button
                  key={platform}
                  onClick={() => setTemplatePreview(platform)}
                  className={`w-full p-4 rounded-2xl border-2 transition text-left font-bold uppercase tracking-widest ${
                    templatePreview === platform
                      ? 'border-[#FF1493] bg-[#FF1493]/10 text-[#FF1493]'
                      : 'border-[#FF1493]/20 bg-[#120D19] text-[#B9ADC9] hover:border-[#FF1493]/50'
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
            <div className="glass rounded-3xl p-12 h-80 flex items-center justify-center relative overflow-hidden border border-[#FF1493]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1493]/10 to-[#7B7DFF]/10"></div>
              <div className="relative z-10 text-center">
                <Play className="w-16 h-16 text-[#FF1493] mx-auto mb-4" />
                <p className="text-[#D4AF37] font-bold uppercase">
                  {templatePreview.toUpperCase()} TEMPLATE PREVIEW
                </p>
                <p className="text-sm text-[#B9ADC9] mt-2">Click to customize & download</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 border-t border-[#FF1493]/20" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <div className="eyebrow justify-center">✦ Creator Testimonials ✦</div>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Hear from our elite creators.
            </h2>
          </div>

          <div className="grid-3">
            {[
              { name: 'Aria Luxe', role: 'OnlyFans Creator', quote: 'Luxe Creator transformed my business. In 3 months, my earnings tripled. The template maker saved me countless hours.' },
              { name: 'Jasmine Star', role: 'Multi-Platform Creator', quote: 'Professional, discreet, and incredibly effective. The multi-platform tools are game-changers for scaling.' },
              { name: 'Sienna Gold', role: 'Content Strategist', quote: 'The best platform for serious creators. Premium quality service, premium results. Worth every penny.' },
              { name: 'Venus Prime', role: 'OnlyFans Top Creator', quote: 'Their marketing insights helped me reach 500K subscribers. Absolutely recommend to any creator.' },
              { name: 'Mystique Rose', role: 'TikTok Influencer', quote: 'The audition process was thorough but fair. Now I have access to tools that actually work.' },
              { name: 'Scarlett Vex', role: 'Content Creator', quote: 'Joined 6 months ago. Best decision ever. The community support is unmatched.' },
            ].map((testimonial, i) => (
              <div key={i} className="card-luxury reveal">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="italic text-[#F7F2FF] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-[#FF1493]/20 pt-4">
                  <p className="font-bold text-[#FF1493]">{testimonial.name}</p>
                  <p className="text-xs text-[#9E91B1]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 border-t border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <div className="eyebrow justify-center">✦ Investment Plans ✦</div>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Choose your tier.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'EMERALD',
                price: '$299',
                period: '/month',
                features: ['Template Generator', 'Basic Analytics', 'Single Platform', 'Email Support', '5 Audition Slots'],
                highlighted: false,
              },
              {
                name: 'PLATINUM',
                price: '$799',
                period: '/month',
                features: ['All Emerald Features', 'Advanced Analytics', 'Multi-Platform Tools', 'Priority Support', '20 Audition Slots', 'Content Protection'],
                highlighted: true,
              },
              {
                name: 'DIAMOND',
                price: 'Custom',
                period: 'Enterprise',
                features: ['All Platinum Features', 'Dedicated Manager', 'Custom Integrations', '24/7 VIP Support', 'Unlimited Auditions', 'White-Label Options'],
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`card-luxury reveal relative transition transform hover:scale-105 ${
                  plan.highlighted
                    ? 'border-[#FF1493] scale-105 md:scale-110 md:border-2'
                    : 'border-[#FF1493]/30'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF1493] to-[#C45CFF] text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[#FF1493] uppercase mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#D4AF37]">{plan.price}</span>
                  <span className="text-[#B9ADC9]">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Plus className="w-4 h-4 text-[#FF1493]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={plan.highlighted ? 'btn-luxury w-full' : 'btn-luxury-outline w-full'}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 border-t border-[#FF1493]/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 reveal">
            <div className="eyebrow justify-center">✦ FAQ ✦</div>
            <h2 className="text-5xl md:text-6xl font-bold mt-4">
              Common questions answered.
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { q: 'What is the audition process?', a: 'Our selective audition ensures platform quality. Submit your portfolio and goals—we review and schedule a strategy call within 48 hours.' },
              { q: 'Do you offer payment plans?', a: 'Yes! We offer flexible payment options for all tiers. Contact our team for custom arrangements.' },
              { q: 'Is my data private?', a: 'Absolutely. We use enterprise-grade encryption and never share creator data with third parties.' },
              { q: 'Can I upgrade or downgrade?', a: 'Yes, anytime. Changes take effect at the start of your next billing cycle.' },
              { q: 'What platforms do you support?', a: 'OnlyFans, Instagram, TikTok, Snapchat, Twitter, and custom integrations available.' },
            ].map((item, i) => (
              <div
                key={i}
                className="card-luxury reveal cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#FF1493]">{item.q}</h3>
                  <span className={`text-2xl transition ${expandedFaq === i ? 'rotate-45' : ''}`}>+</span>
                </div>
                {expandedFaq === i && (
                  <p className="text-[#B9ADC9] mt-4 pt-4 border-t border-[#FF1493]/20">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 border-t border-[#FF1493]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">ELEVATE</span> your career?
          </h2>
          <p className="text-xl text-[#B9ADC9] mb-8 max-w-2xl mx-auto">
            Join 2,847+ premium creators already scaling their empires with Luxe Creator.
          </p>
          <button className="btn-luxury text-lg px-12 py-4">
            Begin Application
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#120D19] border-t border-[#FF1493]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-[#FF1493] uppercase mb-4">About</h3>
              <ul className="space-y-2 text-sm text-[#B9ADC9]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Our Story</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Mission</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#FF1493] uppercase mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-[#B9ADC9]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Features</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Pricing</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#FF1493] uppercase mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-[#B9ADC9]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Help Center</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Contact</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#FF1493] uppercase mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-[#B9ADC9]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Privacy</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Terms</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FF1493]/20 pt-8 text-center text-sm text-[#9E91B1]">
            <p>&copy; 2026 Luxe Creator. All rights reserved. | 18+ Only Platform | Privacy-First Systems</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
