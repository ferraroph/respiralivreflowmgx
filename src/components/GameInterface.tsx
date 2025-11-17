import { Crown, Coins, Flame, Trophy, Users, Star, Zap, Heart } from 'lucide-react';
import { UserProfile } from '@/types/funnel';

interface GameInterfaceProps {
  userProfile: UserProfile;
}

const leagueColors = {
  iniciante: 'from-gray-400 to-gray-600',
  bronze: 'from-amber-600 to-amber-700',
  prata: 'from-slate-300 to-slate-500',
  ouro: 'from-gold to-yellow-400',
  platina: 'from-blue-400 to-blue-600',
  diamante: 'from-purple-400 to-purple-600',
  liberdade: 'from-primary to-success'
};

export const GameInterface = ({ userProfile }: GameInterfaceProps) => {
  const xpForNextLevel = (userProfile.level * 100) - userProfile.xp;
  const currentLevelProgress = ((userProfile.xp % 100) / 100) * 100;

  return (
    <div className="relative z-50 p-0">
      {/* Premium iOS Header */}
      <div className="relative">
        {/* Status Bar */}
        <div className="flex justify-between items-center text-xs text-foreground/70 px-6 py-2">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-foreground rounded-full"></div>
              <div className="w-1 h-1 bg-foreground rounded-full"></div>
              <div className="w-1 h-1 bg-foreground rounded-full"></div>
              <div className="w-1 h-1 bg-foreground/30 rounded-full"></div>
            </div>
            <div className="ml-1 text-xs">📶 📶 🔋</div>
          </div>
        </div>

        {/* Main Header Card - Premium iOS Design */}
        <div className="mx-4 mb-4">
          <div className="premium-card p-6">
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gold/20 border border-gold/30">
              <Star className="w-3 h-3 text-gold" />
              <span className="text-xs font-bold text-gold">Premium</span>
            </div>

            {/* Logo and User Profile Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                {/* Respira Livre Logo */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-success flex items-center justify-center p-2">
                  <img 
                    src="/assets/Logo_Respiralivre.png" 
                    alt="Respira Livre" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gold rounded-full flex items-center justify-center border-2 border-background">
                  <span className="text-xs font-bold text-background">{userProfile.level}</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Olá,</p>
                <h2 className="text-xl font-bold text-foreground">
                  {userProfile.nickname || 'Guerreiro'}!
                </h2>
              </div>
            </div>

            {/* Large Coins Display - Like References */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span 
                  className="text-6xl font-black animate-glow-pulse"
                  style={{ 
                    background: 'var(--gradient-gold)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 40px hsl(48 100% 55% / 0.5)'
                  }}
                >
                  {userProfile.respirCoins}
                </span>
                <span className="text-lg text-muted-foreground font-medium">bonuses</span>
              </div>
            </div>

            {/* Premium Stats Cards - iOS Style */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {/* Health Progress */}
              <div className="premium-card p-4 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                <div className="text-center">
                  <Heart className="w-6 h-6 text-success mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground mb-1">Saúde</p>
                  <p className="text-lg font-bold text-success">
                    {Math.min(100, Math.floor((userProfile.xp / 10) + 20))}%
                  </p>
                </div>
              </div>

              {/* Savings */}
              <div className="premium-card p-4 bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
                <div className="text-center">
                  <Coins className="w-6 h-6 text-gold mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground mb-1">Economia</p>
                  <p className="text-lg font-bold text-gold">
                    R$ {((userProfile.monthlySpend || 360) * 0.8).toFixed(0)}
                  </p>
                </div>
              </div>

              {/* Days Free */}
              <div className="premium-card p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <div className="text-center">
                  <Crown className="w-6 h-6 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground mb-1">Livre</p>
                  <p className="text-lg font-bold text-primary">
                    {Math.floor(userProfile.xp / 50)} dias
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Stats Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary">{userProfile.streak}d</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-gold" />
                  <span className="text-sm font-bold text-gold">{userProfile.badges.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-success" />
                  <span className="text-sm font-bold text-success">{userProfile.joinedSquad ? 'ON' : 'OFF'}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold" />
                <span className="text-sm font-bold text-gold">{userProfile.xp} XP</span>
              </div>
            </div>

            {/* Progress Bar - Bottom */}
            <div className="mt-4">
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                <span>Progresso do Nível</span>
                <span>{xpForNextLevel} XP para próximo nível</span>
              </div>
              <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out animate-glow-pulse"
                  style={{ 
                    width: `${currentLevelProgress}%`,
                    background: 'var(--gradient-primary)',
                    boxShadow: 'var(--shadow-glow-primary)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};