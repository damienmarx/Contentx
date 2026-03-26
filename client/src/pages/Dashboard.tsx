import { useState } from 'react';
import { LogOut, Settings, Bell, BarChart3 } from 'lucide-react';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

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
              <div className="text-lg font-bold uppercase tracking-widest">Creator Dashboard</div>
              <div className="text-xs text-[#B9ADC9] uppercase">Aria Luxe</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-lg border border-[#FF1493]/30 bg-[#120D19] flex items-center justify-center hover:bg-[#FF1493]/10 transition">
              <Bell size={20} />
            </button>
            <button className="w-10 h-10 rounded-lg border border-[#FF1493]/30 bg-[#120D19] flex items-center justify-center hover:bg-[#FF1493]/10 transition">
              <Settings size={20} />
            </button>
            <button className="w-10 h-10 rounded-lg border border-[#FF1493]/30 bg-[#120D19] flex items-center justify-center hover:bg-[#FF1493]/10 transition text-[#FF8C9F]">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation tabs */}
      <div className="border-b border-[#FF1493]/20 glass sticky top-16 z-30">
        <div className="container mx-auto px-4 flex gap-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'analytics', label: 'Analytics', icon: '📈' },
            { id: 'content', label: 'Content', icon: '📹' },
            { id: 'subscribers', label: 'Subscribers', icon: '👥' },
            { id: 'settings', label: 'Settings', icon: '⚙️' },
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
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, Aria!</h1>
              <p className="text-[#B9ADC9]">Here's your creator performance at a glance.</p>
            </div>

            {/* Quick stats */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'This Month', value: '$12,450', change: '+18%', color: 'from-[#FF1493] to-[#C45CFF]' },
                { label: 'New Subscribers', value: '1,247', change: '+8%', color: 'from-[#C45CFF] to-[#7B7DFF]' },
                { label: 'Avg Engagement', value: '8.7%', change: '+2.3%', color: 'from-[#7B7DFF] to-[#D4AF37]' },
                { label: 'Content Views', value: '245K', change: '+34%', color: 'from-[#D4AF37] to-[#FF1493]' },
              ].map((stat, idx) => (
                <div key={idx} className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                  <p className="text-sm text-[#B9ADC9] mb-2">{stat.label}</p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold text-[#F7F2FF]">{stat.value}</span>
                    <span className="text-sm font-bold text-[#74F0C1]">{stat.change}</span>
                  </div>
                  <div className="w-full h-1 bg-[#120D19] rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${stat.color}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Full analytics dashboard */}
            <AnalyticsDashboard />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div>
            <h1 className="text-4xl font-bold mb-8">Detailed Analytics</h1>
            <AnalyticsDashboard />
          </div>
        )}

        {activeTab === 'content' && (
          <div className="glass rounded-2xl p-8 border border-[#FF1493]/20 text-center">
            <h2 className="text-2xl font-bold mb-4">Content Management</h2>
            <p className="text-[#B9ADC9] mb-6">Upload, schedule, and manage your exclusive content across all platforms.</p>
            <button className="btn-luxury">Upload New Content</button>
          </div>
        )}

        {activeTab === 'subscribers' && (
          <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
            <h2 className="text-2xl font-bold mb-6">Subscriber Management</h2>
            <div className="space-y-4">
              {[
                { name: 'Premium Tier', count: '342', revenue: '$34,200/mo', status: 'Active' },
                { name: 'Standard Tier', count: '1,245', revenue: '$62,250/mo', status: 'Active' },
                { name: 'Basic Tier', count: '5,847', revenue: '$29,235/mo', status: 'Active' },
              ].map((tier, idx) => (
                <div key={idx} className="p-4 bg-[#120D19] rounded-lg border border-[#FF1493]/10 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-[#F7F2FF]">{tier.name}</p>
                    <p className="text-sm text-[#B9ADC9]">{tier.count} subscribers</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#FF1493]">{tier.revenue}</p>
                    <p className="text-xs text-[#74F0C1]">{tier.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="glass rounded-2xl p-8 border border-[#FF1493]/20 text-center">
            <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
            <p className="text-[#B9ADC9] mb-6">Manage your profile, privacy, and platform integrations.</p>
            <button className="btn-luxury">Open Settings</button>
          </div>
        )}
      </main>
    </div>
  );
}
