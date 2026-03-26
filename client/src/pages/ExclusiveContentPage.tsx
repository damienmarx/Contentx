import { useState } from 'react';
import { Shield, AlertCircle, Lock } from 'lucide-react';
import ExclusiveContent from '@/components/ExclusiveContent';

export default function ExclusiveContentPage() {
  const [activeTab, setActiveTab] = useState('content');

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
              <div className="text-lg font-bold uppercase tracking-widest">18+ Exclusive Content</div>
              <div className="text-xs text-[#B9ADC9] uppercase">Premium & Protected</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-12 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Secure 18+ Content</span> Management
            </h1>
            <p className="text-xl text-[#B9ADC9] mb-6">
              Upload, manage, and monetize exclusive adult content with military-grade protection, watermarking, and DRM enforcement. Luxe Creator ensures your content stays yours.
            </p>

            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                <Shield size={18} className="text-[#FF1493]" />
                <span className="text-sm font-semibold">Military-Grade DRM</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                <Lock size={18} className="text-[#C45CFF]" />
                <span className="text-sm font-semibold">Watermarked Files</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                <AlertCircle size={18} className="text-[#7B7DFF]" />
                <span className="text-sm font-semibold">Age Verified Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation tabs */}
      <div className="border-b border-[#FF1493]/20 glass sticky top-16 z-30">
        <div className="container mx-auto px-4 flex gap-8">
          {[
            { id: 'content', label: 'My Content', icon: '📁' },
            { id: 'security', label: 'Security Settings', icon: '🔒' },
            { id: 'analytics', label: 'Analytics', icon: '📊' },
            { id: 'compliance', label: 'Compliance', icon: '✓' },
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
        {activeTab === 'content' && (
          <ExclusiveContent />
        )}

        {activeTab === 'security' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Security & Protection Settings</h2>
              <p className="text-[#B9ADC9] mb-8">Configure advanced protection for your exclusive content.</p>
            </div>

            <div className="space-y-6">
              {/* DRM Protection */}
              <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#F7F2FF] mb-2">Digital Rights Management (DRM)</h3>
                    <p className="text-[#B9ADC9]">Prevent unauthorized copying and distribution of your content</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#120D19] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF1493]"></div>
                  </label>
                </div>
                <div className="bg-[#120D19] rounded-lg p-4 text-sm text-[#B9ADC9]">
                  <p className="mb-2">✓ Encryption: AES-256</p>
                  <p className="mb-2">✓ Playback Restrictions: Verified subscribers only</p>
                  <p>✓ Screen Recording: Blocked</p>
                </div>
              </div>

              {/* Watermarking */}
              <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#F7F2FF] mb-2">Content Watermarking</h3>
                    <p className="text-[#B9ADC9]">Embed subscriber information into your content</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#120D19] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF1493]"></div>
                  </label>
                </div>
                <div className="bg-[#120D19] rounded-lg p-4 text-sm text-[#B9ADC9]">
                  <p className="mb-2">✓ Visible Watermark: Your brand logo</p>
                  <p className="mb-2">✓ Invisible Watermark: Subscriber ID embedded</p>
                  <p>✓ Timestamp: Upload date and time</p>
                </div>
              </div>

              {/* Download Restrictions */}
              <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#F7F2FF] mb-2">Download Restrictions</h3>
                    <p className="text-[#B9ADC9]">Control how subscribers access your content</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#120D19] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF1493]"></div>
                  </label>
                </div>
                <div className="bg-[#120D19] rounded-lg p-4 text-sm text-[#B9ADC9]">
                  <p className="mb-2">✓ Streaming Only: No downloads allowed</p>
                  <p className="mb-2">✓ Limited Downloads: 3 downloads per subscriber</p>
                  <p>✓ Expiring Links: Access expires after 30 days</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="glass rounded-2xl p-8 border border-[#FF1493]/20 text-center">
            <h2 className="text-2xl font-bold mb-4">Content Analytics</h2>
            <p className="text-[#B9ADC9] mb-6">Track views, engagement, and revenue from your exclusive content.</p>
            <button className="btn-luxury">View Detailed Analytics</button>
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Compliance & Legal</h2>
              <p className="text-[#B9ADC9] mb-8">Ensure your content meets all platform and legal requirements.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Age Verification',
                  status: 'Verified',
                  desc: 'All subscribers verified as 18+',
                  color: 'text-[#74F0C1]',
                },
                {
                  title: 'Payment Processing',
                  status: 'Compliant',
                  desc: 'PCI-DSS Level 1 certified',
                  color: 'text-[#74F0C1]',
                },
                {
                  title: 'Content Moderation',
                  status: 'Approved',
                  desc: 'All content meets platform guidelines',
                  color: 'text-[#74F0C1]',
                },
                {
                  title: 'Tax Reporting',
                  status: 'Ready',
                  desc: '1099 forms available for download',
                  color: 'text-[#74F0C1]',
                },
              ].map((item, idx) => (
                <div key={idx} className="glass rounded-2xl p-6 border border-[#FF1493]/20 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-[#F7F2FF] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#B9ADC9]">{item.desc}</p>
                  </div>
                  <span className={`font-bold ${item.color}`}>✓ {item.status}</span>
                </div>
              ))}
            </div>

            {/* Legal documents */}
            <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
              <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Legal Documents</h3>
              <div className="space-y-2">
                {[
                  'Terms of Service',
                  'Privacy Policy',
                  'Content Guidelines',
                  'Payment Terms',
                  'Age Verification Policy',
                ].map((doc, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block p-3 bg-[#120D19] rounded-lg border border-[#FF1493]/10 text-[#FF1493] hover:border-[#FF1493] transition"
                  >
                    📄 {doc}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
