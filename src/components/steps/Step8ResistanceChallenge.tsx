import React, { useState, useEffect, useCallback } from 'react';
import { Brain, Trophy, Zap, X, Check, RotateCcw, ChevronRight, Sparkles } from 'lucide-react';

interface Step8ResistanceChallengeProps {
  onNext: () => void;
  onBack?: () => void;
  onUpdateScore: (points: number) => void;
  devInitialState?: { phase?: 'instructions' | 'showing' | 'input' | 'transition' | 'complete' | 'failed' };
}

// Configuração de níveis conforme PRD.md REQ-MEM-006/007
const LEVEL_CONFIG = {
  1: { sequenceLength: 2, xp: 200, coins: 100, showSpeed: 1000 },
  2: { sequenceLength: 5, xp: 300, coins: 200, showSpeed: 1300, badge: 'Mente de Aço' } // 30% mais lento
};

const COLORS = [
  { id: 'green', bgClass: 'from-green-500 to-green-400', name: 'Verde', glowClass: 'shadow-green-500/50' },
  { id: 'yellow', bgClass: 'from-yellow-500 to-yellow-400', name: 'Amarelo', glowClass: 'shadow-yellow-500/50' },
  { id: 'blue', bgClass: 'from-blue-500 to-cyan-400', name: 'Azul', glowClass: 'shadow-blue-500/50' },
  { id: 'purple', bgClass: 'from-purple-500 to-pink-400', name: 'Roxo', glowClass: 'shadow-purple-500/50' }
];

type Phase = 'instructions' | 'showing' | 'input' | 'transition' | 'complete' | 'failed';

