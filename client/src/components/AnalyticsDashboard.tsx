import { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Eye, Heart, Share2 } from 'lucide-react';

interface Metric {
  label: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  color: string;
}

export default function AnalyticsDashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: 'Total Subscribers',
      value: '847,234',
      change: 12.5,
      icon: <Users className="w-6 h-6" />,
      color: 'from-[#FF1493] to-[#C45CFF]',
    },
    {
      label: 'Monthly Revenue',
      value: '$124,567',
      change: 28.3,
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-[#C45CFF] to-[#7B7DFF]',
    },
    {
      label: 'Content Views',
      value: '2.4M',
      change: 45.2,
      icon: <Eye className="w-6 h-6" />,
      color: 'from-[#7B7DFF] to-[#D4AF37]',
    },
    {
      label: 'Engagement Rate',
      value: '8.7%',
      change: 3.1,
      icon: <Heart className="w-6 h-6" />,
      color: 'from-[#D4AF37] to-[#FF1493]',
    },
  ]);

  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  useEffect(() => {
    // Animate metric values on mount
    metrics.forEach((metric, idx) => {
      setTimeout(() => {
        setAnimatedValues(prev => ({
          ...prev,
          [metric.label]: Math.random() * 100,
        }));
      }, idx * 100);
    });
  }, []);

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="glass rounded-2xl p-6 border border-[#FF1493]/20 hover:border-[#FF1493]/50 transition group"
          >
            {/* Icon */}
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} p-2.5 text-white mb-4 group-hover:scale-110 transition`}>
              {metric.icon}
            </div>

            {/* Label */}
            <p className="text-sm text-[#B9ADC9] mb-2">{metric.label}</p>

            {/* Value */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-bold text-[#F7F2FF]">{metric.value}</span>
              <span className={`text-sm font-bold ${metric.change > 0 ? 'text-[#74F0C1]' : 'text-[#FF8C9F]'}`}>
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
            </div>

            {/* Trend bar */}
            <div className="w-full h-1 bg-[#120D19] rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                style={{
                  width: `${Math.min((animatedValues[metric.label] || 0) + 60, 100)}%`,
                  transition: 'width 0.6s ease-out',
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart section */}
      <div className="mt-8 glass rounded-2xl p-6 border border-[#FF1493]/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-[#F7F2FF]">Revenue Trend (Last 30 Days)</h3>
          <select className="px-3 py-2 rounded-lg bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] text-sm">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last Year</option>
          </select>
        </div>

        {/* Mini chart */}
        <div className="flex items-end justify-between h-32 gap-2">
          {[45, 52, 48, 61, 55, 68, 72, 65, 78, 82, 75, 88, 92, 85, 95, 98, 102, 105, 108, 110, 115, 118, 120, 125, 128, 130, 135, 138, 140, 145].map((value, idx) => (
            <div
              key={idx}
              className="flex-1 bg-gradient-to-t from-[#FF1493] to-[#C45CFF] rounded-t opacity-70 hover:opacity-100 transition group"
              style={{
                height: `${(value / 150) * 100}%`,
              }}
            >
              <div className="w-full h-full rounded-t flex items-end justify-center pb-1 text-xs text-white opacity-0 group-hover:opacity-100 transition">
                ${Math.floor(value * 1000)}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#9E91B1] mt-4 text-center">Daily revenue progression</p>
      </div>

      {/* Platform breakdown */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Platform Distribution</h3>
          <div className="space-y-4">
            {[
              { platform: 'OnlyFans', percentage: 45, subscribers: '381K' },
              { platform: 'Instagram', percentage: 28, subscribers: '237K' },
              { platform: 'TikTok', percentage: 18, subscribers: '152K' },
              { platform: 'Snapchat', percentage: 9, subscribers: '76K' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-[#F7F2FF]">{item.platform}</span>
                  <span className="text-xs text-[#B9ADC9]">{item.subscribers}</span>
                </div>
                <div className="w-full h-2 bg-[#120D19] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF1493] to-[#C45CFF] rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-[#9E91B1] mt-1">{item.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Top Performing Content</h3>
          <div className="space-y-3">
            {[
              { title: 'Exclusive Behind-the-Scenes', views: '234K', engagement: '12.3%' },
              { title: 'Q&A Session Archive', views: '189K', engagement: '9.8%' },
              { title: 'Lifestyle & Wellness Tips', views: '156K', engagement: '8.5%' },
              { title: 'Personal Brand Story', views: '142K', engagement: '7.2%' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-[#120D19] rounded-lg border border-[#FF1493]/10 hover:border-[#FF1493]/30 transition">
                <p className="text-sm font-semibold text-[#F7F2FF] mb-1">{item.title}</p>
                <div className="flex justify-between text-xs text-[#B9ADC9]">
                  <span>{item.views} views</span>
                  <span className="text-[#74F0C1]">{item.engagement} engagement</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
