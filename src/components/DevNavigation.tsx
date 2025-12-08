import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code2, Zap } from 'lucide-react';

// ============================================================================
// MAPA DE ETAPAS DO FUNIL
// ============================================================================
// Atualize este mapa quando adicionar/remover etapas ou sub-etapas
// Cada item representa uma "tela" navegável do funil
export interface StepInfo {
  id: string;           // Identificador único
  step: number;         // Número do step principal (1-9)
  subStep: number;      // Número da sub-etapa (1, 2, 3...)
  label: string;        // Nome curto
  description: string;  // Descrição detalhada
  internalState?: Record<string, unknown>;  // Estado interno para injetar (ex: {showArchetypes: true})
}

export const FUNNEL_STEPS_MAP: StepInfo[] = [
  // Step 1 - Criação do Personagem (2 sub-etapas)
  { id: '1.1', step: 1, subStep: 1, label: '1.1', description: 'Input do Nickname', internalState: { showArchetypes: false } },
  { id: '1.2', step: 1, subStep: 2, label: '1.2', description: 'Seleção de Arquétipo', internalState: { showArchetypes: true } },
  
  // Step 2 - Calculadora (2 sub-etapas)
  { id: '2.1', step: 2, subStep: 1, label: '2.1', description: 'Input de Dados', internalState: { showResults: false } },
  { id: '2.2', step: 2, subStep: 2, label: '2.2', description: 'Resultados Financeiros', internalState: { showResults: true } },
  
  // Step 3 - Seleção de Meta (2 sub-etapas)
  { id: '3.1', step: 3, subStep: 1, label: '3.1', description: 'Escolha da Meta', internalState: { showConfirmation: false } },
  { id: '3.2', step: 3, subStep: 2, label: '3.2', description: 'Confirmação', internalState: { showConfirmation: true } },
  
  // Step 4 - Desafio Respiração (3 sub-etapas)
  { id: '4.1', step: 4, subStep: 1, label: '4.1', description: 'Instruções Respiração', internalState: { phase: 'instructions' } },
  { id: '4.2', step: 4, subStep: 2, label: '4.2', description: 'Desafio Ativo', internalState: { phase: 'challenge' } },
  { id: '4.3', step: 4, subStep: 3, label: '4.3', description: 'Conclusão', internalState: { phase: 'completed' } },
  
  // Step 5 - Desafio Mindfulness (3 sub-etapas)
  { id: '5.1', step: 5, subStep: 1, label: '5.1', description: 'Instruções Mindfulness', internalState: { phase: 'instructions' } },
  { id: '5.2', step: 5, subStep: 2, label: '5.2', description: 'Meditação Ativa', internalState: { phase: 'challenge' } },
  { id: '5.3', step: 5, subStep: 3, label: '5.3', description: 'Conclusão', internalState: { phase: 'completed' } },
  
  // Step 6 - Desafio Resistência (3 sub-etapas)
  { id: '6.1', step: 6, subStep: 1, label: '6.1', description: 'Instruções Resistência', internalState: { phase: 'instructions' } },
  { id: '6.2', step: 6, subStep: 2, label: '6.2', description: 'Cliques Ativos', internalState: { phase: 'challenge' } },
  { id: '6.3', step: 6, subStep: 3, label: '6.3', description: 'Conclusão', internalState: { phase: 'completed' } },
  
  // Step 7 - Desafio Foco (3 sub-etapas)
  { id: '7.1', step: 7, subStep: 1, label: '7.1', description: 'Instruções Foco', internalState: { phase: 'instructions' } },
  { id: '7.2', step: 7, subStep: 2, label: '7.2', description: 'Alvos Ativos', internalState: { phase: 'challenge' } },
  { id: '7.3', step: 7, subStep: 3, label: '7.3', description: 'Conclusão', internalState: { phase: 'completed' } },
  
  // Step 8 - Boss Challenge (4 sub-etapas)
  { id: '8.1', step: 8, subStep: 1, label: '8.1', description: 'Intro Boss', internalState: { phase: 'intro' } },
  { id: '8.2', step: 8, subStep: 2, label: '8.2', description: 'Instruções Boss', internalState: { phase: 'instructions' } },
  { id: '8.3', step: 8, subStep: 3, label: '8.3', description: 'Batalha Ativa', internalState: { phase: 'challenge' } },
  { id: '8.4', step: 8, subStep: 4, label: '8.4', description: 'Vitória', internalState: { phase: 'victory' } },
  
  // Step 9 - Oferta Final (1 sub-etapa)
  { id: '9.1', step: 9, subStep: 1, label: '9.1', description: 'Oferta Final', internalState: {} },
];

export const TOTAL_STEPS = 9;
export const TOTAL_SUB_STEPS = FUNNEL_STEPS_MAP.length; // 23

interface DevNavigationProps {
  currentStep: number;
  currentSubStep?: number;
  onNavigateToStep: (step: number, subStep?: number, internalState?: Record<string, unknown>) => void;
  onInjectMockData: () => void;
}

/**
 * DevNavigation - Componente para navegação de desenvolvimento
 * 
 * ATENÇÃO: Este componente está disponível em PRODUÇÃO!
 * Para desativar, veja as instruções no arquivo USER.md
 * 
 * Permite:
 * - Navegar diretamente para qualquer etapa/sub-etapa do funil
 * - Injetar dados mock para evitar erros por falta de dados
 */
