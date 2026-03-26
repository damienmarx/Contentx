import { useState } from 'react';
import { Copy, Download, Eye, Edit2 } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  platform: string;
  description: string;
  preview: string;
  specs: {
    dimensions: string;
    format: string;
    fileSize: string;
  };
}

const TEMPLATES: Template[] = [
  {
    id: 'onlyfans-hero',
    name: 'OnlyFans Hero Banner',
    platform: 'OnlyFans',
    description: 'Premium hero banner for profile header with custom branding',
    preview: 'Hot pink gradient with gold accents, 1920x1080px',
    specs: {
      dimensions: '1920 x 1080px',
      format: 'PNG / JPG',
      fileSize: '2-5MB',
    },
  },
  {
    id: 'instagram-carousel',
    name: 'Instagram Carousel Posts',
    platform: 'Instagram',
    description: 'Multi-slide carousel template for storytelling and engagement',
    preview: 'Square format with gradient overlays, 1080x1080px each',
    specs: {
      dimensions: '1080 x 1080px',
      format: 'PNG / JPG',
      fileSize: '1-3MB',
    },
  },
  {
    id: 'tiktok-vertical',
    name: 'TikTok Vertical Video',
    platform: 'TikTok',
    description: 'Full-screen vertical video template with text overlays',
    preview: 'Vertical format with animated text, 1080x1920px',
    specs: {
      dimensions: '1080 x 1920px',
      format: 'MP4 / MOV',
      fileSize: '10-50MB',
    },
  },
  {
    id: 'snapchat-story',
    name: 'Snapchat Story Frame',
    platform: 'Snapchat',
    description: 'Full-screen story template with branded elements',
    preview: 'Vertical format with stickers, 1080x1920px',
    specs: {
      dimensions: '1080 x 1920px',
      format: 'PNG / JPG',
      fileSize: '2-4MB',
    },
  },
  {
    id: 'twitter-header',
    name: 'Twitter/X Header',
    platform: 'Twitter',
    description: 'Premium header banner for profile customization',
    preview: 'Wide format with gradient, 1500x500px',
    specs: {
      dimensions: '1500 x 500px',
      format: 'PNG / JPG',
      fileSize: '1-2MB',
    },
  },
  {
    id: 'youtube-thumbnail',
    name: 'YouTube Thumbnail',
    platform: 'YouTube',
    description: 'Eye-catching thumbnail for video discovery',
    preview: 'Square format with bold text, 1280x720px',
    specs: {
      dimensions: '1280 x 720px',
      format: 'PNG / JPG',
      fileSize: '1-2MB',
    },
  },
];

