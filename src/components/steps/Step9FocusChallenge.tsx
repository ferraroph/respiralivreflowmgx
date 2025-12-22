import { useState, useEffect, useCallback } from 'react';
import { UserProfile } from '@/types/funnel';
import { Target, Trophy, Zap, X, Sparkles, ChevronRight, ChevronLeft, Play, Flame, Cigarette, Clock } from 'lucide-react';

interface Step9FocusChallengeProps {
  userProfile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onNext: () => void;
  onBack?: () => void;
  devInitialState?: { phase?: 'instructions' | 'challenge' | 'completed' };
}

// Constantes do sistema (PRD Seção 3.2 - REQ-FOC-004)
const GAME_DURATION = 45; // segundos
const POINTS_PER_HIT = 15;
const ENEMY_SPAWN_INTERVAL = 1500; // ms entre spawns
const ENEMY_LIFETIME = 2000; // ms antes de desaparecer
const MAX_ACTIVE_ENEMIES = 3;

// Tiers de recompensa (PRD Seção 3.2 - REQ-FOC-004)
const TIER_1_MIN = 10;
const TIER_2_MIN = 20;
const TIER_3_MIN = 30;

interface Enemy {
  id: number;
  x: number;
  y: number;
  type: 'cigarette' | 'flame' | 'trigger';
  spawnTime: number;
}

