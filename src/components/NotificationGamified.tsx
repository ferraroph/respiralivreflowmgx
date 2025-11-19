import React, { useEffect, useState } from 'react';
import { Zap, Trophy, Star } from 'lucide-react';

interface NotificationGamifiedProps {
  isVisible: boolean;
  xpGained: number;
  coinsGained?: number;
  badge?: string;
  onComplete: () => void;
  title?: string;
  subtitle?: string;
}

const NotificationGamified: React.FC<NotificationGamifiedProps> = ({
  isVisible,
  xpGained,
  coinsGained = 0,
  badge,
  onComplete,
  title = "Nível Subiu!",
  subtitle = "Você está mais forte"
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Delay showing content slightly for entrance animation
      const timer = setTimeout(() => setShowContent(true), 100);
      
      // Auto dismiss after animation
      const dismissTimer = setTimeout(() => {
        setShowContent(false);
        setTimeout(onComplete, 500); // Wait for exit animation
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(dismissTimer);
      };
    } else {
      setShowContent(false);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Backdrop Blur */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Content Container */}
      <div className={`relative z-10 flex flex-col items-center justify-center transform transition-all duration-700 ${
        showContent ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-20'
      }`}>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />

        {/* Main Icon/Badge */}
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow p-1 animate-bounce-slow">
            <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20">
              {badge ? (
                <Trophy className="w-16 h-16 text-primary animate-pulse" />
              ) : (
                <Zap className="w-16 h-16 text-primary animate-pulse" />
              )}
            </div>
          </div>
          {/* Particles */}
          <div className="absolute inset-0 -z-10">
             <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
             <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-4xl font-black text-white mb-2 text-center tracking-tight" style={{
          textShadow: '0 0 20px rgba(34, 197, 94, 0.5)'
        }}>
          {title}
        </h2>
        <p className="text-xl text-gray-300 mb-8 font-medium">{subtitle}</p>

        {/* Rewards Grid */}
        <div className="flex gap-6">
          {/* XP Card */}
          <div className="flex flex-col items-center bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[120px] transform hover:scale-105 transition-transform">
            <span className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">XP</span>
            <div className="flex items-center gap-2 text-primary font-black text-3xl">
              <Zap className="w-6 h-6 fill-current" />
              +{xpGained}
            </div>
          </div>

          {/* Coins Card */}
          {coinsGained > 0 && (
            <div className="flex flex-col items-center bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 min-w-[120px] transform hover:scale-105 transition-transform">
              <span className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Coins</span>
              <div className="flex items-center gap-2 text-gold font-black text-3xl">
                <div className="w-6 h-6 rounded-full border-2 border-gold flex items-center justify-center text-xs">$</div>
                +{coinsGained}
              </div>
            </div>
          )}
        </div>

        {/* Badge Notification */}
        {badge && (
          <div className="mt-8 flex items-center gap-3 bg-gradient-to-r from-primary/20 to-transparent px-6 py-3 rounded-full border border-primary/30 animate-slide-in">
            <Star className="w-5 h-5 text-gold fill-gold" />
            <span className="text-white font-bold">Nova Conquista: {badge}</span>
          </div>
        )}

      </div>
    </div>
  );
};

export default NotificationGamified;
