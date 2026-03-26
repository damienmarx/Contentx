import { useState } from 'react';
import { Lock, Eye, EyeOff, Trash2, Share2, Upload, AlertCircle } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  category: string;
  uploadDate: string;
  views: number;
  subscribers: number;
  isProtected: boolean;
  fileSize: string;
  duration?: string;
  thumbnail?: string;
}

const CONTENT_CATEGORIES = [
  'Premium Photos',
  'Exclusive Videos',
  'Behind-the-Scenes',
  'Custom Requests',
  'Taboo Content',
  'Roleplay',
  'Fetish',
  'ASMR',
];

const MOCK_CONTENT: ContentItem[] = [
  {
    id: '1',
    title: 'Exclusive Photoshoot Collection',
    category: 'Premium Photos',
    uploadDate: '2026-03-24',
    views: 1247,
    subscribers: 847,
    isProtected: true,
    fileSize: '245 MB',
  },
  {
    id: '2',
    title: 'VIP Behind-the-Scenes',
    category: 'Behind-the-Scenes',
    uploadDate: '2026-03-23',
    views: 892,
    subscribers: 723,
    isProtected: true,
    fileSize: '1.2 GB',
    duration: '45 min',
  },
  {
    id: '3',
    title: 'Custom Request - Taboo Series',
    category: 'Taboo Content',
    uploadDate: '2026-03-22',
    views: 2341,
    subscribers: 1204,
    isProtected: true,
    fileSize: '2.4 GB',
    duration: '90 min',
  },
  {
    id: '4',
    title: 'Roleplay Scenario Pack',
    category: 'Roleplay',
    uploadDate: '2026-03-21',
    views: 1654,
    subscribers: 934,
    isProtected: true,
    fileSize: '1.8 GB',
    duration: '60 min',
  },
];

