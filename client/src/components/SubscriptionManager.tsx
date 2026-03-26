import { useState } from 'react';
import { CreditCard, X, Check, AlertCircle, Download } from 'lucide-react';

interface Subscriber {
  id: string;
  name: string;
  email: string;
  tier: 'Premium' | 'Standard' | 'Basic';
  joinDate: string;
  monthlySpend: number;
  status: 'Active' | 'Paused' | 'Cancelled';
  lastPayment: string;
  nextBillingDate: string;
}

const MOCK_SUBSCRIBERS: Subscriber[] = [
  {
    id: '1',
    name: 'Alex M.',
    email: 'alex***@gmail.com',
    tier: 'Premium',
    joinDate: '2025-08-15',
    monthlySpend: 99.99,
    status: 'Active',
    lastPayment: '2026-03-20',
    nextBillingDate: '2026-04-20',
  },
  {
    id: '2',
    name: 'Jordan K.',
    email: 'jordan***@yahoo.com',
    tier: 'Standard',
    joinDate: '2025-10-22',
    monthlySpend: 49.99,
    status: 'Active',
    lastPayment: '2026-03-18',
    nextBillingDate: '2026-04-18',
  },
  {
    id: '3',
    name: 'Casey R.',
    email: 'casey***@outlook.com',
    tier: 'Basic',
    joinDate: '2025-12-01',
    monthlySpend: 19.99,
    status: 'Active',
    lastPayment: '2026-03-15',
    nextBillingDate: '2026-04-15',
  },
  {
    id: '4',
    name: 'Morgan L.',
    email: 'morgan***@gmail.com',
    tier: 'Premium',
    joinDate: '2026-01-10',
    monthlySpend: 99.99,
    status: 'Paused',
    lastPayment: '2026-03-10',
    nextBillingDate: '2026-04-10',
  },
];

