# ABAIXO ESTÁ O SEGUNDO PLANO COMPLETO QUE O CURSOR GEROU APÓS O PROMPT 2 (TENTATIVA EM OUTRO CHAT, AONDE MANDEI OS DOIS PROMPTS DE UMA VEZ EM UM PROMPT SÓ)

## 1. Step1 - Animação Premium e Transição Automática

### Problemas Atuais:

- Botão "Continuar" aparece após seleção (não deve aparecer)
- Não avança automaticamente após seleção
- Animação deixa espaços vazios
- Falta notificação gamificada de XP/Coins
- Falta transição premium tipo app/jogo

### Correções Necessárias:

- **Animação de empilhamento**: Cards acima vão para trás do selecionado, cards abaixo vão para cima atrás do selecionado
- **Fade-out gradiente**: Topo fade-out de cima para baixo, baixo fade-out de baixo para cima
- **Zoom dinâmico**: Zoom out sutil durante empilhamento, zoom in no card selecionado com brilho
- **Sem espaços vazios**: Container deve manter altura fixa, cards se movem sem deixar gaps
- **Avanço automático**: Após animação completa (800ms), mostrar notificação gamificada e transição para próxima etapa
- **Notificação gamificada**: Tela fullscreen premium mostrando XP ganho, coins, badges (não um card simples)
- **Transição tipo app**: Slide/fade premium como apps iOS/jogos

## 2. Step2 → Substituir por Step4Calculator

### Ação:

- Remover Step2RealityCheck do fluxo
- Step4Calculator deve aparecer no lugar do Step2
- Ajustar numeração: Step3 vira Step2, Step4 vira Step3, etc.

## 3. Step3 (GoalSelection) - Mesmas Animações

### Aplicar:

- Mesma lógica de animação de empilhamento do Step1
- Avanço automático após seleção
- Notificação gamificada de pontuação
- Transição premium

## 4. Pre-seleção ao Voltar

### Problema:

- Quando usuário volta, informações ficam selecionadas e bugam o funil

### Solução:

- Ao voltar, manter valores mas resetar estado de seleção visual
- Usar `userProfile` para pré-preencher mas não marcar como "selected"
- Estado visual deve ser "pré-selecionado" (destaque sutil) mas não "selecionado" (que dispara animação)

## 5. Step4Calculator - Label Dinâmico

### Correção:

- Se inputMode === 'cigarettes': "Preço por cigarro (R$)"
- Se inputMode === 'packs': "Preço por maço (R$)"

## 6. CheckpointModal - Verificar Existência

### Ação:

- Verificar se CheckpointModal ainda existe e está funcionando
- Se foi removido, restaurar

## 7. Animações - Não Reescrever

### Importante:

- NÃO reescrever animações existentes do zero
- OTIMIZAR e CORRIGIR as que já existem
- Manter estrutura atual, apenas ajustar:
- Remover espaços vazios
- Melhorar timing
- Adicionar transições automáticas
- Adicionar notificações gamificadas

## Arquivos a Modificar:

1. `src/components/steps/Step1CharacterCreation.tsx` - Animação premium + transição automática
2. `src/components/FunnelContainer.tsx` - Substituir Step2 por Step4, ajustar numeração
3. `src/components/steps/Step3GoalSelection.tsx` - Aplicar mesmas animações
4. `src/components/steps/Step4Calculator.tsx` - Label dinâmico
5. `src/components/CheckpointModal.tsx` - Verificar/restaurar se necessário
6. Criar componente `NotificationGamified.tsx` - Para notificações de XP/Coins

### To-dos

- [ ] Configurar Playwright e criar script de captura de screenshots do site de referência
- [ ] Copiar CSS variables e configuração do tema dark premium do projeto referência
- [ ] Implementar botão voltar em StepWrapper para navegação entre etapas
- [ ] Remover Step5HealthSimulator e ajustar numeração de steps
- [ ] Implementar animações premium de entrada e seleção no Step1CharacterCreation
- [ ] Melhorar Step4Calculator com toggle maço/cigarro, cálculos precisos e estatísticas impactantes
- [ ] Aplicar tema dark premium em todos os steps de desafio (6-10)
- [ ] Atualizar Step11FinalOffer com design premium iOS consistente