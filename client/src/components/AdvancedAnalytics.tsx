import { useState } from 'react';
import { BarChart3, LineChart, PieChart, Download, Filter } from 'lucide-react';

interface AnalyticsData {
  period: string;
  revenue: number;
  subscribers: number;
  engagement: number;
  growth: number;
}

export default function AdvancedAnalytics() {
  const [timeframe, setTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const analyticsData: AnalyticsData[] = [
    { period: 'Week 1', revenue: 8200, subscribers: 145, engagement: 78, growth: 12 },
    { period: 'Week 2', revenue: 9400, subscribers: 178, engagement: 82, growth: 15 },
    { period: 'Week 3', revenue: 11200, subscribers: 234, engagement: 85, growth: 18 },
    { period: 'Week 4', revenue: 13400, subscribers: 289, engagement: 88, growth: 22 },
  ];

  const platformMetrics = [
    { platform: 'OnlyFans', revenue: 28400, subscribers: 847, percentage: 45 },
    { platform: 'Instagram', revenue: 18900, subscribers: 523, percentage: 30 },
    { platform: 'TikTok', revenue: 12600, subscribers: 389, percentage: 20 },
    { platform: 'Snapchat', revenue: 3800, subscribers: 98, percentage: 5 },
  ];

  const contentPerformance = [
    { title: 'Exclusive Photoshoot #5', views: 2847, engagement: 12.4, revenue: 3420 },
    { title: 'Behind-the-Scenes Vlog', views: 1923, engagement: 9.8, revenue: 1840 },
    { title: 'Q&A Session Live', views: 1654, engagement: 15.2, revenue: 2140 },
    { title: 'Custom Request Bundle', views: 1203, engagement: 8.6, revenue: 1680 },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#F7F2FF] mb-2 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-[#FF1493]" />
            Advanced Analytics
          </h2>
          <p className="text-[#B9ADC9]">Deep insights into your creator business performance</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#120D19] border border-[#FF1493]/20 text-[#B9ADC9] hover:border-[#FF1493] transition">
          <Download size={18} /> Export Report
        </button>
      </div>

      {/* Timeframe Selector */}
      <div className="flex gap-2 flex-wrap">
        {['7d', '30d', '90d', '1y'].map(period => (
          <button
            key={period}
            onClick={() => setTimeframe(period)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              timeframe === period
                ? 'bg-gradient-to-r from-[#FF1493] to-[#C45CFF] text-black'
                : 'bg-[#120D19] border border-[#FF1493]/20 text-[#B9ADC9] hover:border-[#FF1493]'
            }`}
          >
            {period === '7d' && 'Last 7 Days'}
            {period === '30d' && 'Last 30 Days'}
            {period === '90d' && 'Last 90 Days'}
            {period === '1y' && 'Last Year'}
          </button>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Total Revenue</p>
          <p className="text-4xl font-bold text-[#FF1493]">$42,200</p>
          <p className="text-xs text-[#74F0C1] mt-2">↑ 18% vs last period</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">New Subscribers</p>
          <p className="text-4xl font-bold text-[#C45CFF]">289</p>
          <p className="text-xs text-[#74F0C1] mt-2">↑ 22% vs last period</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Avg Engagement</p>
          <p className="text-4xl font-bold text-[#7B7DFF]">88%</p>
          <p className="text-xs text-[#74F0C1] mt-2">↑ 8% vs last period</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Retention Rate</p>
          <p className="text-4xl font-bold text-[#FFD37A]">94%</p>
          <p className="text-xs text-[#74F0C1] mt-2">↑ 3% vs last period</p>
        </div>
      </div>

      {/* Revenue Trend */}
      <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-6 flex items-center gap-2">
          <LineChart className="w-5 h-5 text-[#FF1493]" /> Revenue Trend
        </h3>
        <div className="space-y-4">
          {analyticsData.map((data, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-[#F7F2FF]">{data.period}</span>
                <span className="text-lg font-bold text-[#FF1493]">${data.revenue.toLocaleString()}</span>
              </div>
              <div className="w-full h-3 bg-[#120D19] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF1493] to-[#C45CFF]"
                  style={{ width: `${(data.revenue / 15000) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Distribution */}
      <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-6 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-[#FF1493]" /> Revenue by Platform
        </h3>
        <div className="space-y-4">
          {platformMetrics.map((metric, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold text-[#F7F2FF]">{metric.platform}</p>
                  <p className="text-xs text-[#B9ADC9]">{metric.subscribers} subscribers</p>
                </div>
                <p className="text-lg font-bold text-[#FF1493]">${metric.revenue.toLocaleString()}</p>
              </div>
              <div className="w-full h-3 bg-[#120D19] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF1493] to-[#C45CFF]"
                  style={{ width: `${metric.percentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-[#9E91B1] mt-1">{metric.percentage}% of total</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performing Content */}
      <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-6">Top Performing Content</h3>
        <div className="space-y-4">
          {contentPerformance.map((content, idx) => (
            <div key={idx} className="p-4 bg-[#120D19] rounded-lg border border-[#FF1493]/10 hover:border-[#FF1493]/30 transition">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-[#F7F2FF]">{content.title}</h4>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF1493]/20 text-[#FFD9EF]">
                  #{idx + 1}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-[#B9ADC9] mb-1">Views</p>
                  <p className="text-lg font-bold text-[#F7F2FF]">{content.views.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-[#B9ADC9] mb-1">Engagement</p>
                  <p className="text-lg font-bold text-[#C45CFF]">{content.engagement}%</p>
                </div>
                <div>
                  <p className="text-xs text-[#B9ADC9] mb-1">Revenue</p>
                  <p className="text-lg font-bold text-[#7B7DFF]">${content.revenue.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscriber Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
          <h3 className="text-lg font-bold text-[#F7F2FF] mb-6">Subscriber Breakdown</h3>
          <div className="space-y-4">
            {[
              { tier: 'Premium ($99.99)', count: 89, percentage: 8 },
              { tier: 'Standard ($49.99)', count: 234, percentage: 22 },
              { tier: 'Basic ($19.99)', count: 847, percentage: 70 },
            ].map((tier, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-[#F7F2FF]">{tier.tier}</span>
                  <span className="text-lg font-bold text-[#FF1493]">{tier.count}</span>
                </div>
                <div className="w-full h-2 bg-[#120D19] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF1493] to-[#C45CFF]"
                    style={{ width: `${tier.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
          <h3 className="text-lg font-bold text-[#F7F2FF] mb-6">Churn Analysis</h3>
          <div className="space-y-4">
            <div className="p-4 bg-[#74F0C1]/10 rounded-lg border border-[#74F0C1]/20">
              <p className="text-sm text-[#BFF7E2] mb-1">Monthly Churn Rate</p>
              <p className="text-3xl font-bold text-[#74F0C1]">2.3%</p>
              <p className="text-xs text-[#BFF7E2] mt-2">↓ 0.8% improvement</p>
            </div>
            <div className="p-4 bg-[#FFD37A]/10 rounded-lg border border-[#FFD37A]/20">
              <p className="text-sm text-[#FFE7AA] mb-1">Avg Subscriber Lifetime</p>
              <p className="text-3xl font-bold text-[#FFD37A]">8.4 months</p>
              <p className="text-xs text-[#FFE7AA] mt-2">↑ 1.2 months vs last year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
