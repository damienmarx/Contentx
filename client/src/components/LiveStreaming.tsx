import { useState } from 'react';
import { Play, Users, Heart, MessageCircle, Share2, Settings } from 'lucide-react';

interface LiveSession {
  id: string;
  title: string;
  viewers: number;
  duration: string;
  likes: number;
  tips: number;
  status: 'live' | 'scheduled' | 'ended';
}

export default function LiveStreaming() {
  const [isLive, setIsLive] = useState(false);
  const [liveTitle, setLiveTitle] = useState('');
  const [sessions] = useState<LiveSession[]>([
    {
      id: '1',
      title: 'Exclusive Q&A Session',
      viewers: 2847,
      duration: '1h 23m',
      likes: 5420,
      tips: 1240,
      status: 'live',
    },
    {
      id: '2',
      title: 'Behind-the-Scenes Content Creation',
      viewers: 1923,
      duration: '45m',
      likes: 3210,
      tips: 840,
      status: 'ended',
    },
    {
      id: '3',
      title: 'VIP Subscriber Exclusive',
      viewers: 0,
      duration: '0m',
      likes: 0,
      tips: 0,
      status: 'scheduled',
    },
  ]);

  const handleGoLive = () => {
    if (liveTitle.trim()) {
      setIsLive(true);
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-[#F7F2FF] mb-4 flex items-center gap-3">
          <Play className="w-8 h-8 text-[#FF1493]" />
          Live Streaming & Real-Time Engagement
        </h2>
        <p className="text-[#B9ADC9]">
          Go live with your subscribers, earn tips in real-time, and build deeper connections.
        </p>
      </div>

      {/* Go Live Section */}
      <div className="glass rounded-2xl p-8 border border-[#FF1493]/20">
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-6">Start a Live Stream</h3>

        {!isLive ? (
          <div className="space-y-6">
            {/* Title input */}
            <div>
              <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Stream Title</label>
              <input
                type="text"
                value={liveTitle}
                onChange={(e) => setLiveTitle(e.target.value)}
                placeholder="e.g., Exclusive Q&A with VIP Subscribers"
                className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition"
              />
            </div>

            {/* Stream settings */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Visibility</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:border-[#FF1493] focus:outline-none transition">
                  <option>All Subscribers</option>
                  <option>Premium Only</option>
                  <option>VIP Only</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Allow Tips</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] focus:border-[#FF1493] focus:outline-none transition">
                  <option>Yes ($1 - $100)</option>
                  <option>Premium Only</option>
                  <option>Disabled</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-[#EFDFFF] mb-2">Description</label>
              <textarea
                placeholder="Tell your subscribers what to expect..."
                className="w-full px-4 py-3 rounded-xl bg-[#120D19] border border-[#FF1493]/20 text-[#F7F2FF] placeholder-[#9E91B1] focus:border-[#FF1493] focus:outline-none transition resize-none h-24"
              ></textarea>
            </div>

            {/* Go Live Button */}
            <button
              onClick={handleGoLive}
              disabled={!liveTitle.trim()}
              className="w-full btn-luxury disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 py-4"
            >
              <Play size={20} /> Go Live Now
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#FF1493] to-[#C45CFF] rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                <span className="text-white font-bold uppercase tracking-widest">LIVE NOW</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{liveTitle}</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-xs text-white/80">Viewers</p>
                  <p className="text-2xl font-bold text-white">2,847</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-xs text-white/80">Tips</p>
                  <p className="text-2xl font-bold text-white">$1,240</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-xs text-white/80">Duration</p>
                  <p className="text-2xl font-bold text-white">23:45</p>
                </div>
              </div>
              <button
                onClick={() => setIsLive(false)}
                className="px-8 py-3 rounded-full bg-white text-[#FF1493] font-bold hover:bg-white/90 transition"
              >
                End Stream
              </button>
            </div>

            {/* Live chat preview */}
            <div className="bg-[#120D19] rounded-2xl p-6 border border-[#FF1493]/20 h-64 flex flex-col">
              <p className="text-sm font-bold text-[#B9ADC9] mb-4">Live Chat</p>
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {[
                  { user: 'Subscriber123', msg: 'Amazing content! 🔥' },
                  { user: 'VIPMember', msg: 'Sent a $50 tip!' },
                  { user: 'Creator_Fan', msg: 'Love this!' },
                ].map((chat, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="text-[#FF1493] font-bold">{chat.user}:</span>
                    <span className="text-[#B9ADC9] ml-2">{chat.msg}</span>
                  </div>
                ))}
              </div>
              <input
                type="text"
                placeholder="Type a message..."
                className="px-3 py-2 rounded-lg bg-[#09070E] border border-[#FF1493]/20 text-[#F7F2FF] text-sm focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Past Sessions */}
      <div>
        <h3 className="text-lg font-bold text-[#F7F2FF] mb-4">Stream History</h3>
        <div className="space-y-4">
          {sessions.map((session) => (
            <div key={session.id} className="glass rounded-2xl p-6 border border-[#FF1493]/20 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold text-[#F7F2FF]">{session.title}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        session.status === 'live'
                          ? 'bg-[#FF1493]/20 text-[#FFD9EF]'
                          : session.status === 'ended'
                            ? 'bg-[#B9ADC9]/20 text-[#EADFFF]'
                            : 'bg-[#FFD37A]/20 text-[#FFE7AA]'
                      }`}
                    >
                      {session.status === 'live' && '🔴 LIVE'}
                      {session.status === 'ended' && '✓ Ended'}
                      {session.status === 'scheduled' && '📅 Scheduled'}
                    </span>
                  </div>
                  <p className="text-sm text-[#B9ADC9]">{session.duration}</p>
                </div>
                <button className="p-2 rounded-lg bg-[#120D19] border border-[#FF1493]/20 text-[#B9ADC9] hover:border-[#FF1493] transition">
                  <Share2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-[#B9ADC9] mb-1">Viewers</p>
                  <p className="text-lg font-bold text-[#F7F2FF] flex items-center gap-1">
                    <Users size={16} /> {session.viewers.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#B9ADC9] mb-1">Likes</p>
                  <p className="text-lg font-bold text-[#FF1493] flex items-center gap-1">
                    <Heart size={16} /> {session.likes.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#B9ADC9] mb-1">Comments</p>
                  <p className="text-lg font-bold text-[#C45CFF] flex items-center gap-1">
                    <MessageCircle size={16} /> {Math.floor(session.likes * 0.3).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#B9ADC9] mb-1">Tips Earned</p>
                  <p className="text-lg font-bold text-[#7B7DFF]">${session.tips.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
