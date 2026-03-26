import { useState } from 'react';
import { X } from 'lucide-react';

interface AuditionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditionModal({ isOpen, onClose }: AuditionModalProps) {
  const [formData, setFormData] = useState({
    stageName: '',
    email: '',
    platforms: [] as string[],
    portfolioLink: '',
    monthlyFollowers: '',
    currentRevenue: '',
    goals: '',
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const platforms = ['OnlyFans', 'Instagram', 'TikTok', 'Snapchat', 'Twitter', 'YouTube'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePlatformChange = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.stageName.trim()) newErrors.stageName = 'Stage name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.platforms.length === 0) newErrors.platforms = 'Select at least one platform';
    if (!formData.portfolioLink.trim()) newErrors.portfolioLink = 'Portfolio link is required';
    if (!formData.goals.trim()) newErrors.goals = 'Tell us your goals';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({
          stageName: '',
          email: '',
          platforms: [],
          portfolioLink: '',
          monthlyFollowers: '',
          currentRevenue: '',
          goals: '',
          agreeTerms: false,
        });
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/68 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="glass rounded-3xl border border-[#FF1493]/30 w-full max-w-2xl max-h-[90vh] overflow-auto">
          {/* Header */}
          <div className="sticky top-0 flex items-start justify-between gap-4 p-6 border-b border-[#FF1493]/20 bg-[#120D19]/92 backdrop-blur">
            <div>
              <h2 className="text-2xl font-bold text-[#FF1493]">Application</h2>
              <p className="text-sm text-[#B9ADC9]">Join our exclusive creator community</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg border border-[#FF1493]/30 bg-[#120D19] flex items-center justify-center hover:bg-[#FF1493]/10 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#74F0C1]/20 border border-[#74F0C1]/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-[#FF1493] mb-2">Application Submitted!</h3>
                <p className="text-[#B9ADC9]">We'll review your portfolio and contact you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Stage Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Stage Name *</label>
                    <input
                      type="text"
                      name="stageName"
                      value={formData.stageName}
                      onChange={handleChange}
                      placeholder="Your creative name"
                      className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition"
                    />
                    {errors.stageName && <p className="text-xs text-[#FF8C9F] mt-1">{errors.stageName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition"
                    />
                    {errors.email && <p className="text-xs text-[#FF8C9F] mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <label className="block text-sm font-bold text-[#EFDFFF] mb-3">Current Platforms *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {platforms.map(platform => (
                      <label
                        key={platform}
                        className="flex items-center gap-2 p-3 rounded-lg border border-[#FF1493]/20 bg-[#120D19] hover:bg-[#FF1493]/5 cursor-pointer transition"
                      >
                        <input
                          type="checkbox"
                          checked={formData.platforms.includes(platform)}
                          onChange={() => handlePlatformChange(platform)}
                          className="w-4 h-4 accent-[#FF1493]"
                        />
                        <span className="text-sm font-semibold text-[#F7F2FF]">{platform}</span>
                      </label>
                    ))}
                  </div>
                  {errors.platforms && <p className="text-xs text-[#FF8C9F] mt-1">{errors.platforms}</p>}
                </div>

                {/* Portfolio Link */}
                <div>
                  <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Portfolio / Links *</label>
                  <input
                    type="url"
                    name="portfolioLink"
                    value={formData.portfolioLink}
                    onChange={handleChange}
                    placeholder="https://linktr.ee/yourname or your website"
                    className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition"
                  />
                  {errors.portfolioLink && <p className="text-xs text-[#FF8C9F] mt-1">{errors.portfolioLink}</p>}
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Monthly Followers (Approx)</label>
                    <input
                      type="text"
                      name="monthlyFollowers"
                      value={formData.monthlyFollowers}
                      onChange={handleChange}
                      placeholder="e.g., 50K"
                      className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Current Monthly Revenue (Approx)</label>
                    <input
                      type="text"
                      name="currentRevenue"
                      value={formData.currentRevenue}
                      onChange={handleChange}
                      placeholder="e.g., $5K"
                      className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <label className="block text-sm font-bold text-[#EFDFFF] mb-2">What are your growth goals? *</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="Tell us about your vision, challenges, and what you're looking for..."
                    className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition resize-none h-24"
                  />
                  {errors.goals && <p className="text-xs text-[#FF8C9F] mt-1">{errors.goals}</p>}
                </div>

                {/* Notice */}
                <div className="p-4 rounded-xl bg-[#FFC107]/10 border-l-4 border-[#FFD37A]">
                  <p className="text-sm text-[#FFE7AA] leading-relaxed">
                    <strong>Privacy First:</strong> Your information is encrypted and never shared with third parties. We maintain strict confidentiality for all creators.
                  </p>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-3 p-3 rounded-lg bg-[#120D19] border border-[#FF1493]/20 cursor-pointer hover:bg-[#FF1493]/5 transition">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="w-4 h-4 mt-1 accent-[#FF1493]"
                  />
                  <span className="text-sm text-[#B9ADC9]">
                    I confirm I am 18+ and agree to the <a href="#" className="text-[#FF1493] hover:underline">Terms of Service</a> and <a href="#" className="text-[#FF1493] hover:underline">Privacy Policy</a>
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-xs text-[#FF8C9F]">{errors.agreeTerms}</p>}

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-luxury py-3 font-bold"
                >
                  Submit Application
                </button>

                <p className="text-center text-xs text-[#9E91B1]">
                  ⏰ Only 12 audition slots remaining this month
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
