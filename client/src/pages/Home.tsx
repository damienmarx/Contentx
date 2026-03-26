import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronDown, Star, Users, TrendingUp, Lock, Zap, Shield, Eye } from 'lucide-react';
import AuditionModal from '@/components/AuditionModal';

interface StatCounter {
  value: number;
  label: string;
  icon: string;
}

export default function Home() {
  const [showAuditionModal, setShowAuditionModal] = useState(false);
  const [counters, setCounters] = useState<StatCounter[]>([
    { value: 0, label: 'Active Creators', icon: '👥' },
    { value: 0, label: 'Monthly Revenue', icon: '💰' },
    { value: 0, label: 'Satisfaction Rate', icon: '⭐' },
  ]);
  const [scrollY, setScrollY] = useState(0);
  const [ageVerified, setAgeVerified] = useState(false);

  // Age gate
  useEffect(() => {
    const verified = localStorage.getItem('luxe-creator-18-verified') === 'true';
    if (!verified) {
      const confirmed = window.confirm('This platform is for 18+ only. Are you 18 or older?');
      if (confirmed) {
        localStorage.setItem('luxe-creator-18-verified', 'true');
        setAgeVerified(true);
      } else {
        window.location.href = 'https://google.com';
      }
    } else {
      setAgeVerified(true);
    }
  }, []);

  // Animate counters on scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation
  useEffect(() => {
    const targets = [2847, 12400000, 98];
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters(prev =>
        prev.map((counter, idx) => ({
          ...counter,
          value: Math.floor(targets[idx] * progress),
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  if (!ageVerified) return null;

  return (
    <div className="min-h-screen bg-[#09070E] text-[#F7F2FF] overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF1493] to-[#C45CFF] flex items-center justify-center font-bold text-white">
              LC
            </div>
            <span className="text-lg font-bold uppercase tracking-widest">Luxe Creator</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-semibold text-[#B9ADC9] hover:text-[#FF1493] transition">
              Dashboard
            </Link>
            <Link href="/templates" className="text-sm font-semibold text-[#B9ADC9] hover:text-[#FF1493] transition">
              Templates
            </Link>
            <Link href="/exclusive" className="text-sm font-semibold text-[#B9ADC9] hover:text-[#FF1493] transition">
              Exclusive
            </Link>
            <button
              onClick={() => setShowAuditionModal(true)}
              className="btn-luxury text-xs px-6 py-2"
            >
              Audition Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 border-b border-[#FF1493]/20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF1493] rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#C45CFF] rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="eyebrow animate-fade-in-up">
              🎭 Premium Creator Growth Platform
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="gradient-text">Monetize Your</span>
              <br />
              <span className="text-[#D4AF37]">Exclusive Content</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-[#B9ADC9] mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Join 2,847+ creators earning $12.4M monthly. Automated templates, multi-platform proliferation, and 18+ content protection included.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => setShowAuditionModal(true)}
                className="btn-luxury flex items-center gap-2"
              >
                Start Audition <ChevronDown size={18} className="rotate-90" />
              </button>
              <Link href="/templates" className="btn-luxury-outline flex items-center gap-2">
                View Templates <Zap size={18} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {counters.map((stat, idx) => (
                <div key={idx} className="glass rounded-2xl p-6 border border-[#FF1493]/20 hover-lift">
                  <p className="text-sm text-[#B9ADC9] mb-2">{stat.label}</p>
                  <p className="text-3xl md:text-4xl font-bold text-[#FF1493]">
                    {stat.label === 'Monthly Revenue' ? `$${(stat.value / 1000000).toFixed(1)}M` : stat.label === 'Satisfaction Rate' ? `${stat.value}%` : stat.value.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Premium Services
          </h2>
          <p className="text-[#B9ADC9] mb-12 max-w-2xl">
            Everything you need to build, protect, and monetize your creator empire.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap size={32} />,
                title: 'Automated Templates',
                desc: 'Professional templates for OnlyFans, Instagram, TikTok, Snapchat, Twitter, YouTube',
                color: 'from-[#FF1493] to-[#FFB6D9]',
              },
              {
                icon: <Shield size={32} />,
                title: 'Military-Grade Protection',
                desc: 'DRM encryption, watermarking, and download restrictions for exclusive content',
                color: 'from-[#C45CFF] to-[#E8B4FF]',
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Revenue Optimization',
                desc: 'Multi-tier subscriptions, automated payouts, and real-time analytics',
                color: 'from-[#7B7DFF] to-[#B4B7FF]',
              },
              {
                icon: <Users size={32} />,
                title: 'Subscriber Management',
                desc: 'Manage tiers, handle refunds, and track subscriber engagement',
                color: 'from-[#D4AF37] to-[#FFD700]',
              },
              {
                icon: <Lock size={32} />,
                title: 'Age Verification',
                desc: '18+ compliance with verified subscriber access and payment processing',
                color: 'from-[#FF1493] to-[#C45CFF]',
              },
              {
                icon: <Eye size={32} />,
                title: 'Content Analytics',
                desc: 'Track views, engagement, revenue per platform, and subscriber behavior',
                color: 'from-[#7B7DFF] to-[#FF1493]',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-8 border border-[#FF1493]/20 hover-lift hover-glow group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F7F2FF] mb-3">{service.title}</h3>
                <p className="text-[#B9ADC9]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            How It Works
          </h2>
          <p className="text-[#B9ADC9] mb-12 max-w-2xl">
            Four simple steps to launch your monetized creator platform.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Audition', desc: 'Submit your profile and content samples' },
              { step: '02', title: 'Setup', desc: 'Customize your brand and tier structure' },
              { step: '03', title: 'Launch', desc: 'Deploy templates and start accepting subscribers' },
              { step: '04', title: 'Monetize', desc: 'Earn recurring revenue with automated payouts' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="glass rounded-2xl p-8 border border-[#FF1493]/20 hover-lift">
                  <div className="text-5xl font-bold text-[#FF1493] mb-4 opacity-20">{item.step}</div>
                  <h3 className="text-2xl font-bold text-[#F7F2FF] mb-2">{item.title}</h3>
                  <p className="text-[#B9ADC9]">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-[#FF1493] to-[#C45CFF]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Creator Success Stories
          </h2>
          <p className="text-[#B9ADC9] mb-12 max-w-2xl">
            Real creators earning real money with Luxe Creator.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Aria Diamond',
                handle: '@aria.diamond',
                revenue: '$47,200',
                period: 'per month',
                testimonial: 'Luxe Creator tripled my revenue in 3 months. The template automation saved me 20 hours weekly.',
                rating: 5,
              },
              {
                name: 'Jasmine Luxe',
                handle: '@jasmine.luxe',
                revenue: '$23,800',
                period: 'per month',
                testimonial: 'The multi-platform templates are game-changing. My content reaches more people, more consistently.',
                rating: 5,
              },
              {
                name: 'Victoria Rose',
                handle: '@victoria.rose',
                revenue: '$31,500',
                period: 'per month',
                testimonial: 'Professional platform, professional results. The DRM protection gives me peace of mind.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-8 border border-[#FF1493]/20 hover-lift"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#F7F2FF]">{testimonial.name}</h3>
                    <p className="text-sm text-[#B9ADC9]">{testimonial.handle}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FFD37A] text-[#FFD37A]" />
                    ))}
                  </div>
                </div>

                <p className="text-[#B9ADC9] mb-4">{testimonial.testimonial}</p>

                <div className="border-t border-[#FF1493]/20 pt-4">
                  <p className="text-2xl font-bold text-[#FF1493]">{testimonial.revenue}</p>
                  <p className="text-xs text-[#9E91B1]">{testimonial.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Transparent Pricing
          </h2>
          <p className="text-[#B9ADC9] mb-12 max-w-2xl">
            Choose the plan that fits your creator journey.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Emerald',
                price: '$299',
                period: '/month',
                features: [
                  'Up to 5,000 subscribers',
                  'Basic templates (3 platforms)',
                  'Standard DRM protection',
                  'Email support',
                  'Monthly payouts',
                ],
              },
              {
                name: 'Platinum',
                price: '$799',
                period: '/month',
                features: [
                  'Up to 50,000 subscribers',
                  'Premium templates (6 platforms)',
                  'Military-grade DRM + watermarking',
                  'Priority support',
                  'Weekly payouts',
                  'Advanced analytics',
                ],
                highlighted: true,
              },
              {
                name: 'Diamond',
                price: 'Custom',
                period: 'pricing',
                features: [
                  'Unlimited subscribers',
                  'Custom template design',
                  'White-label options',
                  '24/7 VIP support',
                  'Real-time payouts',
                  'API access',
                  'Dedicated account manager',
                ],
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className={`glass rounded-2xl p-8 border ${
                  tier.highlighted ? 'border-[#FF1493] scale-105' : 'border-[#FF1493]/20'
                } hover-lift`}
              >
                <h3 className="text-2xl font-bold text-[#FF1493] mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#D4AF37]">{tier.price}</span>
                  <span className="text-[#B9ADC9]">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#B9ADC9]">
                      <span className="text-[#FF1493]">✓</span> {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowAuditionModal(true)}
                  className={tier.highlighted ? 'btn-luxury w-full' : 'btn-luxury-outline w-full'}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Monetize?
          </h2>
          <p className="text-xl text-[#B9ADC9] mb-8 max-w-2xl mx-auto">
            Join thousands of creators earning premium income with Luxe Creator.
          </p>
          <button
            onClick={() => setShowAuditionModal(true)}
            className="btn-luxury text-lg px-12 py-4 animate-bounce"
          >
            Start Your Audition Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0E] border-t border-[#FF1493]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-[#F7F2FF] mb-4">Platform</h3>
              <ul className="space-y-2 text-[#B9ADC9]">
                <li><Link href="/dashboard" className="hover:text-[#FF1493] transition">Dashboard</Link></li>
                <li><Link href="/templates" className="hover:text-[#FF1493] transition">Templates</Link></li>
                <li><Link href="/exclusive" className="hover:text-[#FF1493] transition">Exclusive Content</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#F7F2FF] mb-4">Company</h3>
              <ul className="space-y-2 text-[#B9ADC9]">
                <li><a href="#" className="hover:text-[#FF1493] transition">About Us</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Blog</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#F7F2FF] mb-4">Legal</h3>
              <ul className="space-y-2 text-[#B9ADC9]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#F7F2FF] mb-4">Connect</h3>
              <ul className="space-y-2 text-[#B9ADC9]">
                <li><a href="#" className="hover:text-[#FF1493] transition">Twitter</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Instagram</a></li>
                <li><a href="#" className="hover:text-[#FF1493] transition">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FF1493]/20 pt-8 text-center text-[#9E91B1]">
            <p>&copy; 2026 Luxe Creator. All rights reserved. 18+ Platform.</p>
          </div>
        </div>
      </footer>

      {/* Audition Modal */}
      <AuditionModal isOpen={showAuditionModal} onClose={() => setShowAuditionModal(false)} />
    </div>
  );
}