export default function ExclusiveContent() {
  const [contentList, setContentList] = useState<ContentItem[]>(MOCK_CONTENT);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const filteredContent = selectedCategory
    ? contentList.filter(item => item.category === selectedCategory)
    : contentList;

  const handleDeleteContent = (id: string) => {
    setContentList(prev => prev.filter(item => item.id !== id));
  };

  const totalViews = contentList.reduce((sum, item) => sum + item.views, 0);
  const totalSubscribers = contentList.reduce((sum, item) => sum + item.subscribers, 0);

  return (
    <div className="w-full space-y-8">
      {/* Compliance notice */}
      <div className="glass rounded-2xl p-6 border-l-4 border-[#FFD37A] bg-[#FFC107]/5">
        <div className="flex gap-4">
          <AlertCircle className="w-6 h-6 text-[#FFE7AA] flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-[#FFE7AA] mb-2">18+ Content Compliance</h3>
            <p className="text-sm text-[#FFE7AA] leading-relaxed">
              All content on this platform is for adults 18+ only. Luxe Creator enforces strict age verification, payment processing compliance, and content protection standards. All creators must maintain accurate records and comply with platform regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Total Content Items</p>
          <p className="text-4xl font-bold text-[#FF1493]">{contentList.length}</p>
          <p className="text-xs text-[#9E91B1] mt-2">Protected with DRM</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Total Views</p>
          <p className="text-4xl font-bold text-[#C45CFF]">{totalViews.toLocaleString()}</p>
          <p className="text-xs text-[#9E91B1] mt-2">Verified subscribers only</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
          <p className="text-sm text-[#B9ADC9] mb-2">Avg Subscribers/Item</p>
          <p className="text-4xl font-bold text-[#7B7DFF]">{Math.round(totalSubscribers / contentList.length)}</p>
          <p className="text-xs text-[#9E91B1] mt-2">Per exclusive piece</p>
        </div>
      </div>

      {/* Category filter */}
      <div>
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Content Categories</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-[#FF1493] to-[#C45CFF] text-black'
                : 'bg-[#120D19] border border-[#FF1493]/20 text-[#B9ADC9] hover:border-[#FF1493]'
            }`}
          >
            All Content
          </button>
          {CONTENT_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#FF1493] to-[#C45CFF] text-black'
                  : 'bg-[#120D19] border border-[#FF1493]/20 text-[#B9ADC9] hover:border-[#FF1493]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Upload button */}
      <button
        onClick={() => setShowUploadModal(true)}
        className="w-full btn-luxury flex items-center justify-center gap-2 py-4"
      >
        <Upload size={20} /> Upload New Exclusive Content
      </button>

      {/* Content list */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#F7F2FF]">
          {selectedCategory ? selectedCategory : 'All Content'} ({filteredContent.length})
        </h3>

        {filteredContent.length === 0 ? (
          <div className="glass rounded-2xl p-12 border border-[#FF1493]/20 text-center">
            <Lock className="w-12 h-12 text-[#B9ADC9] mx-auto mb-4 opacity-50" />
            <p className="text-[#B9ADC9]">No content in this category yet.</p>
          </div>
        ) : (
          filteredContent.map(item => (
            <div
              key={item.id}
              className="glass rounded-2xl p-6 border border-[#FF1493]/20 hover:border-[#FF1493]/50 transition"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Left side */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="w-5 h-5 text-[#FF1493]" />
                    <h4 className="text-lg font-bold text-[#F7F2FF]">{item.title}</h4>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF1493]/20 text-[#FFD9EF]">
                      {item.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-[#9E91B1] mb-1">Uploaded</p>
                      <p className="text-sm font-semibold text-[#F7F2FF]">{item.uploadDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9E91B1] mb-1">Views</p>
                      <p className="text-sm font-semibold text-[#F7F2FF]">{item.views.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9E91B1] mb-1">Subscribers</p>
                      <p className="text-sm font-semibold text-[#F7F2FF]">{item.subscribers.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#9E91B1] mb-1">File Size</p>
                      <p className="text-sm font-semibold text-[#F7F2FF]">{item.fileSize}</p>
                    </div>
                  </div>

                  {/* Protection status */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-[#74F0C1]/20 text-[#BFF7E2] font-bold">
                      ✓ DRM Protected
                    </span>
                    <span className="px-2 py-1 rounded-full bg-[#7B7DFF]/20 text-[#DCDCFF] font-bold">
                      ✓ Watermarked
                    </span>
                    <span className="px-2 py-1 rounded-full bg-[#FF1493]/20 text-[#FFD9EF] font-bold">
                      ✓ Age Verified
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-shrink-0">
                  <button className="w-10 h-10 rounded-lg border border-[#FF1493]/30 bg-[#120D19] flex items-center justify-center hover:bg-[#FF1493]/10 transition">
                    <Eye size={18} className="text-[#B9ADC9]" />
                  </button>
                  <button className="w-10 h-10 rounded-lg border border-[#FF1493]/30 bg-[#120D19] flex items-center justify-center hover:bg-[#FF1493]/10 transition">
                    <Share2 size={18} className="text-[#B9ADC9]" />
                  </button>
                  <button
                    onClick={() => handleDeleteContent(item.id)}
                    className="w-10 h-10 rounded-lg border border-[#FF1493]/30 bg-[#120D19] flex items-center justify-center hover:bg-[#FF8C9F]/10 transition"
                  >
                    <Trash2 size={18} className="text-[#FF8C9F]" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <>
          <div
            className="fixed inset-0 bg-black/68 backdrop-blur-sm z-40"
            onClick={() => setShowUploadModal(false)}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="glass rounded-3xl border border-[#FF1493]/30 w-full max-w-2xl">
              <div className="p-6 border-b border-[#FF1493]/20 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#FF1493]">Upload Exclusive Content</h2>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-2xl text-[#B9ADC9] hover:text-[#F7F2FF]"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Category selection */}
                <div>
                  <label className="block text-sm font-bold text-[#EFDFFF] mb-3">Content Category *</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:border-[#FF1493] focus:outline-none transition">
                    <option>Select a category...</option>
                    {CONTENT_CATEGORIES.map(cat => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Content Title *</label>
                  <input
                    type="text"
                    placeholder="e.g., Exclusive Photoshoot Collection"
                    className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition"
                  />
                </div>

                {/* File upload */}
                <div>
                  <label className="block text-sm font-bold text-[#EFDFFF] mb-3">Upload Files *</label>
                  <div className="border-2 border-dashed border-[#FF1493]/30 rounded-xl p-8 text-center hover:border-[#FF1493] transition cursor-pointer">
                    <Upload className="w-12 h-12 text-[#B9ADC9] mx-auto mb-3" />
                    <p className="text-[#F7F2FF] font-semibold mb-1">Drag files here or click to select</p>
                    <p className="text-xs text-[#9E91B1]">Supports: JPG, PNG, MP4, MOV (Max 5GB)</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Description</label>
                  <textarea
                    placeholder="Describe your exclusive content..."
                    className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition resize-none h-24"
                  ></textarea>
                </div>

                {/* Tier selection */}
                <div>
                  <label className="block text-sm font-bold text-[#EFDFFF] mb-3">Available to Tiers *</label>
                  <div className="space-y-2">
                    {['Premium', 'Standard', 'Basic'].map(tier => (
                      <label key={tier} className="flex items-center gap-3 p-3 rounded-lg bg-[#120D19] border border-[#FF1493]/20 hover:bg-[#FF1493]/5 cursor-pointer transition">
                        <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#FF1493]" />
                        <span className="text-sm font-semibold text-[#F7F2FF]">{tier} Subscribers</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="flex-1 btn-luxury-outline"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 btn-luxury">Upload Content</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
