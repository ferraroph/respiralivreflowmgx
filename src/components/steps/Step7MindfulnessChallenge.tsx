import React, { useState, useEffect } from 'react';
import { UserProfile } from '@/types/funnel';
import { Brain, Eye, Ear, Hand, Trophy, Zap, Sparkles, ChevronRight, Play, CheckCircle2 } from 'lucide-react';
import { StepWrapper } from '../StepWrapper';

interface Step7MindfulnessChallengeProps {
  userProfile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onNext: () => void;
  onBack?: () => void;
  devInitialState?: { phase?: 'instructions' | 'challenge' | 'completed' };
}

const Step7MindfulnessChallenge: React.FC<Step7MindfulnessChallengeProps> = ({ 
  userProfile, 
  onUpdateProfile, 
  onNext, 
  onBack, 
  devInitialState 
}) => {
  const [phase, setPhase] = useState<'instructions' | 'challenge' | 'completed'>(devInitialState?.phase || 'instructions');
  const [points, setPoints] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [lastAction, setLastAction] = useState<string | null>(null);
  
  // PRD Req: Minimum 9 points to complete
  const MIN_POINTS_TO_COMPLETE = 9;
  const isComplete = points >= MIN_POINTS_TO_COMPLETE;

  // Colors based on PRD: Turquoise/Teal/Cyan
  const THEME_G_FROM = 'from-teal-500';
  const THEME_G_TO = 'to-cyan-500';
  const THEME_TEXT = 'text-cyan-400';
  const THEME_BG_ACCENT = 'bg-cyan-500/10';
  const THEME_BORDER = 'border-cyan-500/30';

  const handleStart = () => {
    setPhase('challenge');
    setPoints(0);
    setClickCount(0);
  };

  const handleMainAction = () => {
    addPoints(3, 'main'); // Botão Central = +3 (Média)
  };

  const handleSenseAction = (type: 'ver' | 'ouvir' | 'sentir') => {
    let pts = 0;
    switch(type) {
      case 'ver': pts = 1; break;
      case 'ouvir': pts = 3; break;
      case 'sentir': pts = 5; break;
    }
    addPoints(pts, type);
  };

  const addPoints = (amount: number, type: string) => {
    setPoints(prev => prev + amount);
    setClickCount(prev => prev + 1);
    setLastAction(type);
    
    // Haptic feedback if available (navigator.vibrate)
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleComplete = () => {
    setPhase('completed');
  };

  const handleFinalize = () => {
    // Calculate final rewards
    // PRD MVP: +150 XP, +50 Coins (Base) + Points derived
    const baseXP = 150;
    const baseCoins = 50;
    
    // Add points bonus
    const totalXP = baseXP + (points * 2); 
    const totalCoins = baseCoins + points;

    onUpdateProfile({
      xp: userProfile.xp + totalXP,
      respirCoins: userProfile.respirCoins + totalCoins,
      badges: isComplete ? [...(userProfile.badges || []), 'Mente Consciente'] : userProfile.badges
    });
    
    onNext();
  };

  // --- PHASE: INSTRUCTIONS ---
  if (phase === 'instructions') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="relative mx-auto mb-6 w-24 h-24">
                 <div className={`absolute inset-0 bg-gradient-to-br ${THEME_G_FROM} ${THEME_G_TO} rounded-full blur-lg opacity-50 animate-pulse`} />
                 <div className={`relative w-full h-full bg-gradient-to-br ${THEME_G_FROM} ${THEME_G_TO} rounded-full flex items-center justify-center shadow-xl`}>
                    <Brain className="w-12 h-12 text-white" />
                 </div>
                 <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                   Nível 2
                 </div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-2">Observação Consciente</h2>
              <p className="text-white/60 text-sm">
                Exercite sua presença através dos sentidos
              </p>
            </div>

            {/* How it works */}
            <div className={`space-y-4 mb-8 ${THEME_BG_ACCENT} p-6 rounded-2xl border ${THEME_BORDER}`}>
              <div className="flex items-center gap-2 mb-4">
                <Zap className={`w-5 h-5 ${THEME_TEXT}`} />
                <h3 className="text-white font-bold">Como Funciona</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className={`w-8 h-8 rounded-full ${THEME_BG_ACCENT} flex items-center justify-center shrink-0 border ${THEME_BORDER}`}>
                    <span className={`font-bold ${THEME_TEXT}`}>1</span>
                  </div>
                  <p className="text-white/80 text-sm">Observe 5 coisas à sua volta (visuais, sonoras ou sensações).</p>
                </div>
                <div className="flex gap-4">
                  <div className={`w-8 h-8 rounded-full ${THEME_BG_ACCENT} flex items-center justify-center shrink-0 border ${THEME_BORDER}`}>
                    <span className={`font-bold ${THEME_TEXT}`}>2</span>
                  </div>
                  <p className="text-white/80 text-sm">Registre cada observação usando os botões na tela.</p>
                </div>
                <div className="flex gap-4">
                  <div className={`w-8 h-8 rounded-full ${THEME_BG_ACCENT} flex items-center justify-center shrink-0 border ${THEME_BORDER}`}>
                    <span className={`font-bold ${THEME_TEXT}`}>3</span>
                  </div>
                  <p className="text-white/80 text-sm">Acumule pontos para completar o desafio.</p>
                </div>
              </div>
            </div>

            {/* Rewards */}
            <div className="flex items-center justify-between bg-black/30 p-4 rounded-xl border border-white/5 mb-8">
              <span className="text-white/60 text-sm">Recompensas:</span>
              <div className="flex gap-4">
                <span className="text-green-400 font-bold text-sm">+150 XP</span>
                <span className="text-yellow-400 font-bold text-sm">+50 Coins</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleStart}
              className={`w-full bg-gradient-to-r ${THEME_G_FROM} ${THEME_G_TO} hover:brightness-110 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2`}
            >
              <Play className="w-5 h-5 fill-current" />
              Começar Desafio
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- PHASE: CHALLENGE (EXECUTION) ---
  if (phase === 'challenge') {
    return (
      <div className="min-h-screen bg-black flex flex-col p-6 relative overflow-hidden">
        {/* Background Ambient Effect */}
        <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${THEME_G_FROM} to-transparent opacity-10 pointer-events-none`} />

        {/* Top Bar: Score */}
        <div className="relative z-10 flex flex-col items-center mt-8 mb-12">
          <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">Pontuação</h3>
          <div className="flex items-end gap-2">
             <span className={`text-6xl font-bold transition-all duration-300 ${isComplete ? 'text-green-400 scale-110' : 'text-white'}`}>
               {points}
             </span>
             <span className="text-white/40 text-xl mb-2">/ {MIN_POINTS_TO_COMPLETE}</span>
          </div>
          {isComplete && (
            <span className="text-green-400 text-sm font-medium mt-2 animate-bounce">
              Meta atingida! Continue ou conclua.
            </span>
          )}
        </div>

        {/* Center: Main Button */}
        <div className="flex-1 flex items-center justify-center mb-12">
          <button 
            onClick={handleMainAction}
            className={`
              relative w-64 h-64 rounded-full group focus:outline-none
              transition-transform duration-100 active:scale-95
            `}
          >
            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${THEME_G_FROM} ${THEME_G_TO} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
            
            {/* Button Body */}
            <div className={`
              absolute inset-4 rounded-full bg-gradient-to-br ${THEME_G_FROM} ${THEME_G_TO} p-1
              shadow-2xl shadow-cyan-900/50
            `}>
              <div className="w-full h-full bg-black/90 rounded-full flex flex-col items-center justify-center border border-white/10 backdrop-blur-sm">
                <Brain className={`w-12 h-12 ${THEME_TEXT} mb-2 group-hover:scale-110 transition-transform`} />
                <span className="text-white font-bold text-lg">Notei 5 Coisas</span>
                <span className={`text-xs ${THEME_TEXT} mt-1 opacity-60`}>+3 pontos</span>
              </div>
            </div>
            
            {/* Ripple Effect (simulated with CSS for now) */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/30 scale-110 opacity-0 group-active:scale-125 group-active:opacity-100 transition-all duration-300" />
          </button>
        </div>

        {/* Bottom: Sensory Buttons */}
        <div className="grid grid-cols-3 gap-4 mb-8">
           {/* Ver */}
           <button 
             onClick={() => handleSenseAction('ver')}
             className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all"
           >
             <Eye className="w-6 h-6 text-blue-400" />
             <span className="text-white text-xs font-bold">Ver</span>
             <span className="text-white/40 text-xs">+1 pt</span>
           </button>

           {/* Ouvir */}
           <button 
             onClick={() => handleSenseAction('ouvir')}
             className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all"
           >
             <Ear className="w-6 h-6 text-purple-400" />
             <span className="text-white text-xs font-bold">Ouvir</span>
             <span className="text-white/40 text-xs">+3 pts</span>
           </button>

           {/* Sentir */}
           <button 
             onClick={() => handleSenseAction('sentir')}
             className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all"
           >
             <div className="rotate-45">
               <Hand className="w-6 h-6 text-pink-400 -rotate-45" />
             </div>
             <span className="text-white text-xs font-bold">Sentir</span>
             <span className="text-white/40 text-xs">+5 pts</span>
           </button>
        </div>

        {/* Footer: Complete Button */}
        <div className="h-16 flex items-center justify-center">
          {isComplete ? (
            <button
              onClick={handleComplete}
              className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-6 rounded-xl animate-up-slide shadow-lg shadow-green-900/40 flex items-center justify-center gap-2"
            >
              <Trophy className="w-5 h-5 text-black" />
              Concluir Desafio
            </button>
          ) : (
            <p className="text-white/30 text-xs text-center animate-pulse">
              Atinja {MIN_POINTS_TO_COMPLETE} pontos para liberar
            </p>
          )}
        </div>
      </div>
    );
  }

  // --- PHASE: COMPLETED ---
  if (phase === 'completed') {
    const finalPoints = points;
    // Calculation similar to Reference
    const bonusXP = finalPoints * 2;
    const bonusCoins = finalPoints;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-500 flex items-center justify-center shadow-2xl shadow-green-500/20 animate-bounce-in">
            <Trophy className="w-12 h-12 text-black" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Desafio Concluído!</h2>
          <p className="text-white/80 text-lg mb-8">
            Você exercitou sua presença! Sua consciência está mais afiada.
          </p>
          
          {/* Results Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-8">
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <span className="text-white/60 text-sm block mb-1">Pontos</span>
                <span className={`text-3xl font-bold ${THEME_TEXT}`}>{finalPoints}</span>
              </div>
              <div>
                <span className="text-white/60 text-sm block mb-1">Bônus</span>
                <span className="text-3xl font-bold text-yellow-400">MAX</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-black/20 p-4 rounded-xl">
               <Sparkles className="w-5 h-5 text-yellow-400" />
               <span className="text-green-400 font-bold text-sm">+ {150 + bonusXP} XP</span>
               <span className="text-white/20">|</span>
               <span className="text-yellow-400 font-bold text-sm">+ {50 + bonusCoins} Coins</span>
            </div>
          </div>
          
          <button
            onClick={handleFinalize}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 hover:scale-105"
          >
            <span>Coletar Recompensas</span>
            <CheckCircle2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Step7MindfulnessChallenge;