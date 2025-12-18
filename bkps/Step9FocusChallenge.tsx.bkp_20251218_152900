import React, { useState, useEffect } from 'react';
import { ChevronRight, Eye, Target, Zap, Clock, Award, Circle, Sparkles } from 'lucide-react';
import { StepWrapper } from '../StepWrapper';

interface Step9FocusChallengeProps {
  onNext: () => void;
  onBack?: () => void;
  onUpdateScore: (points: number) => void;
  devInitialState?: { phase?: 'instructions' | 'challenge' | 'completed' };
}

const Step9FocusChallenge: React.FC<Step9FocusChallengeProps> = ({ onNext, onBack, onUpdateScore, devInitialState }) => {
  const [currentPhase, setCurrentPhase] = useState<'instructions' | 'challenge' | 'completed'>(devInitialState?.phase || 'instructions');
  const [timeLeft, setTimeLeft] = useState(devInitialState?.phase === 'completed' ? 0 : 45);
  const [focusLevel, setFocusLevel] = useState(devInitialState?.phase === 'completed' ? 100 : 0);
  const [points, setPoints] = useState(devInitialState?.phase === 'completed' ? 250 : 0);
  const [isActive, setIsActive] = useState(devInitialState?.phase === 'challenge');
  const [showBonus, setShowBonus] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [hits, setHits] = useState(0);

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

  useEffect(() => {
    let targetInterval: NodeJS.Timeout;
    if (isActive) {
      targetInterval = setInterval(() => {
        setTargetPosition({
          x: Math.random() * 80 + 10,
          y: Math.random() * 60 + 20
        });
      }, 2000);
    }
    return () => clearInterval(targetInterval);
  }, [isActive]);

  const startChallenge = () => {
    setCurrentPhase('challenge');
    setIsActive(true);
    setTimeLeft(45);
    setHits(0);
    setFocusLevel(0);
    setPoints(0);
  };

  const handleTargetClick = () => {
    if (isActive) {
      const newHits = hits + 1;
      setHits(newHits);
      const newLevel = Math.min(Math.floor(newHits / 3), 10);
      setFocusLevel(newLevel);
      const earnedPoints = newHits * 15;
      setPoints(earnedPoints);
      
      // Move target immediately after hit
      setTargetPosition({
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20
      });
    }
  };

  const skipChallenge = () => {
    setCurrentPhase('completed');
    onNext();
  };

  const completeAndCollect = () => {
    onUpdateScore(points + (showBonus ? 150 : 0));
    onNext();
  };

  const getTimerColor = () => {
    if (timeLeft <= 5) return 'text-green-400';
    if (timeLeft <= 10) return 'text-yellow-400';
    return 'text-red-400';
  };

  if (currentPhase === 'instructions') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Desafio de Foco</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Treine sua concentração! Clique nos alvos que aparecem na tela o mais rápido possível.
                Cada acerto fortalece seu foco mental contra distrações.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-white/90">
                <Target className="w-5 h-5 text-blue-400" />
                <span>Meta: 20+ acertos para bônus máximo</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Cada acerto = 15 pontos de foco</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>Tempo limite: 45 segundos</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={startChallenge}
                className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>Iniciar Desafio</span>
              </button>
              <button
                onClick={skipChallenge}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 border border-white/30"
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          {/* Header with stats */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 mb-6 border border-white/20 shadow-2xl">
            <div className="flex justify-between items-center">
              <div className={`text-4xl font-bold ${getTimerColor()} transition-colors duration-300`}>
                {timeLeft}s
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">Nível: {focusLevel}</div>
                <div className="text-lg text-blue-300">Acertos: {hits}</div>
              </div>
              <div className="text-xl text-cyan-300 font-semibold">
                {points} pts
              </div>
            </div>
          </div>

          {/* Game area */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden" style={{ height: '500px' }}>
            <button
              onClick={handleTargetClick}
              className="absolute w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 flex items-center justify-center"
              style={{
                left: `${targetPosition.x}%`,
                top: `${targetPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Circle className="w-8 h-8 text-white" />
            </button>

            {/* Focus indicator */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(focusLevel / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-white/80">Clique nos alvos vermelhos para aumentar seu foco!</p>
          </div>
        </div>
      </div>
    );
  }

  if (currentPhase === 'completed') {
    const finalPoints = points;
    const bonusPoints = showBonus ? 150 : 0;
    
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)'
      }}>
        <div className="max-w-md mx-auto text-center">
          {/* Ícone Verde Circular */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center animate-bounce-in" style={{
            background: '#22C55E'
          }}>
            <Award className="w-10 h-10 text-white" />
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
            <div className="text-2xl font-bold text-white mb-2">Nível Final: {focusLevel}</div>
            <div className="text-xl mb-4" style={{ color: '#a78bfa' }}>Pontos Ganhos: {finalPoints}</div>
            {showBonus && (
              <div className="text-lg font-semibold flex items-center justify-center gap-2" style={{ color: '#22C55E' }}>
                <Sparkles className="w-5 h-5" />
                Bônus de Conclusão: +{bonusPoints} pontos!
              </div>
            )}
          </div>
          
          {/* Botão CTA */}
          <button
            onClick={completeAndCollect}
            className="w-full rounded-2xl font-semibold py-4 px-6 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            style={{
              background: '#22C55E',
              color: 'white'
            }}
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

export default Step9FocusChallenge;