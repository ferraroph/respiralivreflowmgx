import React, { useState } from 'react';
import { ChevronRight, Calculator, DollarSign, Calendar, TrendingUp, Coins } from 'lucide-react';

interface Step4CalculatorProps {
  onNext: () => void;
  onUpdateScore: (points: number) => void;
  onUpdateProgress: (data: any) => void;
  characterData: any;
}

const Step4Calculator: React.FC<Step4CalculatorProps> = ({ 
  onNext, 
  onUpdateScore, 
  onUpdateProgress,
  characterData 
}) => {
  const [cigarettesPerDay, setCigarettesPerDay] = useState(characterData.cigarettesPerDay || 20);
  const [pricePerPack, setPricePerPack] = useState(15);
  const [yearsSmoked, setYearsSmoked] = useState(characterData.yearsSmoked || 10);
  const [showResults, setShowResults] = useState(false);

  const cigarettesPerPack = 20;
  const dailyCost = (cigarettesPerDay / cigarettesPerPack) * pricePerPack;
  const monthlyCost = dailyCost * 30;
  const yearlyCost = dailyCost * 365;
  const lifetimeCost = yearlyCost * yearsSmoked;

  const handleCalculate = () => {
    setShowResults(true);
    onUpdateScore(50);
    onUpdateProgress({
      calculatorData: {
        cigarettesPerDay,
        pricePerPack,
        yearsSmoked,
        dailyCost,
        monthlyCost,
        yearlyCost,
        lifetimeCost
      }
    });
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Calculator className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Calculadora de Economia</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Descubra quanto dinheiro você está gastando com cigarros e quanto pode economizar
            </p>
          </div>

          {!showResults ? (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <label className="block text-white font-semibold mb-3">
                    Cigarros por dia
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="60"
                      value={cigarettesPerDay}
                      onChange={(e) => setCigarettesPerDay(Number(e.target.value))}
                      className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-white/60 text-sm mt-2">
                      <span>1</span>
                      <span className="text-white font-bold text-lg">{cigarettesPerDay}</span>
                      <span>60</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <label className="block text-white font-semibold mb-3">
                    Preço por maço (R$)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="5"
                      max="30"
                      value={pricePerPack}
                      onChange={(e) => setPricePerPack(Number(e.target.value))}
                      className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-white/60 text-sm mt-2">
                      <span>R$ 5</span>
                      <span className="text-white font-bold text-lg">R$ {pricePerPack}</span>
                      <span>R$ 30</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <label className="block text-white font-semibold mb-3">
                    Anos fumando
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={yearsSmoked}
                      onChange={(e) => setYearsSmoked(Number(e.target.value))}
                      className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-white/60 text-sm mt-2">
                      <span>1 ano</span>
                      <span className="text-white font-bold text-lg">{yearsSmoked} anos</span>
                      <span>50 anos</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2 text-green-400" />
                  Prévia dos Gastos
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span className="text-white/80">Por dia:</span>
                    <span className="text-white font-bold">R$ {dailyCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span className="text-white/80">Por mês:</span>
                    <span className="text-white font-bold">R$ {monthlyCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span className="text-white/80">Por ano:</span>
                    <span className="text-white font-bold">R$ {yearlyCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-400/30">
                    <span className="text-white/80">Total gasto:</span>
                    <span className="text-red-300 font-bold text-lg">R$ {lifetimeCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30">
                  <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">R$ {monthlyCost.toFixed(2)}</div>
                  <div className="text-blue-300">Gasto Mensal</div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-400/30">
                  <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">R$ {yearlyCost.toFixed(2)}</div>
                  <div className="text-yellow-300">Gasto Anual</div>
                </div>
                
                <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl p-6 border border-red-400/30">
                  <Coins className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">R$ {lifetimeCost.toFixed(2)}</div>
                  <div className="text-red-300">Total Gasto</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-400/30 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">💰 Imagine o que você poderia fazer com esse dinheiro!</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="space-y-2">
                    <p className="text-green-300">• Uma viagem incrível</p>
                    <p className="text-green-300">• Um curso profissionalizante</p>
                    <p className="text-green-300">• Investir no seu futuro</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-300">• Reformar sua casa</p>
                    <p className="text-green-300">• Comprar um carro</p>
                    <p className="text-green-300">• Criar uma reserva de emergência</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            {!showResults ? (
              <button
                onClick={handleCalculate}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Calcular Economia</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Continuar Jornada</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4Calculator;