const Step9FocusChallenge = ({ userProfile, onUpdateProfile, onNext, onBack, devInitialState }: Step9FocusChallengeProps) => {
  const [phase, setPhase] = useState<'instructions' | 'challenge' | 'completed'>(devInitialState?.phase || 'instructions');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [hits, setHits] = useState(0);
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [floatingPoints, setFloatingPoints] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  // Debug log
  useEffect(() => {
    console.log('[FocusChallenge] Phase:', phase, 'TimeLeft:', timeLeft, 'Hits:', hits, 'Enemies:', enemies.length);
  }, [phase, timeLeft, hits, enemies.length]);

  // Mostrar botão Concluir quando atingir Tier 3 (30+ acertos)
  useEffect(() => {
    if (hits >= TIER_3_MIN && !showComplete && isActive) {
      setShowComplete(true);
      console.log('[FocusChallenge] 🔥 TIER 3 ATINGIDO! Botão Concluir disponível.');
    }
  }, [hits, showComplete, isActive]);

  // Timer do jogo
  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsActive(false);
          setPhase('completed');
          console.log('[FocusChallenge] Tempo esgotado! Total hits:', hits);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, hits]);

  // Spawn de inimigos (REQ-FOC-001, REQ-FOC-003)
  useEffect(() => {
    if (!isActive) return;

    const spawnEnemy = () => {
      if (enemies.length >= MAX_ACTIVE_ENEMIES) return;

      const enemyTypes: ('cigarette' | 'flame' | 'trigger')[] = ['cigarette', 'flame', 'trigger'];
      const newEnemy: Enemy = {
        id: Date.now() + Math.random(),
        x: Math.random() * 70 + 15, // 15-85% da largura
        y: Math.random() * 50 + 20, // 20-70% da altura
        type: enemyTypes[Math.floor(Math.random() * enemyTypes.length)],
        spawnTime: Date.now()
      };

      console.log('[FocusChallenge] Spawning enemy:', newEnemy.type, 'at', newEnemy.x.toFixed(0), newEnemy.y.toFixed(0));
      setEnemies(prev => [...prev, newEnemy]);
    };

    const spawnInterval = setInterval(spawnEnemy, ENEMY_SPAWN_INTERVAL);
    spawnEnemy(); // Spawn inicial

    return () => clearInterval(spawnInterval);
  }, [isActive, enemies.length]);

  // Remoção automática de inimigos após lifetime
  useEffect(() => {
    if (!isActive || enemies.length === 0) return;

    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setEnemies(prev => prev.filter(e => now - e.spawnTime < ENEMY_LIFETIME));
    }, 200);

    return () => clearInterval(cleanupInterval);
  }, [isActive, enemies.length]);

  const handleStart = () => {
    console.log('[FocusChallenge] Iniciando desafio...');
    setPhase('challenge');
    setTimeLeft(GAME_DURATION);
    setHits(0);
    setEnemies([]);
    setIsActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnemyClick = useCallback((enemyId: number, x: number, y: number) => {
    console.log('[FocusChallenge] Inimigo eliminado! ID:', enemyId);
    
    // Remover inimigo
    setEnemies(prev => prev.filter(e => e.id !== enemyId));
    
    // Adicionar hit e pontos
    setHits(prev => prev + 1);
    
    // Feedback visual de pontos flutuantes
    const pointId = Date.now();
    setFloatingPoints(prev => [...prev, { id: pointId, x, y }]);
    setTimeout(() => {
      setFloatingPoints(prev => prev.filter(p => p.id !== pointId));
    }, 800);
  }, []);

  const handleSkip = () => {
    console.log('[FocusChallenge] Desafio pulado. Sem recompensas.');
    setIsActive(false);
    onNext();
  };

  // Concluir antecipadamente ao atingir Tier 3
  const handleComplete = () => {
    console.log('[FocusChallenge] Concluindo com Tier 3! Acertos:', hits);
    setIsActive(false);
    setPhase('completed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getTier = () => {
    if (hits >= TIER_3_MIN) return 3;
    if (hits >= TIER_2_MIN) return 2;
    if (hits >= TIER_1_MIN) return 1;
    return 0;
  };

  const getRewards = () => {
    const tier = getTier();
    switch (tier) {
      case 3: return { xp: 300, coins: 150, badge: 'Reflexos de Elite' };
      case 2: return { xp: 200, coins: 100, badge: null };
      case 1: return { xp: 100, coins: 50, badge: null };
      default: return { xp: 0, coins: 0, badge: null };
    }
  };

  const handleFinalComplete = () => {
    const rewards = getRewards();
    console.log('[FocusChallenge] Coletando recompensas:', rewards);
    
    const updates: Partial<UserProfile> = {
      xp: userProfile.xp + rewards.xp,
      respirCoins: userProfile.respirCoins + rewards.coins,
    };
    
    if (rewards.badge) {
      updates.badges = [...userProfile.badges, rewards.badge];
    }
    
    onUpdateProfile(updates);
    onNext();
  };

  const getEnemyIcon = (type: string) => {
    switch (type) {
      case 'cigarette': return <Cigarette className="w-8 h-8 text-background" />;
      case 'flame': return <Flame className="w-8 h-8 text-background" />;
      default: return <Target className="w-8 h-8 text-background" />;
    }
  };

  // ========== TELA DE INSTRUÇÕES ==========
  if (phase === 'instructions') {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background Effects - Consistente com Step1 e Step7 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col p-6 max-w-md mx-auto w-full">
          {/* Header com botão voltar */}
          {onBack && (
            <button
              onClick={onBack}
              className="absolute top-4 left-4 p-2 rounded-xl glass-effect hover:scale-105 transition-transform"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          )}

          {/* Ícone Premium com Glow */}
          <div className="text-center mb-8 pt-12 animate-fade-up">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center animate-float" style={{
              background: 'linear-gradient(135deg, hsl(0 100% 50%) 0%, hsl(30 100% 50%) 100%)',
              boxShadow: '0 0 40px hsl(0 100% 50% / 0.6)'
            }}>
              <Target className="w-12 h-12 text-background" />
            </div>
            
            {/* Badge de Nível */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{
              background: 'var(--gradient-gold)',
              color: 'hsl(var(--background))'
            }}>
              <Zap className="w-3 h-3" />
              Nível 3
            </div>
            
            <h1 className="text-3xl font-bold mb-2" style={{ 
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Desafio: Foco Rápido
            </h1>
            <p className="text-muted-foreground">
              Elimine os gatilhos antes que escapem!
            </p>
          </div>

          {/* Card "Como Funciona" - Premium Glass */}
          <div className="premium-card p-6 mb-6 animate-fade-up" style={{animationDelay: '0.1s'}}>
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Como Funciona
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              {/* Passo 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: 'var(--shadow-glow-primary)'
                }}>
                  <span className="text-sm font-bold text-background">1</span>
                </div>
                <div>
                  <p className="font-bold text-primary">Fique Atento</p>
                  <p>Gatilhos vão aparecer na tela em posições aleatórias</p>
                </div>
              </div>
              
              {/* Passo 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: 'var(--shadow-glow-primary)'
                }}>
                  <span className="text-sm font-bold text-background">2</span>
                </div>
                <div>
                  <p className="font-bold text-primary">Elimine Rápido</p>
                  <p>Clique neles antes que desapareçam (2 segundos)</p>
                </div>
              </div>
              
              {/* Passo 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: 'var(--shadow-glow-primary)'
                }}>
                  <span className="text-sm font-bold text-background">3</span>
                </div>
                <div>
                  <p className="font-bold text-primary">Acumule Acertos</p>
                  <p>30+ acertos = Badge "Reflexos de Elite"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Metas e Recompensas */}
          <div className="premium-card p-4 mb-6 animate-fade-up" style={{
            animationDelay: '0.2s',
            background: 'linear-gradient(135deg, rgba(120, 255, 120, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
            border: '1px solid rgba(120, 255, 120, 0.2)'
          }}>
            <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Recompensas por Tier
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">10-19 acertos:</span>
                <span className="text-foreground">+100 XP, +50 Coins</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">20-29 acertos:</span>
                <span className="text-gold font-bold">+200 XP, +100 Coins</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">30+ acertos:</span>
                <span className="text-primary font-bold">+300 XP, +150 Coins + 🏆 Badge</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" /> Tempo:
              </span>
              <span className="text-lg font-bold text-gold">{GAME_DURATION} segundos</span>
            </div>
          </div>

          {/* Botão CTA Principal - Premium */}
          <button
            onClick={handleStart}
            className="w-full premium-button text-lg flex items-center justify-center gap-3 animate-fade-up"
            style={{animationDelay: '0.3s'}}
          >
            <Play className="w-6 h-6" />
            Começar Desafio
          </button>
        </div>
      </div>
    );
  }

  // ========== TELA DE EXECUÇÃO (JOGO) ==========
  if (phase === 'challenge') {
    const progressToNextTier = hits < TIER_1_MIN 
      ? (hits / TIER_1_MIN) * 100 
      : hits < TIER_2_MIN 
        ? ((hits - TIER_1_MIN) / (TIER_2_MIN - TIER_1_MIN)) * 100
        : hits < TIER_3_MIN
          ? ((hits - TIER_2_MIN) / (TIER_3_MIN - TIER_2_MIN)) * 100
          : 100;

    const currentTierName = hits >= TIER_3_MIN ? 'Tier 3 - Máximo!' : 
                            hits >= TIER_2_MIN ? 'Tier 2' : 
                            hits >= TIER_1_MIN ? 'Tier 1' : 'Iniciante';

    return (
      <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
        {/* Floating Points */}
        {floatingPoints.map(fp => (
          <div
            key={fp.id}
            className="fixed text-2xl font-black text-primary z-50 pointer-events-none"
            style={{
              left: `${fp.x}%`,
              top: `${fp.y}%`,
              transform: 'translate(-50%, -50%)',
              animation: 'floatUp 0.8s ease-out forwards'
            }}
          >
            +{POINTS_PER_HIT}
          </div>
        ))}

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-smoking/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col p-4 w-full max-w-2xl mx-auto">
          {/* Header com Stats */}
          <div className="premium-card p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              {/* Timer */}
              <div className={`text-3xl font-black ${timeLeft <= 10 ? 'text-smoking animate-pulse' : timeLeft <= 20 ? 'text-gold' : 'text-primary'}`}>
                {timeLeft}s
              </div>
              
              {/* Acertos */}
              <div className="text-center">
                <div className="text-2xl font-black text-foreground">{hits}</div>
                <div className="text-xs text-muted-foreground">Acertos</div>
              </div>
              
              {/* Pontos */}
              <div className="text-right">
                <div className="text-xl font-bold text-primary">{hits * POINTS_PER_HIT} pts</div>
                <div className="text-xs text-muted-foreground">{currentTierName}</div>
              </div>
            </div>
            
            {/* Barra de Progresso para próximo tier */}
            <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progressToNextTier}%`,
                  background: hits >= TIER_3_MIN ? 'var(--gradient-primary)' : 'var(--gradient-gold)',
                  boxShadow: hits >= TIER_3_MIN ? 'var(--shadow-glow-primary)' : 'var(--shadow-glow-gold)'
                }}
              />
            </div>
            
            {/* Meta atual */}
            <p className="text-xs text-center text-muted-foreground mt-2">
              {hits < TIER_1_MIN ? `Faltam ${TIER_1_MIN - hits} para Tier 1` :
               hits < TIER_2_MIN ? `Faltam ${TIER_2_MIN - hits} para Tier 2` :
               hits < TIER_3_MIN ? `Faltam ${TIER_3_MIN - hits} para Tier 3` :
               '🔥 Tier Máximo Alcançado!'}
            </p>
          </div>

          {/* Área de Jogo */}
          <div 
            className="flex-1 relative rounded-3xl overflow-hidden mb-4"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.3) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              minHeight: '400px'
            }}
          >
            {/* Inimigos */}
            {enemies.map(enemy => (
              <button
                key={enemy.id}
                onClick={() => handleEnemyClick(enemy.id, enemy.x, enemy.y)}
                className="absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 animate-bounce-in"
                style={{
                  left: `${enemy.x}%`,
                  top: `${enemy.y}%`,
                  transform: 'translate(-50%, -50%)',
                  background: enemy.type === 'cigarette' 
                    ? 'linear-gradient(135deg, hsl(0 70% 50%) 0%, hsl(30 80% 45%) 100%)'
                    : enemy.type === 'flame'
                    ? 'linear-gradient(135deg, hsl(30 100% 50%) 0%, hsl(0 100% 50%) 100%)'
                    : 'linear-gradient(135deg, hsl(270 70% 50%) 0%, hsl(300 70% 50%) 100%)',
                  boxShadow: '0 0 20px rgba(255, 100, 100, 0.6)'
                }}
              >
                {getEnemyIcon(enemy.type)}
              </button>
            ))}

            {/* Hint central */}
            {enemies.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground text-lg animate-pulse">
                  Aguardando gatilhos...
                </p>
              </div>
            )}
          </div>

          {/* Botões de Ação */}
          <div className="space-y-3">
            {/* Botão Concluir - Só aparece quando atingir Tier 3 */}
            {showComplete && (
              <button
                onClick={handleComplete}
                className="w-full premium-button text-lg flex items-center justify-center gap-3 animate-fade-up"
              >
                <Trophy className="w-6 h-6" />
                🔥 Tier Máximo! Coletar {hits * POINTS_PER_HIT} pts
              </button>
            )}

            {/* Botão Pular - Discreto */}
            <button
              onClick={handleSkip}
              className="w-full p-3 rounded-2xl text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2 glass-effect"
            >
              <X className="w-4 h-4" />
              Pular Desafio (Sem Recompensas)
            </button>
          </div>
        </div>

        {/* CSS para animações */}
        <style>{`
          @keyframes floatUp {
            0% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
            100% {
              opacity: 0;
              transform: translate(-50%, -150%) scale(1.5);
            }
          }
        `}</style>
      </div>
    );
  }

  // ========== TELA DE CONCLUSÃO ==========
  if (phase === 'completed') {
    const tier = getTier();
    const rewards = getRewards();
    const points = hits * POINTS_PER_HIT;

    return (
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-6">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-md mx-auto text-center">
          {/* Ícone de Sucesso */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center animate-bounce-in" style={{
            background: tier >= 1 ? 'var(--gradient-primary)' : 'linear-gradient(135deg, hsl(0 0% 40%) 0%, hsl(0 0% 30%) 100%)',
            boxShadow: tier >= 1 ? 'var(--shadow-glow-primary)' : 'none'
          }}>
            {tier >= 3 ? (
              <Sparkles className="w-12 h-12 text-background" />
            ) : (
              <Trophy className="w-12 h-12 text-background" />
            )}
          </div>

          {/* Título */}
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-up">
            {tier >= 3 ? '🔥 Reflexos de Elite!' : 
             tier >= 2 ? 'Ótimo Trabalho!' : 
             tier >= 1 ? 'Desafio Concluído!' : 
             'Tempo Esgotado!'}
          </h2>

          {/* Mensagem */}
          <p className="text-muted-foreground text-base mb-8 leading-relaxed animate-fade-up" style={{animationDelay: '0.1s'}}>
            {tier >= 3 ? 'Você atingiu o tier máximo! Seus reflexos são excepcionais.' :
             tier >= 2 ? 'Seus reflexos estão afiados! Continue assim.' :
             tier >= 1 ? 'Bom começo! Pratique mais para subir de tier.' :
             'Não desista! Tente novamente para conseguir pontos.'}
          </p>

          {/* Card de Resultados */}
          <div className="premium-card p-6 mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
            {/* Acertos */}
            <div className="text-4xl font-black text-foreground mb-2">{hits} Acertos</div>
            <div className="text-lg text-muted-foreground mb-4">{points} pontos totais</div>
            
            {tier >= 1 ? (
              <>
                {/* Grid de Recompensas */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-2xl" style={{
                    background: 'linear-gradient(135deg, rgba(120, 255, 120, 0.1) 0%, rgba(120, 255, 120, 0.05) 100%)',
                    border: '1px solid rgba(120, 255, 120, 0.2)'
                  }}>
                    <div className="text-2xl font-black text-primary">+{rewards.xp}</div>
                    <div className="text-xs text-muted-foreground">XP Ganho</div>
                  </div>
                  <div className="p-4 rounded-2xl" style={{
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
                    border: '1px solid rgba(255, 215, 0, 0.2)'
                  }}>
                    <div className="text-2xl font-black text-gold">+{rewards.coins}</div>
                    <div className="text-xs text-muted-foreground">Coins</div>
                  </div>
                </div>

                {/* Badge (Tier 3 only) */}
                {rewards.badge && (
                  <div className="p-4 rounded-2xl mb-4" style={{
                    background: 'linear-gradient(135deg, rgba(120, 255, 120, 0.15) 0%, rgba(255, 215, 0, 0.15) 100%)',
                    border: '1px solid rgba(120, 255, 120, 0.3)'
                  }}>
                    <div className="flex items-center justify-center gap-2 animate-pulse">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-primary font-bold">🏆 Badge Desbloqueado: {rewards.badge}</span>
                    </div>
                  </div>
                )}

                {/* Tier Info */}
                <div className="text-sm text-muted-foreground">
                  Tier Alcançado: <span className="font-bold text-foreground">{tier}</span>
                </div>
              </>
            ) : (
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(255, 100, 100, 0.1) 0%, rgba(255, 100, 100, 0.05) 100%)',
                border: '1px solid rgba(255, 100, 100, 0.2)'
              }}>
                <p className="text-muted-foreground text-sm">
                  Você precisa de pelo menos 10 acertos para ganhar recompensas.
                </p>
              </div>
            )}
          </div>

          {/* Botão CTA */}
          <button
            onClick={handleFinalComplete}
            className="w-full premium-button text-lg flex items-center justify-center gap-2 animate-fade-up"
            style={{animationDelay: '0.3s'}}
          >
            <Trophy className="w-5 h-5" />
            <span>{tier >= 1 ? 'Coletar Recompensas' : 'Continuar'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Step9FocusChallenge;