const Step8ResistanceChallenge: React.FC<Step8ResistanceChallengeProps> = ({ 
  onNext, 
  onBack, 
  onUpdateScore, 
  devInitialState 
}) => {
  const [phase, setPhase] = useState<Phase>(devInitialState?.phase || 'instructions');
  const [currentLevel, setCurrentLevel] = useState<1 | 2>(1);
  const [sequence, setSequence] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string[]>([]);
  const [currentShowIndex, setCurrentShowIndex] = useState(0);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [totalXP, setTotalXP] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);
  const [earnedBadge, setEarnedBadge] = useState<string | null>(null);
  
  // REQ-MEM-005: Botão de confirmação - só permite confirmar quando sequência está completa
  const canConfirm = userInput.length === LEVEL_CONFIG[currentLevel].sequenceLength;

  // Gerar sequência aleatória
  const generateSequence = useCallback((level: 1 | 2) => {
    const config = LEVEL_CONFIG[level];
    const newSequence: string[] = [];
    for (let i = 0; i < config.sequenceLength; i++) {
      newSequence.push(COLORS[Math.floor(Math.random() * COLORS.length)].id);
    }
    return newSequence;
  }, []);

  // Iniciar desafio
  const startChallenge = useCallback(() => {
    const newSequence = generateSequence(currentLevel);
    setSequence(newSequence);
    setUserInput([]);
    setCurrentShowIndex(0);
    setActiveColor(null);
    setPhase('showing');
  }, [currentLevel, generateSequence]);

  // Mostrar sequência com animação (REQ-MEM-008: velocidade por nível)
  useEffect(() => {
    if (phase !== 'showing') return;

    const config = LEVEL_CONFIG[currentLevel];
    
    if (currentShowIndex < sequence.length) {
      // Mostrar cor atual
      setActiveColor(sequence[currentShowIndex]);
      
      const timer = setTimeout(() => {
        setActiveColor(null);
        setTimeout(() => {
          setCurrentShowIndex(prev => prev + 1);
        }, 200); // Pausa entre cores
      }, config.showSpeed);
      
      return () => clearTimeout(timer);
    } else {
      // Terminou de mostrar - ir para input
      setTimeout(() => {
        setPhase('input');
        setActiveColor(null);
      }, 500);
    }
  }, [phase, currentShowIndex, sequence, currentLevel]);

  // REQ-MEM-001/002/003: Clique apenas armazena, NÃO valida automaticamente
  const handleColorClick = (colorId: string) => {
    if (phase !== 'input') return;
    if (userInput.length >= LEVEL_CONFIG[currentLevel].sequenceLength) return;
    
    // Apenas armazena o input - SEM VALIDAÇÃO AUTOMÁTICA
    setUserInput(prev => [...prev, colorId]);
    
    // Feedback visual temporário
    setActiveColor(colorId);
    setTimeout(() => setActiveColor(null), 200);
  };

  // REQ-MEM-005: Botão de confirmação manual
  const handleConfirm = () => {
    if (!canConfirm) return;
    
    // Validar sequência agora
    const isCorrect = userInput.every((input, index) => input === sequence[index]);
    
    if (isCorrect) {
      const config = LEVEL_CONFIG[currentLevel];
      const newXP = totalXP + config.xp;
      const newCoins = totalCoins + config.coins;
      
      setTotalXP(newXP);
      setTotalCoins(newCoins);
      
      if (currentLevel === 1) {
        // Ir para tela de transição (REQ-MEM-009)
        setPhase('transition');
      } else {
        // Completou nível 2 - dar badge
        setEarnedBadge(config.badge || null);
        setPhase('complete');
      }
    } else {
      setPhase('failed');
    }
  };

  // REQ-MEM-005: Botão de resetar
  const handleReset = () => {
    setUserInput([]);
    setActiveColor(null);
  };

  // Aceitar nível 2 (REQ-MEM-009)
  const handleAcceptLevel2 = () => {
    setCurrentLevel(2);
    const newSequence = generateSequence(2);
    setSequence(newSequence);
    setUserInput([]);
    setCurrentShowIndex(0);
    setActiveColor(null);
    setPhase('showing');
  };

  // Finalizar após nível 1 (REQ-MEM-009)
  const handleFinishAfterLevel1 = () => {
    onUpdateScore(totalXP);
    onNext();
  };

  // Tentar novamente após falha
  const handleRetry = () => {
    setUserInput([]);
    setCurrentShowIndex(0);
    setActiveColor(null);
    setPhase('showing');
  };

  // Pular desafio
  const handleSkip = () => {
    onNext();
  };

  // Coletar recompensas finais
  const handleCollect = () => {
    onUpdateScore(totalXP);
    onNext();
  };

  // ========================================
  // TELA DE INSTRUÇÕES
  // ========================================
  if (phase === 'instructions') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6 animate-fade-up">
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mb-4 mx-auto animate-glow-pulse shadow-lg shadow-purple-500/30">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                Nível {currentLevel}
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground">
              Desafio: Memória Livre
            </h2>
            <p className="text-muted-foreground text-lg">
              Treine sua mente, fortaleça sua vontade
            </p>
          </div>

          <div className="premium-card p-6 space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-500" />
              Como Funciona
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 font-bold text-sm">1</span>
                </div>
                <p className="text-foreground/80">Memorize a sequência de {LEVEL_CONFIG[currentLevel].sequenceLength} cores</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 font-bold text-sm">2</span>
                </div>
                <p className="text-foreground/80">Clique nas cores na ordem correta</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 font-bold text-sm">3</span>
                </div>
                <p className="text-foreground/80">Confirme sua sequência quando terminar</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl border border-success/20">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/80">Recompensa:</span>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400 font-bold">+{LEVEL_CONFIG[1].xp} XP</span>
                  <span className="text-yellow-400 font-bold">+{LEVEL_CONFIG[1].coins} Coins</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={startChallenge}
            className="w-full premium-button text-lg flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Começar Desafio
          </button>
        </div>
      </div>
    );
  }

  // ========================================
  // TELA DE FALHA
  // ========================================
  if (phase === 'failed') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6 animate-fade-up text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-red-500/30">
            <X className="w-16 h-16 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-red-400">
            Não foi dessa vez!
          </h2>
          
          <p className="text-muted-foreground">
            Mas não desista! Cada tentativa fortalece sua mente.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleRetry}
              className="w-full premium-button text-lg"
            >
              Tentar Novamente
            </button>
            
            <button
              onClick={handleSkip}
              className="w-full glass-effect px-6 py-3 rounded-2xl font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pular Desafio (Sem Recompensas)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ========================================
  // TELA DE TRANSIÇÃO (REQ-MEM-009/010)
  // ========================================
  if (phase === 'transition') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6 animate-bounce-in text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-green-500/30">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-green-400">
            Nível 1 Concluído!
          </h2>
          
          <div className="premium-card p-4">
            <div className="flex items-center justify-center gap-4">
              <span className="text-purple-400 font-bold text-xl">+{LEVEL_CONFIG[1].xp} XP</span>
              <span className="text-yellow-400 font-bold text-xl">+{LEVEL_CONFIG[1].coins} Coins</span>
            </div>
          </div>

          {/* Copy motivacional REQ-MEM-010 */}
          <div className="premium-card p-6 border-yellow-500/30">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Desafio Opcional: Nível 2
            </h3>
            <p className="text-yellow-400 font-medium mb-4">
              ⚡ 60% dos usuários não conseguem completar este nível. Você aceita o desafio?
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Bônus: +{LEVEL_CONFIG[2].xp} XP, +{LEVEL_CONFIG[2].coins} Coins</p>
              <p className="text-green-400 mt-1">🏆 Badge: {LEVEL_CONFIG[2].badge}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleAcceptLevel2}
              className="w-full premium-button text-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              🔥 Aceitar Desafio
            </button>
            
            <button
              onClick={handleFinishAfterLevel1}
              className="w-full glass-effect px-6 py-3 rounded-2xl font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Finalizar e Coletar Recompensas
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ========================================
  // TELA DE CONCLUSÃO FINAL
  // ========================================
  if (phase === 'complete') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6 animate-bounce-in text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/30">
            <Trophy className="w-16 h-16 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Memória Perfeita!
          </h2>
          
          <div className="premium-card p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-purple-500/10 rounded-2xl">
                <div className="text-3xl font-bold text-purple-400">+{totalXP}</div>
                <div className="text-sm text-muted-foreground">XP Total</div>
              </div>
              <div className="text-center p-4 bg-yellow-500/10 rounded-2xl">
                <div className="text-3xl font-bold text-yellow-400">+{totalCoins}</div>
                <div className="text-sm text-muted-foreground">Coins</div>
              </div>
            </div>
            
            {earnedBadge && (
              <div className="p-4 bg-success/10 rounded-2xl border border-success/20">
                <p className="text-success font-bold">🏆 Badge Desbloqueado: {earnedBadge}</p>
              </div>
            )}
          </div>

          <button
            onClick={handleCollect}
            className="w-full premium-button text-lg flex items-center justify-center gap-2"
          >
            <Trophy className="w-5 h-5" />
            Coletar Recompensas
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // ========================================
  // TELA DE JOGO (showing/input)
  // ========================================
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Header com status */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm text-muted-foreground mb-2">
          Nível {currentLevel} de 2
        </div>
        {phase === 'showing' ? (
          <div className="text-2xl font-bold text-foreground animate-pulse">
            MEMORIZE
          </div>
        ) : (
          <div className="space-y-1">
            <div className="text-lg text-foreground font-medium">
              Sua vez! Repita a sequência
            </div>
            <div className="text-muted-foreground">
              {userInput.length} / {LEVEL_CONFIG[currentLevel].sequenceLength}
            </div>
          </div>
        )}
      </div>

      {/* Grid de cores */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          {COLORS.map((color) => {
            const isActive = activeColor === color.id;
            
            return (
              <button
                key={color.id}
                onClick={() => handleColorClick(color.id)}
                disabled={phase !== 'input'}
                className={`
                  w-32 h-32 rounded-3xl bg-gradient-to-br ${color.bgClass}
                  flex items-center justify-center
                  transition-all duration-200
                  ${phase === 'input' ? 'hover:scale-105 cursor-pointer active:scale-95' : 'cursor-not-allowed'}
                  ${isActive ? `scale-110 ring-4 ring-white shadow-2xl ${color.glowClass}` : 'scale-100'}
                `}
              >
                <span className="text-white font-bold text-lg drop-shadow-lg">
                  {color.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sequência do usuário (visual) */}
      {phase === 'input' && userInput.length > 0 && (
        <div className="mb-4">
          <div className="flex gap-2 justify-center">
            {userInput.map((colorId, index) => {
              const color = COLORS.find(c => c.id === colorId);
              return (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color?.bgClass}`}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Botões de ação REQ-MEM-005 */}
      {phase === 'input' && (
        <div className="w-full max-w-md pb-8 space-y-3">
          {/* Botão Confirmar - só aparece quando sequência está completa */}
          {canConfirm && (
            <button
              onClick={handleConfirm}
              className="w-full premium-button text-lg flex items-center justify-center gap-2 animate-fade-up"
            >
              <Check className="w-5 h-5" />
              ✓ Confirmar Sequência
            </button>
          )}
          
          {/* Botão Resetar */}
          {userInput.length > 0 && (
            <button
              onClick={handleReset}
              className="w-full glass-effect px-6 py-3 rounded-2xl font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              ↻ Tentar Novamente
            </button>
          )}
          
          {/* Botão Pular */}
          <button
            onClick={handleSkip}
            className="w-full glass-effect px-6 py-3 rounded-2xl font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <X className="w-4 h-4" />
            Pular Desafio (Sem Recompensas)
          </button>
        </div>
      )}
    </div>
  );
};

export default Step8ResistanceChallenge;