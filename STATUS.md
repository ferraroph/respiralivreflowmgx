# STATUS DO PROJETO - RESPIRA LIVRE
BASEADO NA ANÁLISE DO ARQUIVO PRD.md (VÍDEO SIDK5694)

## 1. VISÃO GERAL E PRIORIDADES

**PRIORIDADE 1 (CRÍTICO - CONSERTAR AGORA):**
- [x] Corrigir sistema de roteamento do botão "Voltar" (Evitar retorno para Home).
  - **CORREÇÃO REALIZADA (08/12/2025):** 
    - Modificado `Step4Calculator.tsx` para usar `handleBackAction()` inteligente
    - Se está mostrando resultados → volta para a tela de input
    - Se está no input → volta para a etapa anterior do funil
    - **Backup:** `bkps/Step4Calculator.tsx.bkp_20251208_*`
- [x] Implementar scroll automático para o topo da página (window.scrollTo) em todas as transições.
  - **CORREÇÃO REALIZADA (08/12/2025):**
    - Adicionado `useEffect` em `FunnelContainer.tsx` que dispara `window.scrollTo({ top: 0, behavior: 'smooth' })` em cada mudança de `currentStep`
    - Adicionado scroll adicional em `Step4Calculator.tsx` ao mostrar resultados e ao voltar para input
    - **Backups:** `bkps/FunnelContainer.tsx.bkp_20251208_*`, `bkps/StepWrapper.tsx.bkp_20251208_*`
- [ ] Corrigir fluxo da "Escolha de Missão" (Remover botão confirmar, adicionar auto-navegação).
- [ ] Implementar novo "Desafio Mindfulness" (Técnica Grounding 5-4-3-2-1).
- [ ] Implementar novo "Desafio de Resistência" (Mecânica Shooter/Foco).

**PRIORIDADE 2 (OTIMIZAR DEPOIS):**
- [ ] Ajustar range de preços na calculadora (limitar cigarro avulso a R$ 4.00).
- [ ] Adicionar opções de "Outros Tipos de Consumo" (Vape, Pod, Narguilé).
- [ ] Refinamentos de UI/UX e Copywriting.

---

## 2. DETALHAMENTO POR ETAPA

### ETAPA 1: ONBOARDING E CRIAÇÃO DE PERSONAGEM
**Arquivo:** `src/components/steps/Step1CharacterCreation.tsx`
**Status Geral:** APROVADO

**Checklist de Requisitos:**
- [x] **Tela de Nome:**
    - Interface nas cores verde e preta.
    - Texto: "O primeiro jogo que te vicia em NÃO FUMAR".
    - Input: "Como quer ser chamado?".
    - Placeholder: "Seu apelido de guerreiro...".
- [x] **Escolha de Arquétipo:**
    - Título: "Escolha seu Arquétipo".
    - Opção 1: Guerreiro (Ícone vermelho, escudo).
    - Opção 2: Estrategista (Ícone roxo, cérebro).
    - Opção 3: Inspirador (Ícone amarelo, coroa).
    - Opção 4: Resiliente (Ícone verde, broto).
    - Exibição de atributos e bônus de XP para cada classe.
- [x] **Modal de Sucesso:**
    - Título: "Personagem Criado!".
    - Recompensas: "+50 XP" e "+100 Coins".
    - Conquista: "Primeiro Passo".

### ETAPA 2: CALCULADORA DE IMPACTO
**Arquivo:** `src/components/steps/Step4Calculator.tsx`
**Status Geral:** EM AJUSTES

**Checklist de Funcionalidades:**
- [x] **Layout Principal:**
    - Botão "Voltar" no canto superior esquerdo (Funcionalidade corrigida para não voltar à Home).
    - Título: "Calculadora de Impacto".
- [x] **Inputs de Consumo:**
    - Toggle funcional: "Por Cigarro" (Ativo/Verde) vs "Por Maço".
    - Slider de Quantidade (Cigarros ou Maços).
    - Slider de Preço (R$).
- [x] **Prévia do Impacto:**
    - Exibição dinâmica de custo mensal e anual conforme ajuste dos sliders.
- [x] **Tela de Resultados:**
    - Resumo de consumo (cigarros/maços por mês).
    - Cards de Impacto Financeiro (Mensal e Anual).
    - **CORREÇÃO:** Remoção dos cards de "5 Anos" e "10 Anos" (Realizado).
    - Cards de Impacto na Saúde (Ansiedade, Disfunção Erétil, Expectativa de Vida, Produtividade).
    - Seção "O Que Você Poderia Ter" (Itens materiais equivalentes).
    - Botão Final: "Continuar Jornada".

**Bugs e Correções:**
- [x] **BUG CRÍTICO:** Botão "Voltar" na tela de resultados retornava para o início do app. (Corrigido: Agora volta para a tela de input da calculadora).
- [x] **BUG CRÍTICO:** Tela não rolava para o topo ao exibir resultados. (Corrigido: Implementado auto-scroll).
- [ ] **OTIMIZAÇÃO:** Ajustar valor máximo do slider de preço por cigarro para R$ 4.00 (Realista).

### ETAPA 3: ESCOLHA DE MISSÃO
**Arquivo:** `src/components/steps/Step3GoalSelection.tsx`
**Status Geral:** EM AJUSTES

