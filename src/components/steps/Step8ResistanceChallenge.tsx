import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Target, Zap, Clock, Award, Sparkles } from 'lucide-react';
import { StepWrapper } from '../StepWrapper';

interface Step8ResistanceChallengeProps {
  onNext: () => void;
  onBack?: () => void;
  onUpdateScore: (points: number) => void;
  devInitialState?: { phase?: 'instructions' | 'challenge' | 'completed' };
}

const Step8ResistanceChallenge: React.FC<Step8ResistanceChallengeProps> = ({ onNext, onBack, onUpdateScore, devInitialState }) => {
  const [currentPhase, setCurrentPhase] = useState<'instructions' | 'challenge' | 'completed'>(devInitialState?.phase || 'instructions');
  const [timeLeft, setTimeLeft] = useState(devInitialState?.phase === 'completed' ? 0 : 30);
  const [resistanceLevel, setResistanceLevel] = useState(devInitialState?.phase === 'completed' ? 100 : 0);
  const [points, setPoints] = useState(devInitialState?.phase === 'completed' ? 200 : 0);
  const [isActive, setIsActive] = useState(devInitialState?.phase === 'challenge');
  const [showBonus, setShowBonus] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            setCurrentPhase('completed');
            setShowBonus(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startChallenge = () => {
    setCurrentPhase('challenge');
    setIsActive(true);
    setTimeLeft(30);
  };

  const handleResistanceClick = () => {
    if (isActive) {
      const newLevel = Math.min(resistanceLevel + 1, 10);
      setResistanceLevel(newLevel);
      const earnedPoints = newLevel * 10;
      setPoints(earnedPoints);
    }
  };

  const skipChallenge = () => {
    setCurrentPhase('completed');
    onNext();
  };

  const completeAndCollect = () => {
    onUpdateScore(points + (showBonus ? 100 : 0));
    onNext();
  };

  const getTimerColor = () => {
    if (timeLeft <= 5) return 'text-primary';
    if (timeLeft <= 10) return 'text-gold';
    return 'text-destructive';
  };

  if (currentPhase === 'instructions') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="premium-card p-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
                <Shield className="w-12 h-12 text-background" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Desafio de Resistência</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Teste sua força de vontade! Clique no botão de resistência o máximo de vezes possível em 30 segundos.
                Cada clique representa sua determinação para vencer o vício.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-foreground/90">
                <Target className="w-5 h-5 text-primary" />
                <span>Meta: 50+ cliques para bônus máximo</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/90">
                <Zap className="w-5 h-5 text-gold" />
                <span>Cada clique = 10 pontos de resistência</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/90">
                <Clock className="w-5 h-5 text-primary" />
                <span>Tempo limite: 30 segundos</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={startChallenge}
                className="flex-1 btn-premium flex items-center justify-center space-x-2"
              >
                <Shield className="w-5 h-5" />
                <span>Iniciar Desafio</span>
              </button>
              <button
                onClick={skipChallenge}
                className="bg-white/5 hover:bg-white/10 text-foreground font-semibold py-4 px-6 rounded-2xl transition-all duration-300 border border-white/10"
              >
                Pular Desafio
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentPhase === 'challenge') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="premium-card p-8 text-center">
            <div className={`text-6xl font-bold mb-4 ${getTimerColor()} transition-colors duration-300`}>
              {timeLeft}s
            </div>
            
            <div className="mb-8">
              <div className="text-2xl font-bold text-foreground mb-2">Nível de Resistência: {resistanceLevel}</div>
              <div className="text-xl text-primary">Pontos: {points}</div>
            </div>

            <button
              onClick={handleResistanceClick}
              disabled={!isActive}
              className="w-48 h-48 bg-gradient-to-br from-destructive to-primary hover:from-destructive hover:to-primary-glow text-white font-bold text-2xl rounded-full transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-110 active:scale-95 mx-auto mb-8 flex items-center justify-center border-4 border-white/10"
            >
              <Shield className="w-16 h-16" />
            </button>

            <div className="w-full bg-white/5 rounded-full h-4 mb-4 border border-white/10">
              <div 
                className="bg-gradient-to-r from-primary to-primary-glow h-4 rounded-full transition-all duration-300 shadow-glow-primary"
                style={{ width: `${(resistanceLevel / 10) * 100}%` }}
              ></div>
            </div>

            <p className="text-muted-foreground">Clique no escudo para aumentar sua resistência!</p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPhase === 'completed') {
    const finalPoints = points;
    const bonusPoints = showBonus ? 100 : 0;
    
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-md mx-auto text-center">
          {/* Ícone Verde Circular */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center animate-bounce-in bg-primary shadow-glow-primary">
            <Award className="w-10 h-10 text-background" />
          </div>
          
          {/* Título */}
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Desafio Concluído!
          </h2>
          
          {/* Mensagem */}
          <p className="text-muted-foreground text-base mb-8 leading-relaxed">
            Você demonstrou uma resistência incrível! Sua força de vontade está se fortalecendo.
          </p>
          
          {/* Card de Resultados */}
          <div className="premium-card p-6 mb-8">
            <div className="text-2xl font-bold text-foreground mb-2">Nível Final: {resistanceLevel}</div>
            <div className="text-xl mb-4 text-primary">Pontos Ganhos: {finalPoints}</div>
            {showBonus && (
              <div className="text-lg font-semibold flex items-center justify-center gap-2 text-gold">
                <Sparkles className="w-5 h-5" />
                Bônus de Conclusão: +{bonusPoints} pontos!
              </div>
            )}
          </div>
          
          {/* Botão CTA */}
          <button
            onClick={completeAndCollect}
            className="w-full btn-premium flex items-center justify-center gap-2"
          >
            <Award className="w-5 h-5" />
            <span>Concluir e Coletar Pontos</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }
  
  return null;
};

export default Step8ResistanceChallenge;