import { useState } from 'react';
import { Brain, TrendingUp, AlertCircle, CheckCircle, Zap } from 'lucide-react';

interface AnalysisResult {
  engagementScore: number;
  monetizationPotential: number;
  recommendedPrice: number;
  trends: string[];
  warnings: string[];
  opportunities: string[];
}

export default function AIContentAnalyzer() {
  const [contentUrl, setContentUrl] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    setAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        engagementScore: 87,
        monetizationPotential: 92,
        recommendedPrice: 29.99,
        trends: ['Trending in 47 countries', 'Peak engagement 9-11 PM', 'Female audience 73%'],
        warnings: ['Competitor content detected', 'Seasonal trend (peaks in Q4)'],
        opportunities: ['Expand to TikTok', 'Bundle with exclusive content', 'Create series'],
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-[#F7F2FF] mb-4 flex items-center gap-3">
          <Brain className="w-8 h-8 text-[#FF1493]" />
          AI Content Analyzer
        </h2>
        <p className="text-[#B9ADC9]">
          Get AI-powered insights on your content's monetization potential, engagement trends, and pricing recommendations.
        </p>
      </div>

      {/* Input section */}
      <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
        <label className="block text-sm font-bold text-[#EFDFFF] mb-3">Content URL or Description</label>
        <textarea
          value={contentUrl}
          onChange={(e) => setContentUrl(e.target.value)}
          placeholder="Paste your content URL or describe your content..."
          className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition resize-none h-32"
        />
        <button
          onClick={handleAnalyze}
          disabled={!contentUrl || analyzing}
          className="mt-4 btn-luxury disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {analyzing ? (
            <>
              <span className="animate-rotate">⚙️</span> Analyzing...
            </>
          ) : (
            <>
              <Zap size={18} /> Analyze Content
            </>
          )}
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6 animate-scale-in">
          {/* Scores */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
              <p className="text-sm text-[#B9ADC9] mb-2">Engagement Score</p>
              <div className="flex items-end gap-3">
                <p className="text-4xl font-bold text-[#FF1493]">{result.engagementScore}%</p>
                <div className="w-24 h-2 bg-[#120D19] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF1493] to-[#C45CFF]"
                    style={{ width: `${result.engagementScore}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
              <p className="text-sm text-[#B9ADC9] mb-2">Monetization Potential</p>
              <div className="flex items-end gap-3">
                <p className="text-4xl font-bold text-[#C45CFF]">{result.monetizationPotential}%</p>
                <div className="w-24 h-2 bg-[#120D19] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C45CFF] to-[#7B7DFF]"
                    style={{ width: `${result.monetizationPotential}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
              <p className="text-sm text-[#B9ADC9] mb-2">Recommended Price</p>
              <p className="text-4xl font-bold text-[#7B7DFF]">${result.recommendedPrice.toFixed(2)}</p>
              <p className="text-xs text-[#9E91B1] mt-2">per month</p>
            </div>
          </div>

          {/* Trends */}
          <div className="glass rounded-2xl p-6 border border-[#FF1493]/20">
            <h3 className="text-lg font-bold text-[#F7F2FF] mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#FFD37A]" /> Trending Insights
            </h3>
            <div className="space-y-2">
              {result.trends.map((trend, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#120D19] rounded-lg border border-[#FFD37A]/20">
                  <span className="text-[#FFD37A]">📈</span>
                  <span className="text-[#F7F2FF]">{trend}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warnings */}
          {result.warnings.length > 0 && (
            <div className="glass rounded-2xl p-6 border border-[#FFD37A]/30 bg-[#FFC107]/5">
              <h3 className="text-lg font-bold text-[#FFE7AA] mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Alerts
              </h3>
              <div className="space-y-2">
                {result.warnings.map((warning, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-[#FFC107]/10 rounded-lg border border-[#FFD37A]/20">
                    <span className="text-[#FFE7AA]">⚠️</span>
                    <span className="text-[#FFE7AA]">{warning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Opportunities */}
          <div className="glass rounded-2xl p-6 border border-[#74F0C1]/30 bg-[#74F0C1]/5">
            <h3 className="text-lg font-bold text-[#BFF7E2] mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Growth Opportunities
            </h3>
            <div className="space-y-2">
              {result.opportunities.map((opp, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#74F0C1]/10 rounded-lg border border-[#74F0C1]/20">
                  <span className="text-[#BFF7E2]">✓</span>
                  <span className="text-[#BFF7E2]">{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
