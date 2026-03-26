import { useState } from 'react';
import { Copy, Share2, TrendingUp, Users, DollarSign } from 'lucide-react';

interface AffiliateStats {
  referrals: number;
  commissionRate: number;
  totalEarned: number;
  pendingPayment: number;
  conversions: number;
}

export default function AffiliateSystem() {
  const [affiliateCode] = useState('LUXE_ARIA_2847');
  const [copied, setCopied] = useState(false);
  const [stats] = useState<AffiliateStats>({
    referrals: 247,
    commissionRate: 20,
    totalEarned: 12450,
    pendingPayment: 2840,
    conversions: 89,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://luxecreator.com?ref=${affiliateCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      platform: 'Twitter',
      icon: '𝕏',
      url: `https://twitter.com/intent/tweet?text=Join%20me%20on%20Luxe%20Creator%20and%20start%20monetizing%20your%20content%20today!%20Use%20code%20${affiliateCode}`,
    },
    {
      platform: 'Instagram',
      icon: '📷',
      url: '#',
    },
    {
      platform: 'TikTok',
      icon: '🎵',
      url: '#',
    },
    {
      platform: 'Discord',
      icon: '💬',
      url: '#',
    },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-[#F7F2FF] mb-4 flex items-center gap-3">
          <Users className="w-8 h-8 text-[#FF1493]" />
          Affiliate & Referral Program
        </h2>
        <p className="text-[#B9ADC9]">
          Earn 20% commission on every creator you refer. Unlimited earning potential with our top-tier affiliate program.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-5 gap-4">
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-xs text-[#B9ADC9] mb-2">Total Referrals</p>
          <p className="text-3xl font-bold text-[#FF1493]">{stats.referrals}</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-xs text-[#B9ADC9] mb-2">Commission Rate</p>
          <p className="text-3xl font-bold text-[#C45CFF]">{stats.commissionRate}%</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-xs text-[#B9ADC9] mb-2">Total Earned</p>
          <p className="text-3xl font-bold text-[#7B7DFF]">${stats.totalEarned.toLocaleString()}</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-xs text-[#B9ADC9] mb-2">Pending Payment</p>
          <p className="text-3xl font-bold text-[#FFD37A]">${stats.pendingPayment.toLocaleString()}</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-xs text-[#B9ADC9] mb-2">Conversions</p>
          <p className="text-3xl font-bold text-[#74F0C1]">{stats.conversions}</p>
        </div>
      </div>

      {/* Referral Link */}
      <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Your Referral Link</h3>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={`https://luxecreator.com?ref=${affiliateCode}`}
            readOnly
            className="flex-1 px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-6 py-3 rounded-xl bg-[#FF1493]/20 border border-[#FF1493] text-[#FF1493] font-bold hover:bg-[#FF1493]/30 transition flex items-center gap-2"
          >
            <Copy size={18} /> {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Share buttons */}
        <div>
          <p className="text-sm text-[#B9ADC9] mb-3">Share on social media:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {shareLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] hover:border-[#FF1493] transition"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-sm font-bold">{link.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Affiliate Tiers */}
      <div>
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Affiliate Tiers</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tier: 'Bronze',
              referrals: '0-50',
              commission: '15%',
              bonus: 'Basic support',
            },
            {
              tier: 'Silver',
              referrals: '51-150',
              commission: '20%',
              bonus: 'Priority support + marketing materials',
              highlighted: true,
            },
            {
              tier: 'Gold',
              referrals: '150+',
              commission: '25%',
              bonus: 'Dedicated manager + co-marketing',
            },
          ].map((tier, idx) => (
            <div
              key={idx}
              className={`glass rounded-2xl p-6 border ${
                tier.highlighted ? 'border-[#FF1493] scale-105' : 'border-[#FF1493]/20'
              }`}
            >
              <h4 className="text-xl font-bold text-[#FF1493] mb-4">{tier.tier}</h4>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-[#B9ADC9]">Referrals</p>
                  <p className="text-lg font-bold text-[#F7F2FF]">{tier.referrals}</p>
                </div>
                <div>
                  <p className="text-xs text-[#B9ADC9]">Commission</p>
                  <p className="text-lg font-bold text-[#C45CFF]">{tier.commission}</p>
                </div>
                <div>
                  <p className="text-xs text-[#B9ADC9]">Bonus</p>
                  <p className="text-sm text-[#B9ADC9]">{tier.bonus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Affiliates */}
      <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#FFD37A]" /> Top Affiliates This Month
        </h3>
        <div className="space-y-3">
          {[
            { rank: 1, name: 'Aria Diamond', referrals: 47, earned: '$9,400' },
            { rank: 2, name: 'Jasmine Luxe', referrals: 32, earned: '$6,400' },
            { rank: 3, name: 'Victoria Rose', referrals: 28, earned: '$5,600' },
            { rank: 4, name: 'Luna Eclipse', referrals: 19, earned: '$3,800' },
            { rank: 5, name: 'Sage Phoenix', referrals: 15, earned: '$3,000' },
          ].map((affiliate) => (
            <div key={affiliate.rank} className="flex items-center justify-between p-4 bg-[#120D19] rounded-lg border border-[#FF1493]/10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF1493] to-[#C45CFF] flex items-center justify-center font-bold text-white">
                  {affiliate.rank}
                </div>
                <div>
                  <p className="font-bold text-[#F7F2FF]">{affiliate.name}</p>
                  <p className="text-xs text-[#B9ADC9]">{affiliate.referrals} referrals</p>
                </div>
              </div>
              <p className="text-lg font-bold text-[#FF1493]">{affiliate.earned}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
