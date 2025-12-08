# TSK 1

## ✅ TAREFAS CONCLUÍDAS

### 1. Corrigir sistema de roteamento do botão "Voltar"
**Arquivo modificado:** Step4Calculator.tsx
- Criada função `handleBackAction()` que detecta se está mostrando resultados:
  - Se `showResults = true` → Volta para tela de input (não sai do componente)
  - Se `showResults = false` → Chama `onBack()` para voltar à etapa anterior do funil

### 2. Implementar scroll automático para o topo da página
**Arquivos modificados:**
- FunnelContainer.tsx - Adicionado `useEffect` com `window.scrollTo({ top: 0, behavior: 'smooth' })` que dispara em cada mudança de `currentStep`
- Step4Calculator.tsx - Adicionado scroll ao mostrar resultados e ao voltar para input

### 📁 Backups criados em bkps:
- `FunnelContainer.tsx.bkp_20251208_144835`
- `StepWrapper.tsx.bkp_20251208_144839`
- `Step4Calculator.tsx.bkp_20251208_*`

### 📝 STATUS.md atualizado com:
- Checkboxes marcados como concluídos `[x]`
- Descrição das correções realizadas
- Referências aos arquivos de backup

Fez alterações.