export default function SubscriptionManager() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>(MOCK_SUBSCRIBERS);
  const [filterStatus, setFilterStatus] = useState<'All' | 'Active' | 'Paused' | 'Cancelled'>('All');
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null);

  const filteredSubscribers = filterStatus === 'All'
    ? subscribers
    : subscribers.filter(s => s.status === filterStatus);

  const totalRevenue = subscribers
    .filter(s => s.status === 'Active')
    .reduce((sum, s) => sum + s.monthlySpend, 0);

  const activeCount = subscribers.filter(s => s.status === 'Active').length;
  const pausedCount = subscribers.filter(s => s.status === 'Paused').length;
  const cancelledCount = subscribers.filter(s => s.status === 'Cancelled').length;

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Premium':
        return 'from-[#FF1493] to-[#C45CFF]';
      case 'Standard':
        return 'from-[#C45CFF] to-[#7B7DFF]';
      case 'Basic':
        return 'from-[#7B7DFF] to-[#D4AF37]';
      default:
        return 'from-[#FF1493] to-[#7B7DFF]';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-[#74F0C1]/20 text-[#BFF7E2]';
      case 'Paused':
        return 'bg-[#FFD37A]/20 text-[#FFE7AA]';
      case 'Cancelled':
        return 'bg-[#FF8C9F]/20 text-[#FFD9EF]';
      default:
        return 'bg-[#B9ADC9]/20 text-[#EADFFF]';
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Total Subscribers</p>
          <p className="text-4xl font-bold text-[#FF1493]">{subscribers.length}</p>
          <p className="text-xs text-[#9E91B1] mt-2">Across all tiers</p>
        </div>

        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Active Subscribers</p>
          <p className="text-4xl font-bold text-[#74F0C1]">{activeCount}</p>
          <p className="text-xs text-[#9E91B1] mt-2">Currently paying</p>
        </div>

        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Monthly Revenue</p>
          <p className="text-4xl font-bold text-[#C45CFF]">${totalRevenue.toFixed(2)}</p>
          <p className="text-xs text-[#9E91B1] mt-2">Recurring MRR</p>
        </div>

        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Churn Rate</p>
          <p className="text-4xl font-bold text-[#7B7DFF]">2.3%</p>
          <p className="text-xs text-[#9E91B1] mt-2">Monthly churn</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {['All', 'Active', 'Paused', 'Cancelled'].map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status as any)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              filterStatus === status
                ? 'bg-gradient-to-r from-[#FF1493] to-[#C45CFF] text-black'
                : 'bg-[#120D19] border border-[#FF1493]/20 text-[#B9ADC9] hover:border-[#FF1493]'
            }`}
          >
            {status} ({status === 'All' ? subscribers.length : status === 'Active' ? activeCount : status === 'Paused' ? pausedCount : cancelledCount})
          </button>
        ))}
      </div>

      {/* Export button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#120D19] border border-[#FF1493]/20 text-[#B9ADC9] hover:border-[#FF1493] transition">
          <Download size={18} /> Export CSV
        </button>
      </div>

      {/* Subscribers table */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#F7F2FF]">
          {filterStatus === 'All' ? 'All Subscribers' : `${filterStatus} Subscribers`} ({filteredSubscribers.length})
        </h3>

        {filteredSubscribers.length === 0 ? (
          <div className="glass rounded-2xl p-12 border border-[#FF1493]/20 text-center">
            <CreditCard className="w-12 h-12 text-[#B9ADC9] mx-auto mb-4 opacity-50" />
            <p className="text-[#B9ADC9]">No subscribers in this category.</p>
          </div>
        ) : (
          filteredSubscribers.map(subscriber => (
            <div
              key={subscriber.id}
              className="glass rounded-2xl p-6 border border-[#FF1493]/20 hover:border-[#FF1493]/50 transition"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Left side */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getTierColor(subscriber.tier)} flex items-center justify-center text-white font-bold text-sm`}>
                      {subscriber.name.split(' ')[0][0]}{subscriber.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#F7F2FF]">{subscriber.name}</h4>
                      <p className="text-xs text-[#B9ADC9]">{subscriber.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-[#9E91B1] mb-1">Tier</p>
                      <p className="text-sm font-semibold text-[#F7F2FF]">{subscriber.tier}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9E91B1] mb-1">Monthly</p>
                      <p className="text-sm font-semibold text-[#FF1493]">${subscriber.monthlySpend.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9E91B1] mb-1">Joined</p>
                      <p className="text-sm font-semibold text-[#F7F2FF]">{subscriber.joinDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9E91B1] mb-1">Last Payment</p>
                      <p className="text-sm font-semibold text-[#F7F2FF]">{subscriber.lastPayment}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9E91B1] mb-1">Next Billing</p>
                      <p className="text-sm font-semibold text-[#F7F2FF]">{subscriber.nextBillingDate}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(subscriber.status)}`}>
                    {subscriber.status === 'Active' && <Check size={14} />}
                    {subscriber.status === 'Paused' && <AlertCircle size={14} />}
                    {subscriber.status === 'Cancelled' && <X size={14} />}
                    {subscriber.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => {
                      setSelectedSubscriber(subscriber);
                      setShowRefundModal(true);
                    }}
                    className="px-4 py-2 rounded-lg bg-[#120D19] border border-[#FF1493]/20 text-[#B9ADC9] text-sm font-bold hover:border-[#FF1493] transition"
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Refund/Management Modal */}
      {showRefundModal && selectedSubscriber && (
        <>
          <div
            className="fixed inset-0 bg-black/68 backdrop-blur-sm z-40"
            onClick={() => setShowRefundModal(false)}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="glass rounded-3xl border border-[#FF1493]/30 w-full max-w-2xl">
              <div className="p-6 border-b border-[#FF1493]/20 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#FF1493]">Manage Subscription</h2>
                <button
                  onClick={() => setShowRefundModal(false)}
                  className="text-2xl text-[#B9ADC9] hover:text-[#F7F2FF]"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Subscriber info */}
                <div className="bg-[#120D19] rounded-lg p-4 border border-[#FF1493]/10">
                  <p className="text-sm text-[#B9ADC9] mb-2">Subscriber</p>
                  <p className="text-lg font-bold text-[#F7F2FF]">{selectedSubscriber.name}</p>
                  <p className="text-xs text-[#9E91B1] mt-1">{selectedSubscriber.email}</p>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 rounded-lg bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] font-bold hover:border-[#FF1493] transition">
                    Send Message
                  </button>
                  <button className="w-full px-4 py-3 rounded-lg bg-[#120D19] border border-[#FFD37A]/20 text-[#FFE7AA] font-bold hover:border-[#FFD37A] transition">
                    Pause Subscription
                  </button>
                  <button className="w-full px-4 py-3 rounded-lg bg-[#120D19] border border-[#FF8C9F]/20 text-[#FFD9EF] font-bold hover:border-[#FF8C9F] transition">
                    Issue Refund
                  </button>
                </div>

                {/* Refund policy */}
                <div className="bg-[#FFC107]/5 rounded-lg p-4 border border-[#FFD37A]/30">
                  <p className="text-xs text-[#FFE7AA] leading-relaxed">
                    <strong>Refund Policy:</strong> Refunds are processed within 3-5 business days. Ensure you have a valid reason documented before issuing refunds.
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setShowRefundModal(false)}
                  className="w-full btn-luxury-outline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