export default function TemplateBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [customizations, setCustomizations] = useState({
    brandName: 'Your Brand',
    primaryColor: '#FF1493',
    secondaryColor: '#C45CFF',
    tagline: 'Premium Content Creator',
  });

  const handleCustomizationChange = (key: string, value: string) => {
    setCustomizations(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleDownload = (template: Template) => {
    // In a real app, this would generate and download the template
    alert(`Downloading ${template.name} with your customizations...`);
  };

  const handleCopyTemplate = (template: Template) => {
    alert(`Template ${template.name} copied to clipboard!`);
  };

  return (
    <div className="w-full space-y-8">
      {/* Customization panel */}
      <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-6">Customize Your Templates</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Brand Name</label>
            <input
              type="text"
              value={customizations.brandName}
              onChange={(e) => handleCustomizationChange('brandName', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:border-[#FF1493] focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Tagline</label>
            <input
              type="text"
              value={customizations.tagline}
              onChange={(e) => handleCustomizationChange('tagline', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:border-[#FF1493] focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Primary Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={customizations.primaryColor}
                onChange={(e) => handleCustomizationChange('primaryColor', e.target.value)}
                className="w-12 h-12 rounded-lg cursor-pointer"
              />
              <input
                type="text"
                value={customizations.primaryColor}
                onChange={(e) => handleCustomizationChange('primaryColor', e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:border-[#FF1493] focus:outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Secondary Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={customizations.secondaryColor}
                onChange={(e) => handleCustomizationChange('secondaryColor', e.target.value)}
                className="w-12 h-12 rounded-lg cursor-pointer"
              />
              <input
                type="text"
                value={customizations.secondaryColor}
                onChange={(e) => handleCustomizationChange('secondaryColor', e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:border-[#FF1493] focus:outline-none transition"
              />
            </div>
          </div>
        </div>

        <p className="text-xs text-[#9E91B1] mt-4">
          💡 Tip: All templates will automatically apply your brand colors and text
        </p>
      </div>

      {/* Template grid */}
      <div>
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-6">Available Templates</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map(template => (
            <div
              key={template.id}
              className="glass rounded-2xl border border-[#FF1493]/20 overflow-hidden hover:border-[#FF1493]/50 transition group cursor-pointer"
              onClick={() => setSelectedTemplate(template)}
            >
              {/* Preview */}
              <div className="h-40 bg-gradient-to-br from-[#FF1493]/20 to-[#7B7DFF]/20 flex items-center justify-center relative overflow-hidden group-hover:from-[#FF1493]/30 group-hover:to-[#7B7DFF]/30 transition">
                <div className="text-center">
                  <p className="text-sm text-[#B9ADC9] font-semibold mb-2">{template.specs.dimensions}</p>
                  <p className="text-xs text-[#9E91B1]">{template.preview}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-bold text-[#FF1493]">{template.platform}</p>
                    <h4 className="font-bold text-[#F7F2FF]">{template.name}</h4>
                  </div>
                </div>
                <p className="text-xs text-[#B9ADC9] mb-4">{template.description}</p>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTemplate(template);
                    }}
                    className="flex-1 px-3 py-2 rounded-lg bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] text-xs font-bold hover:border-[#FF1493] transition flex items-center justify-center gap-1"
                  >
                    <Eye size={14} /> Preview
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(template);
                    }}
                    className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-[#FF1493] to-[#C45CFF] text-black text-xs font-bold hover:shadow-lg transition flex items-center justify-center gap-1"
                  >
                    <Download size={14} /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected template detail */}
      {selectedTemplate && (
        <div className="glass rounded-2xl p-8 border border-[#FF1493]/30">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm text-[#B9ADC9] mb-2">{selectedTemplate.platform}</p>
              <h2 className="text-3xl font-bold text-[#F7F2FF]">{selectedTemplate.name}</h2>
              <p className="text-[#B9ADC9] mt-2">{selectedTemplate.description}</p>
            </div>
            <button
              onClick={() => setSelectedTemplate(null)}
              className="text-2xl text-[#B9ADC9] hover:text-[#F7F2FF]"
            >
              ✕
            </button>
          </div>

          {/* Preview area */}
          <div className="bg-[#120D19] rounded-xl border border-[#FF1493]/20 p-8 mb-8 min-h-64 flex items-center justify-center">
            <div className="text-center">
              <div
                className="w-32 h-32 rounded-lg mx-auto mb-4"
                style={{
                  background: `linear-gradient(135deg, ${customizations.primaryColor}, ${customizations.secondaryColor})`,
                }}
              ></div>
              <p className="text-2xl font-bold text-[#F7F2FF] mb-2">{customizations.brandName}</p>
              <p className="text-[#B9ADC9]">{customizations.tagline}</p>
              <p className="text-xs text-[#9E91B1] mt-4">{selectedTemplate.specs.dimensions}</p>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#120D19] rounded-lg p-4 border border-[#FF1493]/10">
              <p className="text-xs text-[#B9ADC9] mb-1">Dimensions</p>
              <p className="font-bold text-[#F7F2FF]">{selectedTemplate.specs.dimensions}</p>
            </div>
            <div className="bg-[#120D19] rounded-lg p-4 border border-[#FF1493]/10">
              <p className="text-xs text-[#B9ADC9] mb-1">Format</p>
              <p className="font-bold text-[#F7F2FF]">{selectedTemplate.specs.format}</p>
            </div>
            <div className="bg-[#120D19] rounded-lg p-4 border border-[#FF1493]/10">
              <p className="text-xs text-[#B9ADC9] mb-1">File Size</p>
              <p className="font-bold text-[#F7F2FF]">{selectedTemplate.specs.fileSize}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => handleDownload(selectedTemplate)}
              className="flex-1 btn-luxury flex items-center justify-center gap-2"
            >
              <Download size={18} /> Download Template
            </button>
            <button
              onClick={() => handleCopyTemplate(selectedTemplate)}
              className="flex-1 btn-luxury-outline flex items-center justify-center gap-2"
            >
              <Copy size={18} /> Copy to Clipboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
