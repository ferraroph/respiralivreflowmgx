import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/funnel';
import { Wind, Play, SkipForward, Trophy, Timer, Zap, Sparkles, ChevronRight } from 'lucide-react';
import { StepWrapper } from '../StepWrapper';

interface Step6BreathingChallengeProps {
  userProfile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onNext: () => void;
  onBack?: () => void;
  devInitialState?: { phase?: 'instructions' | 'challenge' | 'completed' | 'countdown' };
}

const Step6BreathingChallenge = ({ userProfile, onUpdateProfile, onNext, onBack, devInitialState }: Step6BreathingChallengeProps) => {
  const [phase, setPhase] = useState<'instructions' | 'countdown' | 'challenge' | 'completed'>(devInitialState?.phase || 'instructions');
  const [isActive, setIsActive] = useState(devInitialState?.phase === 'challenge');
  const [timeElapsed, setTimeElapsed] = useState(devInitialState?.phase === 'completed' ? 60 : 0);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'hold2'>('inhale');
  const [breathCount, setBreatheCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [timer, setTimer] = useState(4); // Countdown timer dentro de cada fase
  const [countdownValue, setCountdownValue] = useState<'PREPARE-SE' | '3' | '2' | '1'>('PREPARE-SE');
  const [isFirstInhale, setIsFirstInhale] = useState(true); // Para começar do ponto 0

  const MINIMUM_TIME = 10; // 10 seconds minimum
  // Timing correto conforme PRD: 4s inspire, 2s segure, 4s expire, 2s segure = 12s ciclo
  const INHALE_TIME = 4;
  const HOLD_TIME = 2;
  const EXHALE_TIME = 4;
  const HOLD2_TIME = 2;

  // Countdown effect: PREPARE-SE → 3 → 2 → 1 → challenge
  useEffect(() => {
    if (phase !== 'countdown') return;

    const countdownSequence: Array<'PREPARE-SE' | '3' | '2' | '1'> = ['PREPARE-SE', '3', '2', '1'];
    let currentIndex = 0;
    setCountdownValue('PREPARE-SE');

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < countdownSequence.length) {
        setCountdownValue(countdownSequence[currentIndex]);
      } else {
        // Fim do countdown - iniciar challenge
        clearInterval(interval);
        setPhase('challenge');
        setIsActive(true);
        setBreathPhase('inhale');
        setTimer(INHALE_TIME);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'challenge' || !isActive) return;

    const interval = setInterval(() => {
      // Incrementar tempo total
      setTimeElapsed(prev => {
        const newTime = prev + 1;
        
        // Show skip button after minimum time
        if (newTime >= MINIMUM_TIME && !showSkip) {
          setShowSkip(true);
        }
        
        // Calculate points (5 XP por segundo, conforme referência)
        const calculatedPoints = Math.min(newTime * 5, 300);
        setPoints(calculatedPoints);
        
        return newTime;
      });

      // Timer countdown dentro de cada fase - ciclo completo 4-2-4-2
      setTimer(prev => {
        if (prev <= 1) {
          // Transição entre fases
          if (breathPhase === 'inhale') {
            setIsFirstInhale(false); // Não é mais o primeiro inhale
            setBreathPhase('hold');
            return HOLD_TIME;
          } else if (breathPhase === 'hold') {
            setBreathPhase('exhale');
            return EXHALE_TIME;
          } else if (breathPhase === 'exhale') {
            setBreathPhase('hold2');
            return HOLD2_TIME;
          } else {
            // hold2 -> volta para inhale (ciclo completo)
            setBreathPhase('inhale');
            setBreatheCount(c => c + 1);
            return INHALE_TIME;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, isActive, breathPhase, showSkip]);

  const handleStart = () => {
    setPhase('countdown');
    setCountdownValue('PREPARE-SE');
    setTimeElapsed(0);
    setBreatheCount(0);
    setPoints(0);
    setShowSkip(false);
    setTimer(INHALE_TIME);
    setBreathPhase('inhale');
    setIsFirstInhale(true); // Reset para começar do ponto 0
  };

  const handleSkip = () => {
    if (timeElapsed < MINIMUM_TIME) {
      // No points if skipped too early
      completeChallenge(0);
    } else {
      completeChallenge(points);
    }
  };

  const handleComplete = () => {
    completeChallenge(points);
  };

  const completeChallenge = (earnedPoints: number) => {
    setIsActive(false);
    setPhase('completed');
    
    setTimeout(() => {
      onUpdateProfile({
        xp: userProfile.xp + earnedPoints,
        respirCoins: userProfile.respirCoins + Math.floor(earnedPoints / 2),
        badges: earnedPoints > 0 ? [...userProfile.badges, 'Mestre da Respiração'] : userProfile.badges
      });
      onNext();
    }, 2000);
  };

  if (phase === 'instructions') {
    return (
      <StepWrapper 
        title="🌬️ Desafio da Respiração"
        subtitle="Pratique respiração consciente e ganhe pontos"
        onBack={onBack}
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 premium-card bg-gradient-to-br from-primary/20 to-success/20 border-primary/30 flex items-center justify-center animate-float">
              <Wind className="w-10 h-10 text-primary" />
            </div>
            <p className="text-muted-foreground mb-2">
              Nível 1 • Dificuldade: Iniciante
            </p>
          </div>

          <div className="premium-card p-6 mb-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Como Funciona
            </h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 premium-card bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <p>Respire profundamente seguindo o ritmo visual</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 premium-card bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <p>Mantenha o foco por pelo menos 10 segundos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 premium-card bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <p>Quanto mais tempo, mais pontos você ganha!</p>
              </div>
            </div>
          </div>

          <div className="premium-card p-4 mb-6 bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
            <h3 className="font-bold text-success mb-3 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Recompensas Possíveis
            </h3>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div>
                <div className="text-lg font-bold text-gold">100+</div>
                <div className="text-muted-foreground">XP Base</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gold">50+</div>
                <div className="text-muted-foreground">Coins</div>
              </div>
              <div>
                <div className="text-lg font-bold text-success">1</div>
                <div className="text-muted-foreground">Badge</div>
              </div>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full btn-premium text-lg flex items-center justify-center gap-3"
          >
            <Play className="w-6 h-6" />
            Iniciar Desafio
          </button>
        </div>
      </StepWrapper>
    );
  }

  // Fase Countdown: PREPARE-SE → 3 → 2 → 1 dentro do círculo
  if (phase === 'countdown') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="relative flex items-center justify-center">
          {/* Anel luminoso sutil no countdown */}
          <svg 
            className="absolute pointer-events-none"
            width="292" 
            height="292" 
            viewBox="0 0 292 292"
            style={{ 
              filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.5)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.3))'
            }}
          >
            <circle
              cx="146"
              cy="146"
              r="140"
              fill="none"
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth="6"
            />
          </svg>
          
          {/* Círculo no ponto 0 (scale 1.0 = posição inicial) */}
          <div 
            className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/60 to-success/60 flex items-center justify-center shadow-2xl"
          >
            <div className="text-white text-center">
              <div className="text-4xl font-bold animate-pulse">
                {countdownValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'challenge') {
    // Cores por fase (referência do funil antigo) - incluindo hold2
    const getPhaseColor = () => {
      switch (breathPhase) {
        case 'inhale': return 'from-primary to-success';
        case 'hold': return 'from-gold to-warning';
        case 'exhale': return 'from-blue-500 to-purple-500';
        case 'hold2': return 'from-gold to-warning';
      }
    };

    // Cor sólida para o progress ring
    const getRingColor = () => {
      switch (breathPhase) {
        case 'inhale': return '#22c55e'; // success/green
        case 'hold': return '#eab308'; // gold
        case 'exhale': return '#8b5cf6'; // purple
        case 'hold2': return '#eab308'; // gold
      }
    };

    // Texto da fase em CAIXA ALTA (conforme PRD) - incluindo hold2
    const getPhaseText = () => {
      switch (breathPhase) {
        case 'inhale': return 'INSPIRE';
        case 'hold': return 'SEGURE';
        case 'exhale': return 'EXPIRE';
        case 'hold2': return 'SEGURE';
      }
    };

    // Duração da animação conforme a fase atual
    const getPhaseDuration = () => {
      switch (breathPhase) {
        case 'inhale': return INHALE_TIME;
        case 'hold': return HOLD_TIME;
        case 'exhale': return EXHALE_TIME;
        case 'hold2': return HOLD2_TIME;
      }
    };

    // Scale conforme fase com animação CSS suave
    // inhale: 1.0 → 1.5 (cresce - 4s)
    // hold: mantém 1.5 (2s)
    // exhale: 1.5 → 1.0 (diminui - 4s)
    // hold2: mantém 1.0 (2s)
    const getScaleValue = () => {
      switch (breathPhase) {
        case 'inhale': return 1.5;
        case 'hold': return 1.5;
        case 'exhale': return 1.0;
        case 'hold2': return 1.0;
      }
    };

    // Calcular progresso do anel baseado no timer atual da fase (0 a 100)
    const getProgressPercent = () => {
      const phaseDuration = getPhaseDuration();
      // timer começa no máximo e vai até 1, então invertemos
      return ((phaseDuration - timer + 1) / phaseDuration) * 100;
    };

    const scaleValue = getScaleValue();
    const progressPercent = Math.min(getProgressPercent(), 100);
    const phaseDuration = getPhaseDuration();
    
    // SVG progress ring - FORA do círculo com gap de 8px
    const circleSize = 256; // w-64 = 256px
    const ringGap = 12; // gap entre círculo e anel
    const ringStrokeWidth = 6; // espessura do anel luminoso
    const ringSize = circleSize + (ringGap * 2) + ringStrokeWidth; // tamanho total do SVG
    const ringRadius = (circleSize / 2) + ringGap; // raio do anel
    const circumference = ringRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progressPercent / 100) * circumference;
    
    return (
      <div className="min-h-screen bg-background flex flex-col p-4">
        {/* Timer and Stats - Card Premium no Topo (como no backup original) */}
        <div className="w-full max-w-md mx-auto mb-4">
          <div className="premium-card p-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold">{timeElapsed}s</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold" />
                <span className="text-gold font-bold">{points} pts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Círculo de Respiração com Anel Luminoso EXTERNO */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Anel Luminoso SVG - FORA do círculo */}
            <svg 
              className="absolute pointer-events-none"
              width={ringSize * scaleValue} 
              height={ringSize * scaleValue} 
              viewBox={`0 0 ${ringSize} ${ringSize}`}
              style={{ 
                filter: `drop-shadow(0 0 12px ${getRingColor()}) drop-shadow(0 0 24px ${getRingColor()}80)`,
                transition: `all ${phaseDuration}s cubic-bezier(0.4, 0, 0.2, 1)`
              }}
            >
              {/* Anel de fundo sutil */}
              <circle
                cx={ringSize / 2}
                cy={ringSize / 2}
                r={ringRadius}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={ringStrokeWidth}
              />
              {/* Anel de progresso luminoso - sentido horário */}
              <circle
                cx={ringSize / 2}
                cy={ringSize / 2}
                r={ringRadius}
                fill="none"
                stroke={getRingColor()}
                strokeWidth={ringStrokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ 
                  transition: `stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.5s ease`,
                  transform: 'rotate(-90deg)',
                  transformOrigin: 'center'
                }}
              />
            </svg>
            
            {/* Círculo Principal - animação suave com ease-in-out */}
            <div 
              className={`w-64 h-64 rounded-full bg-gradient-to-br ${getPhaseColor()} flex items-center justify-center shadow-2xl`}
              style={{ 
                transform: `scale(${scaleValue})`,
                transition: `transform ${phaseDuration}s cubic-bezier(0.4, 0, 0.2, 1)`
              }}
            >
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-2">{getPhaseText()}</div>
                <div className="text-6xl font-bold">{timer}</div>
                {/* Mostrar número de respirações após primeiro ciclo */}
                {breathCount > 0 && (
                  <div className="text-sm mt-2 opacity-80">
                    {breathCount} {breathCount === 1 ? 'respiração' : 'respirações'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Espaço SEMPRE reservado para não mudar posição do círculo */}
        <div className="w-full max-w-md mx-auto pb-8" style={{ minHeight: '140px' }}>
          <div className="space-y-3">
            {/* BOTÃO PRINCIPAL - Verde, NO TOPO - só aparece após tempo mínimo */}
            {timeElapsed >= MINIMUM_TIME ? (
              <button
                onClick={handleComplete}
                className="w-full bg-gradient-to-r from-primary via-success to-primary text-white px-6 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease infinite',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}
              >
                <Trophy className="w-5 h-5" />
                Concluir e Coletar: +{points} XP
              </button>
            ) : (
              <div className="w-full h-14" /> /* Espaço reservado para o botão */
            )}
            
            {/* BOTÃO SECUNDÁRIO - Cinza discreto, EMBAIXO - só aparece após showSkip */}
            {showSkip ? (
              <button
                onClick={handleSkip}
                className="w-full bg-muted/30 backdrop-blur-sm px-6 py-3 rounded-2xl font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2"
              >
                <SkipForward className="w-4 h-4" />
                Pular Desafio (Sem Recompensas)
              </button>
            ) : (
              <div className="w-full h-12" /> /* Espaço reservado para o botão */
            )}
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'completed') {
    const finalPoints = points;
    const bonusPoints = Math.floor(points / 2);
    
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)'
      }}>
        <div className="max-w-md mx-auto text-center">
          {/* Ícone Verde Circular */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center animate-bounce-in" style={{
            background: '#22C55E'
          }}>
            <Trophy className="w-10 h-10 text-white" />
          </div>
          
          {/* Título */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Desafio Concluído!
          </h2>
          
          {/* Mensagem */}
          <p className="text-white/80 text-base mb-8 leading-relaxed">
            Você demonstrou uma resistência incrível! Sua força de vontade está se fortalecendo.
          </p>
          
          {/* Card de Resultados */}
          <div className="rounded-3xl p-6 mb-8" style={{
            background: 'rgba(79, 70, 229, 0.4)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="text-2xl font-bold text-white mb-2">Nível Final: {Math.floor(breathCount / 2) + 1}</div>
            <div className="text-xl mb-4" style={{ color: '#a78bfa' }}>Pontos Ganhos: {finalPoints}</div>
            {bonusPoints > 0 && (
              <div className="text-lg font-semibold flex items-center justify-center gap-2" style={{ color: '#22C55E' }}>
                <Sparkles className="w-5 h-5" />
                Bônus de Conclusão: +{bonusPoints} pontos!
              </div>
            )}
          </div>
          
          {/* Botão CTA */}
          <button
            onClick={onNext}
            className="w-full rounded-2xl font-semibold py-4 px-6 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            style={{
              background: '#22C55E',
              color: 'white'
            }}
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

export default Step6BreathingChallenge;