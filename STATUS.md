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
- [x] Corrigir fluxo da "Escolha de Missão" (Remover botão confirmar, adicionar auto-navegação).
  - **CORREÇÃO REALIZADA (08/12/2025):**
    - Modificado `Step3GoalSelection.tsx` para auto-navegação ao clicar no card
    - Removida a função `handleConfirm()` (não mais necessária)
    - Removido o botão "Confirmar Meta" do layout
    - Agora ao clicar em um card de missão, já inicia automaticamente a confirmação e avança para a próxima etapa
    - **Backup:** `bkps/Step3GoalSelection.tsx.bkp_20251208_162350`
- [ ] Implementar novo "Desafio Mindfulness" (Técnica Grounding 5-4-3-2-1).
- [ ] Implementar novo "Desafio de Resistência" (Mecânica Shooter/Foco).

**PRIORIDADE 2 (OTIMIZAR DEPOIS):**

- [x] Ajustar range de preços na calculadora (limitar cigarro avulso a R$ 4.00).
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
- [x] **OTIMIZAÇÃO:** Ajustar valor máximo do slider de preço por cigarro para R$ 4.00 (Realista).
  - **CORREÇÃO REALIZADA (08/12/2025):**
    - Modificado `Step4Calculator.tsx` linha 242: alterado `max` do slider de preço por cigarro de `5` para `4`
    - Agora o slider de preço por cigarro vai de R$ 0.00 até R$ 4.00 (mais realista com o mercado)
    - **Backup:** `bkps/Step4Calculator.tsx.bkp_20251208_162747`

### ETAPA 3: ESCOLHA DE MISSÃO

**Arquivo:** `src/components/steps/Step3GoalSelection.tsx`
**Status Geral:** APROVADO

**Checklist de Requisitos:**

- [x] **Layout:**
  - Título: "Escolha Sua Missão".
  - Botão "Voltar" no canto superior esquerdo (Adicionado).
- [x] **Opções de Missão:**
  - Card 1: Parar Imediatamente (Vermelho, Difícil).
  - Card 2: Redução Gradual (Azul, Recomendado).
  - Card 3: Redução de Danos (Verde, Fácil).
- [x] **Interação e Fluxo:**
  - **CORREÇÃO (08/12/2025):** Removido botão "Confirmar Meta" após seleção.
  - **CORREÇÃO (08/12/2025):** Implementado avanço automático para próxima etapa ao clicar no card.
  - Feedback visual de seleção (Borda verde/Destaque).

### ETAPA 4: DESAFIO DA RESPIRAÇÃO ✅ APROVADO

**Arquivo:** `src/components/steps/Step6BreathingChallenge.tsx`
**PRD de Referência:** `docs/dev/etapa_5/PRD_1_Claude.md`
**Arquivo TASKS:** `TASKS.md`
**Status Geral:** APROVADO (17/12/2025) - Confirmado pelo usuário

> **NOTA:** Esta etapa está sendo otimizada com base no PRD_1_Claude.md.
> O funil de referência é: `util/funilrespiralivre-oficial/src/components/challenges/Challenge1Breathing.tsx`

**Checklist de Requisitos - TELA DE TUTORIAL:**

- [x] **REQ-TUT-001 (CRÍTICO):** Corrigir ortografia "Como Funcionar:" → "Como Funciona" ✅ (11/12/2025)
- [ ] **REQ-TUT-002 (ALTA):** Adicionar efeito de glow pulsante no ícone de vento
- [x] **REQ-TUT-003 (MÉDIA):** Container de "Como Funciona" existe (manter)
- [ ] **REQ-TUT-004 (ALTA):** Otimizar box de recompensas com valores do funil antigo

**Checklist de Requisitos - TELA DE EXECUÇÃO:**

- [ ] **REQ-EXEC-001 (CRÍTICO):** Animação sincronizada - REVISÃO NECESSÁRIA:
  - Timing: 4s inspirar, 2s pausar, 4s expirar, 2s pausar (12s ciclo)
  - Ponto 0 (scale-125) como ponto inicial
  - Anel de progresso acompanhando círculo
  - Countdown inicial "PREPARE-SE" → 3 → 2 → 1
  - Número de respirações no centro após 1º ciclo