const DevNavigation: React.FC<DevNavigationProps> = ({
  currentStep,
  currentSubStep = 1,
  onNavigateToStep,
  onInjectMockData
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [viewMode, setViewMode] = useState<'simple' | 'detailed'>('simple');

  // Agrupa steps por número principal
  const groupedSteps = FUNNEL_STEPS_MAP.reduce((acc, step) => {
    if (!acc[step.step]) acc[step.step] = [];
    acc[step.step].push(step);
    return acc;
  }, {} as { [key: number]: StepInfo[] });

  const currentStepInfo = FUNNEL_STEPS_MAP.find(
    s => s.step === currentStep && s.subStep === currentSubStep
  );

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 
                   text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl 
                   transition-all duration-300 hover:scale-105 border-2 border-white/30"
        title="Navegação Dev"
      >
        <Code2 size={18} />
        <span className="font-bold text-sm">DEV</span>
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-mono">
          {currentStep}.{currentSubStep}
        </span>
        <span className="text-white/60 text-[10px]">
          ({TOTAL_SUB_STEPS} telas)
        </span>
        {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
      </button>

      {/* Expanded Panel */}
      {isExpanded && (
        <div className="absolute bottom-14 right-0 w-80 max-h-[70vh] bg-gray-900/95 backdrop-blur-xl 
                        rounded-2xl border border-white/20 shadow-2xl overflow-hidden
                        animate-in slide-in-from-bottom-2 duration-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 px-4 py-3 
                          border-b border-white/10 shrink-0">
            <h3 className="text-white font-bold text-sm flex items-center gap-2">
              <Code2 size={16} className="text-amber-400" />
              Navegação de Desenvolvimento
            </h3>
            <p className="text-white/60 text-xs mt-1">
              {TOTAL_SUB_STEPS} telas em {TOTAL_STEPS} etapas principais
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="px-3 pt-3 flex gap-2 shrink-0">
            <button
              onClick={() => setViewMode('simple')}
              className={`flex-1 text-xs py-1.5 rounded-lg transition-all ${
                viewMode === 'simple' 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
            >
              Simples
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`flex-1 text-xs py-1.5 rounded-lg transition-all ${
                viewMode === 'detailed' 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
            >
              Detalhado
            </button>
          </div>

          {/* Mock Data Button */}
          <div className="px-3 pt-3 shrink-0">
            <button
              onClick={onInjectMockData}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 
                         text-white text-xs font-medium py-2 px-3 rounded-lg
                         hover:from-purple-500 hover:to-indigo-500 transition-all
                         flex items-center justify-center gap-2"
            >
              <Zap size={14} />
              Injetar Dados Mock (Evitar Erros)
            </button>
          </div>

          {/* Steps List - Scrollable */}
          <div className="p-3 overflow-y-auto flex-1">
            {viewMode === 'simple' ? (
              // Modo Simples - Grid de números
              <div className="grid grid-cols-5 gap-1.5">
                {FUNNEL_STEPS_MAP.map((stepInfo) => {
                  const isActive = stepInfo.step === currentStep && stepInfo.subStep === currentSubStep;
                  return (
                    <button
                      key={stepInfo.id}
                      onClick={() => {
                        onNavigateToStep(stepInfo.step, stepInfo.subStep, stepInfo.internalState);
                        setIsExpanded(false);
                      }}
                      className={`
                        relative p-2 rounded-lg text-center transition-all duration-200
                        hover:scale-105 text-xs font-mono
                        ${isActive 
                          ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white ring-2 ring-green-400/50' 
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                        }
                      `}
                      title={stepInfo.description}
                    >
                      {stepInfo.label}
                      {isActive && (
                        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              // Modo Detalhado - Lista expandida
              <div className="space-y-2">
                {Object.entries(groupedSteps).map(([stepNum, subSteps]) => (
                  <div key={stepNum} className="bg-white/5 rounded-lg overflow-hidden">
                    <div className="px-3 py-2 bg-white/5 text-white/80 text-xs font-bold">
                      Etapa {stepNum}
                    </div>
                    <div className="p-2 space-y-1">
                      {subSteps.map((stepInfo) => {
                        const isActive = stepInfo.step === currentStep && stepInfo.subStep === currentSubStep;
                        return (
                          <button
                            key={stepInfo.id}
                            onClick={() => {
                              onNavigateToStep(stepInfo.step, stepInfo.subStep, stepInfo.internalState);
                              setIsExpanded(false);
                            }}
                            className={`
                              w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left
                              transition-all duration-200 text-xs
                              ${isActive 
                                ? 'bg-gradient-to-r from-green-500/30 to-emerald-600/30 text-white border border-green-400/50' 
                                : 'bg-white/5 text-white/70 hover:bg-white/10'
                              }
                            `}
                          >
                            <span className={`font-mono font-bold ${isActive ? 'text-green-400' : 'text-amber-400'}`}>
                              {stepInfo.label}
                            </span>
                            <span className="flex-1 truncate">{stepInfo.description}</span>
                            {isActive && (
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Current Step Info */}
          <div className="px-3 pb-3 shrink-0">
            <div className="bg-white/5 rounded-lg p-2 text-center">
              <span className="text-white/40 text-xs">Atual: </span>
              <span className="text-amber-400 text-xs font-mono font-bold">
                {currentStep}.{currentSubStep}
              </span>
              <span className="text-white/60 text-xs"> - </span>
              <span className="text-white text-xs">
                {currentStepInfo?.description || 'Desconhecido'}
              </span>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-red-500/10 px-3 py-2 border-t border-red-500/20 shrink-0">
            <p className="text-red-400/80 text-[10px] text-center">
              ⚠️ ATIVO EM PRODUÇÃO - Ver USER.md para desativar
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevNavigation;
