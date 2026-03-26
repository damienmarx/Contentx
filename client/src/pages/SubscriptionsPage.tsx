import { useState } from 'react';
import { CreditCard, TrendingUp, Users, DollarSign } from 'lucide-react';
import SubscriptionManager from '@/components/SubscriptionManager';

export default function SubscriptionsPage() {
  const [activeTab, setActiveTab] = useState('subscribers');

  return (
    <div className="min-h-screen bg-[#09070E] text-[#F7F2FF]">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF1493] to-[#C45CFF] flex items-center justify-center font-bold text-white shadow-lg">
              LC
            </div>
            <div>
              <div className="text-lg font-bold uppercase tracking-widest">Subscription Management</div>
              <div className="text-xs text-[#B9ADC9] uppercase">Revenue & Subscriber Control</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-12 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Subscription Management</span> Dashboard
            </h1>
            <p className="text-xl text-[#B9ADC9] mb-6">
              Manage all subscriber tiers, track revenue, handle refunds, and optimize your subscription strategy. Real-time analytics and compliance tools included.
            </p>

            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                <CreditCard size={18} className="text-[#FF1493]" />
                <span className="text-sm font-semibold">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                <Users size={18} className="text-[#C45CFF]" />
                <span className="text-sm font-semibold">Subscriber Management</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                <TrendingUp size={18} className="text-[#7B7DFF]" />
                <span className="text-sm font-semibold">Revenue Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation tabs */}
      <div className="border-b border-[#FF1493]/20 glass sticky top-16 z-30">
        <div className="container mx-auto px-4 flex gap-8">
          {[
            { id: 'subscribers', label: 'Subscribers', icon: '👥' },
            { id: 'tiers', label: 'Subscription Tiers', icon: '💎' },
            { id: 'revenue', label: 'Revenue', icon: '💰' },
            { id: 'settings', label: 'Payment Settings', icon: '⚙️' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 font-semibold border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-[#FF1493] text-[#FF1493]'
                  : 'border-transparent text-[#B9ADC9] hover:text-[#F7F2FF]'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        {activeTab === 'subscribers' && (
          <SubscriptionManager />
        )}

        {activeTab === 'tiers' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Subscription Tiers</h2>
              <p className="text-[#B9ADC9] mb-8">Manage your subscription pricing and features.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Basic',
                  price: '$19.99',
                  period: '/month',
                  features: ['Access to basic content', 'Monthly exclusives', 'Email support'],
                  subscribers: 847,
                },
                {
                  name: 'Standard',
                  price: '$49.99',
                  period: '/month',
                  features: ['All Basic features', 'Priority content access', 'Custom requests (2/month)', 'Priority support'],
                  subscribers: 234,
                  highlighted: true,
                },
                {
                  name: 'Premium',
                  price: '$99.99',
                  period: '/month',
                  features: ['All Standard features', 'Unlimited custom requests', '1-on-1 video calls', 'VIP support'],
                  subscribers: 89,
                },
              ].map((tier, idx) => (
                <div
                  key={idx}
                  className={`glass rounded-2xl p-6 border ${
                    tier.highlighted ? 'border-[#FF1493] scale-105' : 'border-[#FF1493]/20'
                  } hover:border-[#FF1493]/50 transition`}
                >
                  <h3 className="text-2xl font-bold text-[#FF1493] mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#D4AF37]">{tier.price}</span>
                    <span className="text-[#B9ADC9]">{tier.period}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#B9ADC9]">
                        <span className="text-[#FF1493]">✓</span> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-[#FF1493]/20 pt-4 mb-4">
                    <p className="text-sm text-[#B9ADC9]">{tier.subscribers} active subscribers</p>
                  </div>

                  <button className="w-full btn-luxury-outline text-sm">Edit Tier</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'revenue' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Revenue Analytics</h2>
              <p className="text-[#B9ADC9] mb-8">Track your earnings and revenue trends.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                <p className="text-sm text-[#B9ADC9] mb-2">This Month</p>
                <p className="text-4xl font-bold text-[#FF1493]">$4,247.89</p>
                <p className="text-xs text-[#74F0C1] mt-2">↑ 12% from last month</p>
              </div>
              <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                <p className="text-sm text-[#B9ADC9] mb-2">Annual Run Rate</p>
                <p className="text-4xl font-bold text-[#C45CFF]">$50,974.68</p>
                <p className="text-xs text-[#9E91B1] mt-2">Based on current MRR</p>
              </div>
              <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                <p className="text-sm text-[#B9ADC9] mb-2">Payouts This Month</p>
                <p className="text-4xl font-bold text-[#7B7DFF]">$3,823.11</p>
                <p className="text-xs text-[#9E91B1] mt-2">After platform fees (10%)</p>
              </div>
            </div>

            {/* Revenue chart placeholder */}
            <div className="glass rounded-2xl p-8 border border-[#FF1493]/20 text-center h-64 flex items-center justify-center">
              <div>
                <DollarSign className="w-16 h-16 text-[#B9ADC9] mx-auto mb-4 opacity-50" />
                <p className="text-[#B9ADC9]">Revenue chart coming soon</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Payment Settings</h2>
              <p className="text-[#B9ADC9] mb-8">Configure payment processing and payout options.</p>
            </div>

            <div className="space-y-6">
              {/* Stripe integration */}
              <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#F7F2FF] mb-2">Stripe Integration</h3>
                    <p className="text-[#B9ADC9]">Connected account for secure payment processing</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#74F0C1]/20 text-[#BFF7E2]">✓ Active</span>
                </div>
                <div className="bg-[#120D19] rounded-lg p-4 text-sm text-[#B9ADC9]">
                  <p className="mb-2">Account: stripe_acct_1234567890</p>
                  <p className="mb-2">Status: Verified</p>
                  <p>Processing fee: 2.9% + $0.30 per transaction</p>
                </div>
              </div>

              {/* Payout settings */}
              <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Payout Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Payout Frequency</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:border-[#FF1493] focus:outline-none transition">
                      <option>Weekly</option>
                      <option>Bi-weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Payout Method</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:border-[#FF1493] focus:outline-none transition">
                      <option>Bank Transfer (ACH)</option>
                      <option>Wire Transfer</option>
                      <option>PayPal</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Tax information */}
              <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Tax Information</h3>
                <p className="text-[#B9ADC9] mb-4">Ensure your tax documents are current for proper 1099 reporting.</p>
                <button className="btn-luxury">Update Tax Information</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