- [x] **REQ-EXEC-002 (ALTA):** Aumentar tamanho do círculo (w-40 → w-64) ✅ (11/12/2025)
- [x] **REQ-EXEC-003 (CRÍTICO):** Corrigir hierarquia de botões ✅ (11/12/2025)
- [x] **REQ-EXEC-004 (ALTA):** Melhorar distribuição de elementos ✅ (11/12/2025)
- [ ] **REQ-EXEC-005 (ALTA):** Implementar feedback de dopamina (contador XP animado)
- [ ] **REQ-EXEC-006 (BAIXA):** Som opcional

**Checklist de Requisitos - TELA DE CONCLUSÃO:**

- [ ] **REQ-CONC-001 (ALTA):** Redesign completo (consistência visual)

**Bugs Identificados (11/12/2025):**

- ❌ Linha 122: Erro ortográfico "Como Funcionar:"
- ❌ Linha 48-56: Animação não sincroniza corretamente (lógica de cyclePosition bugada)
- ❌ Linhas 228-247: Hierarquia de botões invertida (Pular em amarelo no topo!)
- ❌ Linha 206: Círculo muito pequeno (w-40 h-40)
- ❌ Linhas 254-311: Tela de conclusão com inline styles (inconsistente)

**Backup Pendente:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

### ETAPA 5: DESAFIO MINDFULNESS (BOTÃO DE EMERGÊNCIA) ✅ APROVADO

**Arquivo:** `src/components/steps/Step7MindfulnessChallenge.tsx` (REDESIGN COMPLETO - 17/12/2025)
**PRD de Referência:** `PRD.md` | **Briefing Design:** `Briefing_Design.md`
**Status Geral:** APROVADO (17/12/2025)
**Backup:** `bkps/Step7MindfulnessChallenge.tsx.bkp_20251217_173327`

> **NOTA:** Redesign completo implementado e testado com sucesso.
> Conceito: "Botão de Emergência" - Sistema multi-sensorial para estimular presença.
> Design segue paleta consistente com Step 1-2 do funil (ver Briefing_Design.md).

**Checklist de Requisitos - MECÂNICA CORE:** ✅ COMPLETO

- [x] **REQ-MIND-001:** Redesign como "Botão de Emergência" ✅
- [x] **REQ-MIND-002:** Mecânica de observação ✅
- [x] **REQ-MIND-003:** Sistema de 4 botões (Central=3pts, Ver=1pt, Ouvir=3pts, Sentir=5pts) ✅
- [x] **REQ-MIND-004:** Sistema de pontuação diferenciada ✅
- [x] **REQ-MIND-005:** Mínimo 9 pontos para completar ✅
- [x] **REQ-MIND-006:** Feedback visual e animações (pontos flutuantes) ✅
- [x] **REQ-MIND-007:** Sem limite de tempo ✅
- [x] **REQ-MIND-008:** Mensagens de estado ✅

**Checklist de Requisitos - VISUAL:** ✅ COMPLETO

- [x] **REQ-VISUAL-001:** Estrutura premium-card ✅
- [x] **REQ-VISUAL-002:** Paleta consistente com funil ✅
- [x] **REQ-VISUAL-003:** Ícone com glow + badge ✅
- [x] **REQ-VISUAL-004:** "Como Funciona" com 3 passos ✅
- [x] **REQ-VISUAL-005:** Card de Recompensas ✅
- [x] **REQ-VISUAL-006:** Botão CTA premium-button ✅
- [x] **REQ-VISUAL-007:** Espaçamento e hierarquia ✅

**Checklist de Requisitos - TELA DE EXECUÇÃO:** ✅ COMPLETO

- [x] **REQ-EXEC-001:** Layout com botão grande centralizado ✅
- [x] **REQ-EXEC-002:** Botão central grande (w-56 h-56) ✅
- [x] **REQ-EXEC-003:** 3 botões sensoriais ✅
- [x] **REQ-EXEC-004:** Display de pontuação em tempo real ✅
- [x] **REQ-EXEC-005:** Botão "Concluir" aparece quando >= 9 pts ✅
- [x] **REQ-EXEC-006:** Mensagens de estado ✅
- [x] **REQ-EXEC-007:** Tela de conclusão customizada ✅

**Testes Realizados (17/12/2025):** ✅ Browser test confirmou funcionamento correto

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
