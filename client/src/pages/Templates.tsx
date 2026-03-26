import { useState } from 'react';
import { Zap, Download, Palette } from 'lucide-react';
import TemplateBuilder from '@/components/TemplateBuilder';

export default function Templates() {
  const [activeTab, setActiveTab] = useState('builder');

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
              <div className="text-lg font-bold uppercase tracking-widest">Template Builder</div>
              <div className="text-xs text-[#B9ADC9] uppercase">Create & Customize</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-12 border-b border-[#FF1493]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Professional Templates</span> for Every Platform
            </h1>
            <p className="text-xl text-[#B9ADC9] mb-6">
              Instantly create branded content templates for OnlyFans, Instagram, TikTok, Snapchat, Twitter, and YouTube. Customize colors, add your branding, and download ready-to-use assets.
            </p>

            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                <Zap size={18} className="text-[#FF1493]" />
                <span className="text-sm font-semibold">Instant Generation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                <Palette size={18} className="text-[#C45CFF]" />
                <span className="text-sm font-semibold">Fully Customizable</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#120D19] border border-[#FF1493]/20">
                <Download size={18} className="text-[#7B7DFF]" />
                <span className="text-sm font-semibold">Ready to Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation tabs */}
      <div className="border-b border-[#FF1493]/20 glass sticky top-16 z-30">
        <div className="container mx-auto px-4 flex gap-8">
          {[
            { id: 'builder', label: 'Template Builder', icon: '🎨' },
            { id: 'library', label: 'Template Library', icon: '📚' },
            { id: 'guides', label: 'Usage Guides', icon: '📖' },
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
        {activeTab === 'builder' && (
          <TemplateBuilder />
        )}

        {activeTab === 'library' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Pre-Made Template Collections</h2>
              <p className="text-[#B9ADC9] mb-8">Browse curated template collections designed by professional creators.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Luxury Aesthetic',
                  desc: 'Premium gold and black templates for high-end positioning',
                  templates: 24,
                  color: 'from-[#D4AF37] to-[#FF1493]',
                },
                {
                  name: 'Neon Vibes',
                  desc: 'Bold neon gradients for trendy, modern content',
                  templates: 18,
                  color: 'from-[#FF1493] to-[#7B7DFF]',
                },
                {
                  name: 'Minimalist Pro',
                  desc: 'Clean, simple designs for professional positioning',
                  templates: 20,
                  color: 'from-[#7B7DFF] to-[#C45CFF]',
                },
                {
                  name: 'Playful & Fun',
                  desc: 'Colorful, energetic templates for engagement',
                  templates: 22,
                  color: 'from-[#C45CFF] to-[#FF1493]',
                },
              ].map((collection, idx) => (
                <div key={idx} className="glass rounded-2xl p-6 border border-[#FF1493]/20 hover:border-[#FF1493]/50 transition group cursor-pointer">
                  <div
                    className={`w-full h-32 rounded-lg bg-gradient-to-br ${collection.color} mb-4 group-hover:shadow-lg transition`}
                  ></div>
                  <h3 className="text-lg font-bold text-[#F7F2FF] mb-2">{collection.name}</h3>
                  <p className="text-sm text-[#B9ADC9] mb-4">{collection.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#9E91B1]">{collection.templates} templates</span>
                    <button className="px-4 py-2 rounded-lg bg-[#FF1493]/20 text-[#FF1493] text-sm font-bold hover:bg-[#FF1493]/30 transition">
                      Browse
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'guides' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">How to Use Templates</h2>
              <p className="text-[#B9ADC9] mb-8">Step-by-step guides for creating and customizing your templates.</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Choose Your Platform',
                  desc: 'Select the platform where you want to use the template (OnlyFans, Instagram, etc.)',
                },
                {
                  step: '2',
                  title: 'Customize Your Branding',
                  desc: 'Add your brand name, colors, and tagline. All templates will automatically apply your customizations.',
                },
                {
                  step: '3',
                  title: 'Download Your Template',
                  desc: 'Download the template in your preferred format (PNG, JPG, MP4). Ready to use immediately.',
                },
                {
                  step: '4',
                  title: 'Upload & Deploy',
                  desc: 'Upload your template to your platform. Use our scheduler to post across multiple platforms simultaneously.',
                },
              ].map((guide, idx) => (
                <div key={idx} className="glass rounded-2xl p-6 border border-[#FF1493]/20 flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF1493] to-[#C45CFF] flex items-center justify-center font-bold text-white flex-shrink-0">
                    {guide.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#F7F2FF] mb-2">{guide.title}</h3>
                    <p className="text-[#B9ADC9]">{guide.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pro tips */}
            <div className="glass rounded-2xl p-6 border border-[#FFD37A]/30 bg-[#FFC107]/5">
              <h3 className="text-lg font-bold text-[#FFE7AA] mb-4">💡 Pro Tips</h3>
              <ul className="space-y-2 text-[#FFE7AA]">
                <li>• Use consistent branding across all platforms for better recognition</li>
                <li>• Update templates monthly to keep your content fresh</li>
                <li>• A/B test different color schemes to see what resonates with your audience</li>
                <li>• Use our scheduler to maintain consistent posting across platforms</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
