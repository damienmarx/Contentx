import { useState } from 'react';
import { Link } from 'wouter';
import { Zap, Eye, Lock, TrendingUp } from 'lucide-react';

export default function ScenarioShowcase() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      title: 'The Rising Star',
      subtitle: 'From Zero to $50K Monthly',
      description: 'Meet Aria. Six months ago, she had 5K followers and zero income. Today? She\'s earning $50,000 monthly with Luxe Creator.',
      story: `Aria started with raw talent but zero infrastructure. She tried everything—TikTok, Instagram, YouTube—but couldn't monetize effectively. 

With Luxe Creator, she:
• Set up tiered subscriptions ($9.99, $29.99, $99.99)
• Used our templates to launch on 6 platforms simultaneously
• Built a community of 2,847 paying subscribers
• Automated her content distribution

Result: $50,000/month recurring revenue. She's now hiring a team.`,
      metrics: [
        { label: 'Monthly Revenue', value: '$50,000' },
        { label: 'Subscribers', value: '2,847' },
        { label: 'Platforms', value: '6' },
        { label: 'Time to Launch', value: '2 weeks' },
      ],
      color: 'from-[#FF1493] to-[#FFB6D9]',
    },
    {
      title: 'The Niche Dominator',
      subtitle: 'Specialization = Premium Pricing',
      description: 'Victoria focused on a specific niche. Now she commands $99.99/month subscriptions with 89% retention.',
      story: `Victoria didn't try to appeal to everyone. She doubled down on her niche—and it paid off massively.

Strategy:
• Positioned as premium/exclusive (not mass-market)
• Used Luxe Creator's DRM to protect exclusive content
• Created tiered access (Basic $19.99, Premium $49.99, VIP $99.99)
• Leveraged our affiliate system to grow through referrals

Result: 934 premium subscribers at $99.99/month = $93,400 monthly. 89% retention rate.`,
      metrics: [
        { label: 'Premium Subscribers', value: '934' },
        { label: 'Average Tier', value: '$99.99/mo' },
        { label: 'Retention Rate', value: '89%' },
        { label: 'Revenue/Month', value: '$93,400' },
      ],
      color: 'from-[#C45CFF] to-[#E8B4FF]',
    },
    {
      title: 'The Automation Master',
      subtitle: 'Work Smarter, Not Harder',
      description: 'Jasmine automated 80% of her workflow. Now she earns while sleeping.',
      story: `Jasmine was burning out. Creating content for 6 platforms daily was unsustainable.

She discovered Luxe Creator's automation:
• Template-based content creation (saves 15 hours/week)
• Multi-platform scheduling (post once, reach everywhere)
• Automated subscriber tier management
• AI-powered content recommendations

Now she:
• Creates content 2x/week instead of daily
• Reaches 6 platforms simultaneously
• Earns $31,500/month with 20 hours/week effort
• Has time for personal projects

Result: Same revenue, 60% less work.`,
      metrics: [
        { label: 'Time Saved/Week', value: '15 hours' },
        { label: 'Monthly Revenue', value: '$31,500' },
        { label: 'Work Hours/Week', value: '20' },
        { label: 'Platforms Automated', value: '6' },
      ],
      color: 'from-[#7B7DFF] to-[#B4B7FF]',
    },
    {
      title: 'The Diversification Expert',
      subtitle: 'Multiple Revenue Streams = Stability',
      description: 'Luna didn\'t rely on subscriptions alone. She built a diversified empire.',
      story: `Luna understood the power of diversification. She didn't put all eggs in one basket.

Revenue Streams:
1. Subscriptions: $18,000/month (1,200 subscribers)
2. Affiliate Commissions: $4,200/month (20% on referrals)
3. Tips During Live Streams: $2,800/month
4. Custom Content Requests: $3,500/month
5. Merchandise Sales: $2,100/month

Total: $30,600/month from 5 different sources.

If one stream dries up, she's still earning from 4 others.`,
      metrics: [
        { label: 'Revenue Streams', value: '5' },
        { label: 'Monthly Revenue', value: '$30,600' },
        { label: 'Largest Stream', value: '$18,000' },
        { label: 'Diversification Score', value: '95%' },
      ],
      color: 'from-[#D4AF37] to-[#FFD700]',
    },
  ];

  const currentScenario = scenarios[activeScenario];

  return (
    <div className="min-h-screen bg-[#09070E] text-[#F7F2FF]">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF1493] to-[#C45CFF] flex items-center justify-center font-bold text-white">
              LC
            </div>
            <span className="text-lg font-bold uppercase tracking-widest">Luxe Creator</span>
          </Link>
          <Link href="/" className="btn-luxury-outline text-xs px-6 py-2">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="eyebrow animate-fade-in-up">
              🎬 Real Creator Success Stories
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-provocative-lg glow-pink-intense">
                See How Creators
              </span>
              <br />
              <span className="gradient-text">Made It Big</span>
            </h1>
            <p className="text-xl text-[#B9ADC9] max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Real stories. Real numbers. Real creators using Luxe Creator to build sustainable, profitable empires.
            </p>
          </div>
        </div>
      </section>

      {/* Scenario Selector */}
      <section className="py-12 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scenarios.map((scenario, idx) => (
              <button
                key={idx}
                onClick={() => setActiveScenario(idx)}
                className={`p-4 rounded-2xl border transition ${
                  activeScenario === idx
                    ? 'bg-gradient-to-br ' + scenario.color + ' border-[#FF1493] text-black'
                    : 'glass border-[#FF1493]/20 text-[#F7F2FF] hover:border-[#FF1493]'
                }`}
              >
                <p className="font-bold text-sm mb-1">{scenario.title}</p>
                <p className="text-xs opacity-80">{scenario.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Story */}
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold mb-4 text-provocative">
                {currentScenario.title}
              </h2>
              <p className="text-2xl text-[#B9ADC9] mb-8 font-semibold">
                {currentScenario.subtitle}
              </p>

              <div className="glass rounded-2xl p-8 border border-[#FF1493]/20 mb-8">
                <p className="text-[#B9ADC9] whitespace-pre-line leading-relaxed">
                  {currentScenario.story}
                </p>
              </div>

              <button className="btn-luxury w-full md:w-auto">
                Start Your Story →
              </button>
            </div>

            {/* Right: Metrics */}
            <div className="animate-slide-in-right">
              <div className={`bg-gradient-to-br ${currentScenario.color} rounded-3xl p-12 text-black mb-8`}>
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">Results</h3>
                <div className="space-y-6">
                  {currentScenario.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <p className="text-sm font-bold opacity-80 mb-2">{metric.label}</p>
                      <p className="text-4xl font-bold">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
                <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Key Takeaway</h3>
                <p className="text-[#B9ADC9]">
                  {activeScenario === 0 && 'Success isn\'t about starting big. It\'s about starting smart with the right tools.'}
                  {activeScenario === 1 && 'Specialization allows you to command premium pricing and build a loyal, high-value community.'}
                  {activeScenario === 2 && 'Automation isn\'t lazy—it\'s strategic. Work smarter, not harder.'}
                  {activeScenario === 3 && 'Diversification creates stability. Multiple revenue streams = sustainable income.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlighted */}
      <section className="py-20 border-t border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Features That Made It Possible
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap size={32} />,
                title: 'Automated Templates',
                desc: 'Save 15+ hours/week with one-click multi-platform publishing',
              },
              {
                icon: <Lock size={32} />,
                title: 'DRM Protection',
                desc: 'Military-grade encryption keeps your exclusive content safe',
              },
              {
                icon: <Eye size={32} />,
                title: 'Real-Time Analytics',
                desc: 'Know exactly what\'s working and optimize on the fly',
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Growth Tools',
                desc: 'Affiliate system, live streaming, and AI recommendations',
              },
            ].map((feature, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 border border-[#FF1493]/20 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF1493] to-[#C45CFF] flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F7F2FF] mb-2">{feature.title}</h3>
                <p className="text-[#B9ADC9] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[#FF1493]/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-provocative">
            Your Story Starts Here
          </h2>
          <p className="text-xl text-[#B9ADC9] mb-8 max-w-2xl mx-auto">
            Join 2,847+ creators who are already earning premium income. Your success story could be next.
          </p>
          <Link href="/" className="btn-luxury text-lg px-12 py-4 inline-block">
            Start Your Audition Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0E] border-t border-[#FF1493]/20 py-12">
        <div className="container mx-auto px-4 text-center text-[#9E91B1]">
          <p>&copy; 2026 Luxe Creator. Real stories. Real results. Real income.</p>
        </div>
      </footer>
    </div>
  );
}
