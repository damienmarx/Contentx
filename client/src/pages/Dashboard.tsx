import { useState } from 'react';
import { LogOut, Settings, Bell, BarChart3 } from 'lucide-react';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import AdvancedAnalytics from '@/components/AdvancedAnalytics';
import AIContentAnalyzer from '@/components/AIContentAnalyzer';
import AffiliateSystem from '@/components/AffiliateSystem';
import LiveStreaming from '@/components/LiveStreaming';

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
        <div className="container mx-auto px-4 flex gap-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'advanced', label: 'Advanced Analytics', icon: '📈' },
            { id: 'ai', label: 'AI Analyzer', icon: '🤖' },
            { id: 'affiliate', label: 'Affiliate', icon: '🤝' },
            { id: 'live', label: 'Live Streaming', icon: '🔴' },
            { id: 'settings', label: 'Settings', icon: '⚙️' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 font-semibold border-b-2 transition whitespace-nowrap ${
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
          <AnalyticsDashboard />
        )}

        {activeTab === 'advanced' && (
          <AdvancedAnalytics />
        )}

        {activeTab === 'ai' && (
          <AIContentAnalyzer />
        )}

        {activeTab === 'affiliate' && (
          <AffiliateSystem />
        )}

        {activeTab === 'live' && (
          <LiveStreaming />
        )}

        {activeTab === 'settings' && (
          <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
            <h2 className="text-2xl font-bold mb-4">Dashboard Settings</h2>
            <p className="text-[#B9ADC9] mb-6">Customize your dashboard experience.</p>
            <button className="btn-luxury">Configure Settings</button>
          </div>
        )}
      </main>
    </div>
  );
}