**Checklist de Requisitos:**
- [x] **Layout:**
    - Título: "Escolha Sua Missão".
    - Botão "Voltar" no canto superior esquerdo (Adicionado).
- [x] **Opções de Missão:**
    - Card 1: Parar Imediatamente (Vermelho, Difícil).
    - Card 2: Redução Gradual (Azul, Recomendado).
    - Card 3: Redução de Danos (Verde, Fácil).
- [x] **Interação e Fluxo:**
    - **CORREÇÃO:** Remover necessidade de clicar em botão "Confirmar Meta" após seleção. (Realizado).
    - **CORREÇÃO:** Implementar avanço automático para próxima etapa ao clicar no card. (Realizado).
    - Feedback visual de seleção (Borda verde/Destaque).

### ETAPA 4: DESAFIO DA RESPIRAÇÃO
**Arquivo:** `src/components/steps/Step6BreathingChallenge.tsx`
**Status Geral:** APROVADO

**Checklist de Requisitos:**
- [x] **Tela de Introdução:**
    - Título: "Desafio da Respiração".
    - Instruções de como funciona (3 passos).
    - Lista de recompensas.
- [x] **Gameplay:**
    - Fase 1: Inspire (Círculo Verde, Texto "Inspire").
    - Fase 2: Segure (Círculo Amarelo, Texto "Segure").
    - Fase 3: Expire (Círculo Azul/Roxo, Texto "Expire").
    - Botão "Pular Desafio" disponível.
- [x] **Conclusão:**
    - Tela de sucesso com pontuação e bônus.
    - Botão "Concluir e Coletar Pontos".

### ETAPA 5: DESAFIO MINDFULNESS (GROUNDING)
**Arquivo:** `src/components/steps/Step7MindfulnessChallenge.tsx`
**Status Geral:** REPROVADO (NECESSITA REFAÇÃO TOTAL)

**Checklist de Requisitos (NOVA VERSÃO - TÉCNICA 5-4-3-2-1):**
- [ ] **Conceito:** Substituir meditação passiva por exercício ativo de escrita (Grounding).
- [ ] **Fase 1 (Visão):** Input para digitar 5 coisas que o usuário vê.
- [ ] **Fase 2 (Audição):** Input para digitar 4 coisas que o usuário escuta.
- [ ] **Fase 3 (Tato):** Input para digitar 3 coisas que o usuário sente.
- [ ] **Fase 4 (Olfato):** Input para digitar 2 coisas que o usuário cheira.
- [ ] **Fase 5 (Paladar):** Input para digitar 1 coisa que o usuário prova.
- [ ] **Sistema de Pontuação:**
    - Pontuação baseada na quantidade de caracteres digitados (evitar respostas de 1 letra).
    - Feedback visual de progresso.

### ETAPA 6: DESAFIO DE RESISTÊNCIA
**Arquivo:** `src/components/steps/Step8ResistanceChallenge.tsx`
**Status Geral:** REPROVADO (NECESSITA REFAÇÃO TOTAL)

**Checklist de Requisitos (NOVA VERSÃO - SHOOTER/FOCO):**
- [ ] **Conceito:** Substituir "Button Mashing" (clicar rápido) por mecânica de precisão/foco.
- [ ] **Mecânica:**
    - Inimigos ("Pensamentos Intrusivos", "Vontade de Fumar") aparecem em posições aleatórias.
    - Usuário deve clicar neles antes que desapareçam ou causem dano.
    - Penalidade por clicar em itens errados (se houver).
- [ ] **UI/UX:**
    - Timer de desafio.
    - Contador de acertos.

### ETAPA 7: DESAFIO DE FOCO (MEMORY GAME)
**Arquivo:** `src/components/steps/Step9FocusChallenge.tsx`
**Status Geral:** A VERIFICAR

**Checklist de Requisitos:**
- [ ] Verificar se a implementação atual corresponde a um Jogo da Memória ou similar.
- [ ] Garantir auto-scroll na entrada do desafio.
- [ ] Garantir botão voltar funcional.

### ETAPA 8: BOSS FIGHT
**Arquivo:** `src/components/steps/Step10BossChallenge.tsx`
**Status Geral:** A VERIFICAR

**Checklist de Requisitos:**
- [ ] Verificar mecânica de combate contra o "Monstro da Nicotina".
- [ ] Garantir feedback visual de dano/vitória.

### ETAPA 9: OFERTA FINAL
**Arquivo:** `src/components/steps/Step11FinalOffer.tsx`
**Status Geral:** A VERIFICAR

**Checklist de Requisitos:**
- [ ] Verificar copy da página de vendas.
- [ ] Verificar links de checkout/CTA.

---

## 3. CONTROLE DE BUGS GERAIS

- [x] **Auto-Scroll:** Implementar `window.scrollTo(0, 0)` no container principal (`FunnelContainer`) para rodar em toda troca de etapa.
- [x] **Barra de Progresso:** Verificar se existe uma barra de progresso visual no topo de todas as telas (Mencionado como faltante no PRD).
- [ ] **Botão Voltar:** Garantir que o botão voltar exista e funcione corretamente em TODAS as telas, sem exceção.
