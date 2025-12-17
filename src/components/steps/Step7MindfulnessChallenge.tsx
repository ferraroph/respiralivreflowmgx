import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/funnel';
import { Eye, Ear, Hand, Play, X, Trophy, Zap, Sparkles, ChevronRight, Target, ChevronLeft } from 'lucide-react';

interface Step7MindfulnessChallengeProps {
  userProfile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onNext: () => void;
  onBack?: () => void;
  devInitialState?: { phase?: 'instructions' | 'challenge' | 'completed' };
}

// Constantes do sistema de pontuação (PRD Seção 3.1)
const MINIMUM_POINTS = 9;
const POINTS_PER_SEE = 1;
const POINTS_PER_HEAR = 3;
const POINTS_PER_FEEL = 5;
const POINTS_PER_CENTRAL = 3; // Média: (1+3+5)/3 = 3

const Step7MindfulnessChallenge = ({ userProfile, onUpdateProfile, onNext, onBack, devInitialState }: Step7MindfulnessChallengeProps) => {
  const [phase, setPhase] = useState<'instructions' | 'challenge' | 'completed'>(devInitialState?.phase || 'instructions');
  const [points, setPoints] = useState(0);
  const [showComplete, setShowComplete] = useState(false);
  const [floatingPoints, setFloatingPoints] = useState<{ id: number; value: number; x: number; y: number }[]>([]);
  const [lastClickedButton, setLastClickedButton] = useState<string | null>(null);

  // Debug log
  useEffect(() => {
    console.log('[Mindfulness] Phase:', phase, 'Points:', points, 'ShowComplete:', showComplete);
  }, [phase, points, showComplete]);

  // Mostrar botão Concluir quando atingir mínimo
  useEffect(() => {
    if (points >= MINIMUM_POINTS && !showComplete) {
      setShowComplete(true);
      console.log('[Mindfulness] Mínimo atingido! Botão Concluir disponível.');
    }
  }, [points, showComplete]);

  const handleStart = () => {
    console.log('[Mindfulness] Iniciando desafio...');
    setPhase('challenge');
    setPoints(0);
    setShowComplete(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addFloatingPoint = (value: number, buttonId: string) => {
    const id = Date.now();
    // Posição baseada no botão clicado
    const positions: Record<string, { x: number; y: number }> = {
      central: { x: 50, y: 40 },
      see: { x: 25, y: 70 },
      hear: { x: 50, y: 70 },
      feel: { x: 75, y: 70 }
    };
    const pos = positions[buttonId] || { x: 50, y: 50 };
    
    setFloatingPoints(prev => [...prev, { id, value, x: pos.x, y: pos.y }]);
    setTimeout(() => {
      setFloatingPoints(prev => prev.filter(p => p.id !== id));
    }, 1000);
  };

  const handleCentralClick = () => {
    console.log('[Mindfulness] Botão central clicado. +3 pontos');
    setPoints(prev => prev + POINTS_PER_CENTRAL);
    setLastClickedButton('central');
    addFloatingPoint(POINTS_PER_CENTRAL, 'central');
    setTimeout(() => setLastClickedButton(null), 300);
  };

  const handleSenseClick = (type: 'see' | 'hear' | 'feel') => {
    const pointsMap = { see: POINTS_PER_SEE, hear: POINTS_PER_HEAR, feel: POINTS_PER_FEEL };
    const pts = pointsMap[type];
    console.log(`[Mindfulness] Botão ${type} clicado. +${pts} pontos`);
    setPoints(prev => prev + pts);
    setLastClickedButton(type);
    addFloatingPoint(pts, type);
    setTimeout(() => setLastClickedButton(null), 300);
  };

  const handleComplete = () => {
    console.log('[Mindfulness] Desafio concluído! Pontos finais:', points);
    setPhase('completed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSkip = () => {
    console.log('[Mindfulness] Desafio pulado. Sem recompensas.');
    onUpdateProfile({});
    onNext();
  };

  const handleFinalComplete = () => {
    const xpGained = 150 + Math.floor((points - MINIMUM_POINTS) * 5);
    const coinsGained = 50 + Math.floor((points - MINIMUM_POINTS) * 2);
    console.log('[Mindfulness] Coletando recompensas:', { xpGained, coinsGained });
    
    onUpdateProfile({
      xp: userProfile.xp + xpGained,
      respirCoins: userProfile.respirCoins + coinsGained,
      badges: [...userProfile.badges, 'Observador Consciente']
    });
    onNext();
  };

  // ========== TELA DE INSTRUÇÕES ==========
  if (phase === 'instructions') {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background Effects - Consistente com Step1 */}
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
              background: 'var(--gradient-primary)',
              boxShadow: 'var(--shadow-glow-primary)'
            }}>
              <Eye className="w-12 h-12 text-background" />
            </div>
            
            {/* Badge de Nível */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4" style={{
              background: 'var(--gradient-gold)',
              color: 'hsl(var(--background))'
            }}>
              <Target className="w-3 h-3" />
              Nível 2
            </div>
            
            <h1 className="text-3xl font-bold mb-2" style={{ 
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Desafio: Observação Consciente
            </h1>
            <p className="text-muted-foreground">
              Exercite sua presença através dos sentidos
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
                  <p className="font-bold text-primary">Observe</p>
                  <p>Note 5 coisas ao seu redor (visual, sonoro ou sensorial)</p>
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
                  <p className="font-bold text-primary">Registre</p>
                  <p>Toque nos botões sensoriais para registrar suas observações</p>
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
                  <p className="font-bold text-primary">Complete</p>
                  <p>Alcance 9 pontos mínimos para concluir o desafio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Recompensas - Premium */}
          <div className="premium-card p-4 mb-6 animate-fade-up" style={{
            animationDelay: '0.2s',
            background: 'linear-gradient(135deg, rgba(120, 255, 120, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
            border: '1px solid rgba(120, 255, 120, 0.2)'
          }}>
            <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Recompensas
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/80">Recompensa Máxima:</span>
              <div className="flex items-center gap-3">
                <span className="text-success font-bold">+150 XP</span>
                <span className="text-gold font-bold">+50 Coins</span>
              </div>
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

  // ========== TELA DE EXECUÇÃO ==========
  if (phase === 'challenge') {
    const progressPercent = Math.min((points / MINIMUM_POINTS) * 100, 100);
    const getMessage = () => {
      if (points === 0) return "Observe algo ao seu redor e registre";
      if (points < MINIMUM_POINTS) return `Faltam ${MINIMUM_POINTS - points} pontos para completar`;
      if (points < 15) return "Ótimo! Você atingiu o mínimo. Continue ou finalize.";
      return "Excelente! Você está em presença profunda.";
    };

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
              animation: 'floatUp 1s ease-out forwards'
            }}
          >
            +{fp.value}
          </div>
        ))}

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col p-6 max-w-md mx-auto w-full">
          {/* Header com Pontuação */}
          <div className="premium-card p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Pontuação</span>
              <span className={`text-2xl font-black ${points >= MINIMUM_POINTS ? 'text-primary' : 'text-foreground'}`}>
                {points} <span className="text-sm font-normal text-muted-foreground">/ {MINIMUM_POINTS} mín</span>
              </span>
            </div>
            {/* Barra de Progresso */}
            <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progressPercent}%`,
                  background: points >= MINIMUM_POINTS ? 'var(--gradient-primary)' : 'var(--gradient-gold)',
                  boxShadow: points >= MINIMUM_POINTS ? 'var(--shadow-glow-primary)' : 'var(--shadow-glow-gold)'
                }}
              />
            </div>
            {/* Mensagem de Estado */}
            <p className="text-xs text-center text-muted-foreground mt-2">{getMessage()}</p>
          </div>

          {/* Área Central - Botão Grande */}
          <div className="flex-1 flex flex-col items-center justify-center mb-8">
            <button
              onClick={handleCentralClick}
              className={`w-56 h-56 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                lastClickedButton === 'central' ? 'scale-95' : 'hover:scale-105'
              }`}
              style={{
                background: 'var(--gradient-primary)',
                boxShadow: lastClickedButton === 'central' 
                  ? '0 0 60px hsl(120 100% 50% / 0.8)'
                  : 'var(--shadow-glow-primary)',
                border: '3px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Eye className="w-16 h-16 text-background mb-2" />
              <span className="text-background font-bold text-lg">Notei 5 coisas</span>
              <span className="text-background/80 text-sm">+3 pontos</span>
            </button>

            <p className="text-sm text-muted-foreground mt-4 text-center max-w-xs">
              Clique quando notar 5 coisas diferentes ao seu redor
            </p>
          </div>

          {/* Botões Sensoriais */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {/* Botão VER */}
            <button
              onClick={() => handleSenseClick('see')}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all duration-300 ${
                lastClickedButton === 'see' ? 'scale-95' : 'hover:scale-105'
              }`}
              style={{
                background: 'var(--gradient-glass)',
                backdropFilter: 'var(--backdrop-blur)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: lastClickedButton === 'see' ? 'var(--shadow-glow-primary)' : 'var(--shadow-glass)'
              }}
            >
              <Eye className="w-6 h-6 text-primary" />
              <span className="text-xs font-bold text-foreground">Ver</span>
              <span className="text-xs text-primary">+1 pt</span>
            </button>

            {/* Botão OUVIR */}
            <button
              onClick={() => handleSenseClick('hear')}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all duration-300 ${
                lastClickedButton === 'hear' ? 'scale-95' : 'hover:scale-105'
              }`}
              style={{
                background: 'var(--gradient-glass)',
                backdropFilter: 'var(--backdrop-blur)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: lastClickedButton === 'hear' ? 'var(--shadow-glow-primary)' : 'var(--shadow-glass)'
              }}
            >
              <Ear className="w-6 h-6 text-gold" />
              <span className="text-xs font-bold text-foreground">Ouvir</span>
              <span className="text-xs text-gold">+3 pts</span>
            </button>

            {/* Botão SENTIR */}
            <button
              onClick={() => handleSenseClick('feel')}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all duration-300 ${
                lastClickedButton === 'feel' ? 'scale-95' : 'hover:scale-105'
              }`}
              style={{
                background: 'var(--gradient-glass)',
                backdropFilter: 'var(--backdrop-blur)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: lastClickedButton === 'feel' ? 'var(--shadow-glow-primary)' : 'var(--shadow-glass)'
              }}
            >
              <Hand className="w-6 h-6 text-success" />
              <span className="text-xs font-bold text-foreground">Sentir</span>
              <span className="text-xs text-success">+5 pts</span>
            </button>
          </div>

          {/* Botões de Ação */}
          <div className="space-y-3">
            {/* Botão Concluir - Só aparece quando atingir mínimo */}
            {showComplete && (
              <button
                onClick={handleComplete}
                className="w-full premium-button text-lg flex items-center justify-center gap-3 animate-fade-up"
              >
                <Trophy className="w-6 h-6" />
                Concluir e Coletar: {points} pts
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

        {/* CSS para animação de pontos flutuando */}
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
    const xpGained = 150 + Math.floor((points - MINIMUM_POINTS) * 5);
    const coinsGained = 50 + Math.floor((points - MINIMUM_POINTS) * 2);
    const bonusPoints = points > MINIMUM_POINTS ? points - MINIMUM_POINTS : 0;

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
            background: 'var(--gradient-primary)',
            boxShadow: 'var(--shadow-glow-primary)'
          }}>
            <Trophy className="w-12 h-12 text-background" />
          </div>

          {/* Título */}
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-up">
            Desafio Concluído!
          </h2>

          {/* Mensagem */}
          <p className="text-muted-foreground text-base mb-8 leading-relaxed animate-fade-up" style={{animationDelay: '0.1s'}}>
            Você exercitou sua presença! Sua consciência está mais afiada.
          </p>

          {/* Card de Resultados */}
          <div className="premium-card p-6 mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(120, 255, 120, 0.1) 0%, rgba(120, 255, 120, 0.05) 100%)',
                border: '1px solid rgba(120, 255, 120, 0.2)'
              }}>
                <div className="text-2xl font-black text-primary">+{xpGained}</div>
                <div className="text-xs text-muted-foreground">XP Ganho</div>
              </div>
              <div className="p-4 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
                border: '1px solid rgba(255, 215, 0, 0.2)'
              }}>
                <div className="text-2xl font-black text-gold">+{coinsGained}</div>
                <div className="text-xs text-muted-foreground">Coins</div>
              </div>
            </div>

            <div className="text-lg font-bold text-foreground mb-2">
              Pontuação Final: {points}
            </div>

            {bonusPoints > 0 && (
              <div className="flex items-center justify-center gap-2 text-primary animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Bônus de Excelência: +{bonusPoints * 5} XP</span>
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
            <span>Concluir e Coletar Pontos</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Step7MindfulnessChallenge;