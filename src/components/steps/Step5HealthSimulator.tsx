import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Heart, Wind, Activity, Clock, TrendingUp, Sparkles } from 'lucide-react';

interface Step5HealthSimulatorProps {
  onNext: () => void;
  onBack: () => void;
  userData: any;
  onUpdateUserData: (data: any) => void;
}

export default function Step5HealthSimulator({ onNext, onBack, userData, onUpdateUserData }: Step5HealthSimulatorProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'20min' | '12h' | '24h' | '48h' | '1week' | '1month' | '1year'>('20min');

  const healthBenefits = {
    '20min': {
      title: '20 Minutos',
      description: 'Frequência cardíaca e pressão arterial começam a normalizar',
      heartRate: 15,
      lungFunction: 5,
      circulation: 10,
      icon: Clock,
      color: 'from-blue-400 to-cyan-500'
    },
    '12h': {
      title: '12 Horas',
      description: 'Níveis de monóxido de carbono no sangue voltam ao normal',
      heartRate: 25,
      lungFunction: 15,
      circulation: 20,
      icon: Heart,
      color: 'from-green-400 to-emerald-500'
    },
    '24h': {
      title: '24 Horas',
      description: 'Risco de ataque cardíaco já começa a diminuir',
      heartRate: 35,
      lungFunction: 25,
      circulation: 30,
      icon: Activity,
      color: 'from-purple-400 to-pink-500'
    },
    '48h': {
      title: '48 Horas',
      description: 'Terminações nervosas começam a se regenerar, paladar e olfato melhoram',
      heartRate: 45,
      lungFunction: 35,
      circulation: 40,
      icon: Sparkles,
      color: 'from-orange-400 to-red-500'
    },
    '1week': {
      title: '1 Semana',
      description: 'Circulação melhora significativamente, exercícios ficam mais fáceis',
      heartRate: 60,
      lungFunction: 50,
      circulation: 55,
      icon: TrendingUp,
      color: 'from-teal-400 to-blue-500'
    },
    '1month': {
      title: '1 Mês',
      description: 'Função pulmonar melhora até 30%, tosse e falta de ar diminuem',
      heartRate: 75,
      lungFunction: 70,
      circulation: 70,
      icon: Wind,
      color: 'from-green-400 to-teal-500'
    },
    '1year': {
      title: '1 Ano',
      description: 'Risco de doença cardíaca reduz pela metade',
      heartRate: 90,
      lungFunction: 85,
      circulation: 90,
      icon: Heart,
      color: 'from-emerald-400 to-green-500'
    }
  };

  const currentBenefit = healthBenefits[selectedTimeframe];

  useEffect(() => {
    if (isSimulating) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= 100) {
            setIsSimulating(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isSimulating]);

  const startSimulation = () => {
    setCurrentTime(0);
    setIsSimulating(true);
  };

  const handleNext = () => {
    onUpdateUserData({
      healthSimulationCompleted: true,
      selectedHealthTimeframe: selectedTimeframe,
      totalPoints: (userData.totalPoints || 0) + 150
    });
    onNext();
  };

  const IconComponent = currentBenefit.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl p-8 shadow-2xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${currentBenefit.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <IconComponent className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white">
              Simulador de Recuperação
            </h2>
            <p className="text-white/80 text-lg">
              Veja como seu corpo se recupera quando você para de fumar
            </p>
          </div>

          {/* Timeline Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {Object.entries(healthBenefits).map(([key, benefit]) => {
              const BenefitIcon = benefit.icon;
              return (
                <Button
                  key={key}
                  onClick={() => setSelectedTimeframe(key as any)}
                  variant={selectedTimeframe === key ? "default" : "outline"}
                  className={`p-3 rounded-2xl border-white/20 transition-all ${
                    selectedTimeframe === key
                      ? `bg-gradient-to-br ${benefit.color} text-white shadow-lg`
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <BenefitIcon className="w-4 h-4" />
                    <span className="text-xs font-medium">{benefit.title}</span>
                  </div>
                </Button>
              );
            })}
          </div>

          {/* Current Benefit Display */}
          <Card className={`bg-gradient-to-br ${currentBenefit.color}/20 border-white/20 rounded-2xl p-6`}>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">
                {currentBenefit.title} sem fumar
              </h3>
              <p className="text-white/90 text-lg">
                {currentBenefit.description}
              </p>
            </div>
          </Card>

          {/* Health Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-400" />
                  <span className="text-white font-semibold">Saúde Cardíaca</span>
                </div>
                <Progress 
                  value={isSimulating ? (currentTime * currentBenefit.heartRate / 100) : currentBenefit.heartRate} 
                  className="h-3 bg-white/10" 
                />
                <p className="text-white/70 text-sm">
                  {Math.round(isSimulating ? (currentTime * currentBenefit.heartRate / 100) : currentBenefit.heartRate)}% de melhoria
                </p>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Wind className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-semibold">Função Pulmonar</span>
                </div>
                <Progress 
                  value={isSimulating ? (currentTime * currentBenefit.lungFunction / 100) : currentBenefit.lungFunction} 
                  className="h-3 bg-white/10" 
                />
                <p className="text-white/70 text-sm">
                  {Math.round(isSimulating ? (currentTime * currentBenefit.lungFunction / 100) : currentBenefit.lungFunction)}% de melhoria
                </p>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-green-400" />
                  <span className="text-white font-semibold">Circulação</span>
                </div>
                <Progress 
                  value={isSimulating ? (currentTime * currentBenefit.circulation / 100) : currentBenefit.circulation} 
                  className="h-3 bg-white/10" 
                />
                <p className="text-white/70 text-sm">
                  {Math.round(isSimulating ? (currentTime * currentBenefit.circulation / 100) : currentBenefit.circulation)}% de melhoria
                </p>
              </div>
            </Card>
          </div>

          {/* Simulation Button */}
          <div className="text-center">
            <Button
              onClick={startSimulation}
              disabled={isSimulating}
              className={`px-8 py-4 bg-gradient-to-r ${currentBenefit.color} hover:opacity-90 text-white rounded-2xl shadow-lg text-lg font-semibold`}
            >
              {isSimulating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Simulando Recuperação...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Ver Recuperação em Ação
                </>
              )}
            </Button>
          </div>

          {/* Motivational Message */}
          {currentTime === 100 && (
            <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30 rounded-2xl p-6 animate-pulse">
              <div className="text-center space-y-3">
                <Sparkles className="w-8 h-8 text-green-400 mx-auto" />
                <h3 className="text-xl font-bold text-green-300">
                  Incrível! Seu corpo já está se recuperando!
                </h3>
                <p className="text-white/90">
                  Esta é apenas uma pequena amostra dos benefícios que você vai sentir.
                </p>
              </div>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={onBack}
              variant="outline"
              className="px-8 py-3 rounded-2xl border-white/20 text-white/70 hover:bg-white/10"
            >
              Voltar
            </Button>
            <Button
              onClick={handleNext}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl shadow-lg"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Continuar (+150 pontos)
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}