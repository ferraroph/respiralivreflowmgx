import React from 'react';
import { Play, RotateCcw, Clock, Trophy, User } from 'lucide-react';
import { UserProgress } from '../lib/supabase';

interface CheckpointModalProps {
  isOpen: boolean;
  progress: UserProgress;
  onContinue: () => void;
  onRestart: () => void;
}

const CheckpointModal: React.FC<CheckpointModalProps> = ({
  isOpen,
  progress,
  onContinue,
  onRestart
}) => {
  if (!isOpen) return null;

  const getStepName = (step: number) => {
    const stepNames = {
      1: 'Criação de Personagem',
      2: 'Verificação da Realidade',
      3: 'Seleção de Objetivos',
      4: 'Calculadora de Economia',
      5: 'Simulador de Saúde',
      6: 'Desafio de Respiração',
      7: 'Desafio de Mindfulness',
      8: 'Desafio de Resistência',
      9: 'Desafio de Foco',
      10: 'Desafio Final (Boss)',
      11: 'Oferta Final'
    };
    return stepNames[step as keyof typeof stepNames] || `Etapa ${step}`;
  };

  const getProgressPercentage = () => {
    return Math.round((progress.current_step / 11) * 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred background */}
      <div 
        className="absolute inset-0 backdrop-blur-md bg-black/30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
          `,
          filter: 'blur(1px) contrast(1.1) brightness(0.9)'
        }}
      />
      
      {/* Modal content */}
      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full mx-4 transform animate-in fade-in-0 zoom-in-95 duration-300">
        <div className="text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Clock className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Bem-vindo de volta!
          </h2>

          {/* Progress info */}
          <div className="bg-white/10 rounded-2xl p-6 mb-6 border border-white/10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <User className="w-5 h-5 text-blue-400" />
              <span className="text-white/90 font-medium">Seu Progresso</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">Etapa Atual:</span>
                <span className="text-white font-semibold">{getStepName(progress.current_step)}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">Pontuação:</span>
                <div className="flex items-center space-x-1">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-semibold">{progress.total_score}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Progresso:</span>
                  <span className="text-white font-semibold">{getProgressPercentage()}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${getProgressPercentage()}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm mb-8 leading-relaxed">
            Você pode continuar de onde parou ou recomeçar sua jornada do início. 
            O que você gostaria de fazer?
          </p>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={onContinue}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Continuar Jornada</span>
            </button>

            <button
              onClick={onRestart}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center space-x-2"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Recomeçar do Início</span>
            </button>
          </div>

          {/* Fine print */}
          <p className="text-white/50 text-xs mt-4">
            Ao recomeçar, seu progresso atual será resetado
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckpointModal;