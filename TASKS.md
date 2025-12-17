# TASKS - Otimização do Desafio da Respiração

> **PRD de Referência:** [docs/dev/etapa_5/PRD_1_Claude.md](docs/dev/etapa_5/PRD_1_Claude.md) > **Arquivo de Status:** [STATUS.md](STATUS.md) > **Data de Criação:** 11/12/2025

---

## 📋 VISÃO GERAL

Este arquivo rastreia todas as tarefas e subtarefas para otimização do **Desafio da Respiração** (Etapa 5 do funil).

**Componente Principal:** `src/components/steps/Step6BreathingChallenge.tsx` (319 linhas)
**Componente de Referência:** `util/funilrespiralivre-oficial/src/components/challenges/Challenge1Breathing.tsx` (275 linhas)

---

## 🗂️ ESTRUTURA DE BACKUPS

| Arquivo                       | Backup    | Localização                                            |
| ----------------------------- | --------- | ------------------------------------------------------ |
| Step6BreathingChallenge.tsx   | Pendente  | `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS` |
| StepWrapper.tsx (se alterado) | Existente | `bkps/StepWrapper.tsx.bkp_20251208_144839`             |

---

## 📊 FASES DE IMPLEMENTAÇÃO (Conforme PRD Seção 10.1)

### FASE 1 - CRÍTICO (MVP Corrigido) ✅ CONCLUÍDA (11/12/2025)

- [x] **TASK-001:** REQ-TUT-001 - Correção Ortográfica ✅
- [x] **TASK-003:** REQ-EXEC-003 - Corrigir Hierarquia de Botões ✅
- [x] **TASK-004:** REQ-EXEC-004 - Melhorar Distribuição de Elementos ✅

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_20251211_174334`

---

### FASE 1.5 - CORREÇÃO ANIMAÇÃO (CRÍTICO) ⚠️ PENDENTE

> **ATENÇÃO:** NÃO ALTERAR DESIGN EXISTENTE. NÃO ALTERAR PROPORÇÕES MÁXIMA/MÍNIMA.

**TASK-002 REVISADA: Animação Sincronizada**

**Timing CORRETO (12s ciclo total):**

1. **Inspirar:** 4 segundos (ponto 0 → ponto +10/máximo)
2. **Pausar:** 2 segundos (FICA no ponto +10/máximo)
3. **Expirar:** 4 segundos (ponto +10 → ponto -10/mínimo)
4. **Pausar:** 2 segundos (FICA no ponto -10/mínimo)

**Proporções de Scale (NÃO ALTERAR):**

- scale-150 = Máximo (+10) = Fim do Inspirar
- scale-125 = Ponto 0 (ADICIONAR - é o ponto inicial!)
- scale-100 = Mínimo (-10) = Fim do Expirar

**Especificações do ANEL de Progresso:**

- [ ] Anel fino (não grosso, mas não muito fino) que envolve o círculo
- [ ] Espaço de 2px entre anel e círculo
- [ ] Anel SEMPRE acompanha o movimento/scale do círculo
- [ ] Anel SEMPRE tem a mesma cor do círculo (muda junto)
- [ ] Animação de preenchimento no sentido HORÁRIO
- [ ] Brilho sutil na luz do anel
- [ ] Anel NÃO aparece durante countdown inicial

**Especificações do Countdown Inicial:**

- [ ] Dentro do círculo: "PREPARE-SE"
- [ ] Countdown: 3, 2, 1 (dentro do círculo)
- [ ] Círculo começa no PONTO 0 (scale-125)
- [ ] Anel só aparece APÓS countdown terminar

**Especificações do Conteúdo do Círculo:**

- [ ] NÃO mostrar números de segundos/countdown durante respiração
- [ ] Texto "INSPIRE/SEGURE/EXPIRE" fica DENTRO do círculo
- [ ] Texto acompanha movimento do círculo
- [ ] Quando completar 1 ciclo: mostrar número de respirações no centro
- [ ] Remover texto "X respirações completas" de baixo do círculo
- [ ] Só mostrar o NÚMERO de respirações (sem texto adicional)

**Sequência Visual:**

```
COUNTDOWN:
[Círculo no ponto 0] → "PREPARE-SE" → "3" → "2" → "1" → INICIA

CICLO DE RESPIRAÇÃO:
1. [Ponto 0 → +10] "INSPIRE" (4s) - Anel preenche sentido horário
2. [Ponto +10] "SEGURE" (2s) - Anel fica cheio
3. [Ponto +10 → -10] "EXPIRE" (4s) - Anel esvazia sentido horário
4. [Ponto -10] "SEGURE" (2s) - Anel fica vazio
5. Volta pro passo 1

APÓS 1º CICLO: Mostra "1" no centro (número de respirações)
```

**Código de Referência (BACKUP linha 179):**

```tsx
const breathScale =
  breathPhase === "inhale"
    ? "scale-150"
    : breathPhase === "hold"
    ? "scale-125"
    : "scale-100";
```

**ERROS A EVITAR:**

- ❌ NÃO colocar texto "INSPIRE" sobrepondo números
- ❌ NÃO fazer anel sumir atrás do círculo
- ❌ NÃO criar tela separada de countdown (é DENTRO do círculo)
- ❌ NÃO alterar posição do texto para fora do círculo sem acompanhar movimento
- ❌ NÃO alterar design/cores/proporções existentes
- ❌ NÃO começar animação fora do ponto 0

### FASE 2 - ESSENCIAL (Otimizações de UX)

- [ ] **TASK-005:** REQ-TUT-002 - Adicionar Efeito de Glow no Ícone
- [ ] **TASK-006:** REQ-TUT-004 - Otimizar Box de Recompensas
- [ ] **TASK-007:** REQ-EXEC-002 - Aumentar Tamanho do Círculo
- [ ] **TASK-008:** REQ-EXEC-005 - Implementar Feedback de Dopamina

### FASE 3 - MELHORIAS (Polish)

- [ ] **TASK-009:** REQ-CONC-001 - Redesign da Tela de Conclusão
- [ ] **TASK-010:** REQ-EXEC-006 - Som Opcional (BAIXA PRIORIDADE)

---

## 📝 DETALHAMENTO DAS TAREFAS

---

### TASK-001: Correção Ortográfica ⚠️ CRÍTICO

> **PRD Ref:** Seção 3.1 - REQ-TUT-001
> **Prioridade:** CRÍTICA
> **Status:** ⬜ NÃO INICIADA

**Problema:**

- Linha 122 de `Step6BreathingChallenge.tsx` contém: `"Como Funcionar:"`
- Deveria ser: `"Como Funciona"`

**Arquivo a Modificar:**

- `src/components/steps/Step6BreathingChallenge.tsx`

**Código Atual (Linha 122):**

```tsx
<h2 className="text-xl font-bold text-foreground mb-4">Como Funcionar:</h2>
```

**Código Esperado:**

```tsx
<h2 className="text-xl font-bold text-foreground mb-4">Como Funciona</h2>
```

**Referência (Funil Antigo - Linha 96):**

```tsx
<h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
  <Zap className="w-5 h-5 text-primary" />
  Como Funciona
</h3>
```

**Critério de Aceitação:**

- [ ] Texto corrigido para "Como Funciona"
- [ ] Sem dois pontos no final (conforme referência)
- [ ] Adicionar ícone Zap antes do texto (conforme referência)

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

---

### TASK-002: Implementar Animação Sincronizada ⚠️ CRÍTICO

> **PRD Ref:** Seção 3.2 - REQ-EXEC-001
> **Prioridade:** CRÍTICA
> **Status:** ⬜ NÃO INICIADA

**Problema:**

- A animação do círculo NÃO FUNCIONA corretamente
- Linhas 48-56: Lógica de `cyclePosition` usa `timeElapsed` fora do closure correto
- O círculo não expande/contrai visualmente de forma sincronizada

**Arquivo a Modificar:**

- `src/components/steps/Step6BreathingChallenge.tsx`

**Código Atual com BUG (Linhas 48-56):**

```tsx
// Breath cycle animation
const cyclePosition = timeElapsed % BREATH_CYCLE;
if (cyclePosition < 3) {
  setBreathPhase("inhale");
} else if (cyclePosition < 5) {
  setBreathPhase("hold");
} else {
  setBreathPhase("exhale");
}
```

**Problemas Identificados:**

1. `BREATH_CYCLE = 8` mas timing é: 3s inhale, 2s hold, 3s exhale (errado!)
2. PRD especifica: 4s inspire, 4s segure, 6s expire (ciclo de 14s)
3. A animação CSS usa classes estáticas, não transições fluidas

**Código de Referência (Funil Antigo - Linhas 39-51):**

```tsx
setTimer((prev) => {
  if (prev <= 1) {
    if (breathingPhase === "inhale") {
      setBreathingPhase("hold");
      return 4;
    } else if (breathingPhase === "hold") {
      setBreathingPhase("exhale");
      return 6;
    } else {
      setBreathingPhase("inhale");
      return 4;
    }
  }
  return prev - 1;
});
```

**Animação Visual de Referência (Linha 236-240):**

```tsx
<div
  className={`w-64 h-64 rounded-full bg-gradient-to-br ${getPhaseColor()} flex items-center justify-center transition-all duration-1000 ease-in-out shadow-2xl`}
  style={{ transform: `scale(${scaleValue})` }}
>
```

**Solução Proposta:**

1. Usar estado `timer` separado para countdown dentro de cada fase
2. Implementar timing correto: 4s inspire, 4s segure, 6s expire
3. Usar `style={{ transform: scale() }}` ao invés de classes Tailwind
4. Adicionar contador visual dentro do círculo

**Critérios de Aceitação:**

- [ ] Círculo EXPANDE durante "Inspire" (4 segundos)
- [ ] Círculo MANTÉM tamanho máximo durante "Segure" (4 segundos)
- [ ] Círculo CONTRAI durante "Expire" (6 segundos)
- [ ] Transições são suaves (60 FPS, ease-in-out)
- [ ] Timer visual mostra countdown dentro do círculo
- [ ] Ciclo reinicia automaticamente

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

---

### TASK-003: Corrigir Hierarquia de Botões ⚠️ CRÍTICO

> **PRD Ref:** Seção 3.2 - REQ-EXEC-003
> **Prioridade:** CRÍTICA
> **Status:** ⬜ NÃO INICIADA

**Problema:**

- Botão "Pular Desafio" está em AMARELO CHAMATIVO no TOPO (estimula abandono!)
- Botão "Concluir" está embaixo (deveria ser o CTA principal)

**Código Atual com Problema (Linhas 228-247):**

```tsx
{
  /* Action Buttons */
}
<div className="space-y-3">
  {showSkip && (
    <button
      onClick={handleSkip}
      className="w-full premium-button bg-gradient-to-r from-warning/80 to-warning text-lg flex items-center justify-center gap-3"
    >
      <SkipForward className="w-6 h-6" />
      Pular Desafio
      {timeElapsed < MINIMUM_TIME && (
        <span className="text-xs opacity-75">(Sem pontos)</span>
      )}
    </button>
  )}

  {timeElapsed >= MINIMUM_TIME && (
    <button
      onClick={handleComplete}
      className="w-full premium-button text-lg flex items-center justify-center gap-3"
    >
      <Trophy className="w-6 h-6" />
      Concluir e Coletar: {points} pts
    </button>
  )}
</div>;
```

**Código de Referência CORRETO (Linhas 251-266):**

```tsx
{
  showSkip && (
    <>
      <button
        onClick={handleCollectPoints}
        className="w-full bg-gradient-to-r from-primary via-success to-primary text-white px-6 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
      >
        Concluir e Coletar: +{totalTime * 5} XP
      </button>

      <button
        onClick={onSkip}
        className="w-full glass-effect px-6 py-3 rounded-2xl font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2"
      >
        <X className="w-4 h-4" />
        Pular Desafio (Sem Recompensas)
      </button>
    </>
  );
}
```

**Mudanças Necessárias:**

1. **Botão Concluir (CTA Principal):**
   - Posição: PRIMEIRO (topo)
   - Cor: Verde neon brilhante (from-primary via-success to-primary)
   - Ícone: Trophy
   - Texto: "Concluir e Coletar: +{X} pts"
2. **Botão Pular (Secundário):**
   - Posição: SEGUNDO (embaixo)
   - Cor: Cinza discreto (glass-effect, text-muted-foreground)
   - Ícone: X (não SkipForward)
   - Texto: "Pular Desafio (Sem Recompensas)" - DESESTIMULANTE

**Critérios de Aceitação:**

- [ ] Botão "Concluir" aparece PRIMEIRO (acima)
- [ ] Botão "Concluir" tem cor verde neon vibrante
- [ ] Botão "Pular" aparece SEGUNDO (abaixo)
- [ ] Botão "Pular" tem cor cinza/discreta
- [ ] Texto do botão Pular inclui "(Sem Recompensas)"
- [ ] Ícone do botão Pular é X (não SkipForward)

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

---

### TASK-004: Melhorar Distribuição de Elementos ⚠️ CRÍTICO

> **PRD Ref:** Seção 3.2 - REQ-EXEC-004
> **Prioridade:** ALTA
> **Status:** ⬜ NÃO INICIADA

**Problema:**

- Botões ficam "escondidos" na tela
- Layout não está otimizado para visibilidade

**Arquivo a Modificar:**

- `src/components/steps/Step6BreathingChallenge.tsx`

**Análise do Layout Atual (phase === 'challenge'):**

- Timer/Stats no topo com `mb-8`
- Círculo centralizado com `flex-1`
- Botões no final com `space-y-3`

**Layout de Referência:**

- Timer ABSOLUTAMENTE posicionado no topo (`absolute top-8`)
- Círculo usa `flex-1 flex items-center justify-center`
- Botões em `pb-8` para padding inferior

**Critérios de Aceitação:**

- [ ] Botões sempre visíveis na tela
- [ ] Sem sobreposição de elementos
- [ ] Hierarquia visual clara
- [ ] Funciona bem em mobile e desktop

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

---

### TASK-005: Adicionar Efeito de Glow no Ícone

> **PRD Ref:** Seção 3.1 - REQ-TUT-002
> **Prioridade:** ALTA
> **Status:** ⬜ NÃO INICIADA

**Problema:**

- Ícone de vento na tela de instruções não tem efeito de glow pulsante

**Código Atual (Linhas 113-116):**

```tsx
<div className="w-20 h-20 mx-auto mb-6 premium-card bg-gradient-to-br from-primary/20 to-success/20 border-primary/30 flex items-center justify-center animate-float">
  <Wind className="w-10 h-10 text-primary" />
</div>
```

**Código de Referência (Linhas 75-79):**

```tsx
<div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-3xl flex items-center justify-center mb-4 mx-auto animate-glow-pulse">
  <Wind className="w-12 h-12 text-background" />
</div>
```

**Mudanças Necessárias:**

1. Aumentar tamanho: w-20 h-20 → w-24 h-24
2. Mudar background: from-primary/20 → from-primary to-primary-glow
3. Adicionar animação: animate-float → animate-glow-pulse
4. Mudar cor do ícone: text-primary → text-background
5. Aumentar ícone interno: w-10 h-10 → w-12 h-12

**Critérios de Aceitação:**

- [ ] Ícone tem efeito de glow verde pulsante
- [ ] Tamanho aumentado para maior destaque
- [ ] Animação suave e não distrai

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

---

### TASK-006: Otimizar Box de Recompensas

> **PRD Ref:** Seção 3.1 - REQ-TUT-004
> **Prioridade:** ALTA
> **Status:** ⬜ NÃO INICIADA

**Situação Atual:**

- Box de recompensas JÁ EXISTE (Linhas 147-164)
- Pode ser otimizado para ser mais chamativo

**Código Atual (Linhas 147-164):**

```tsx
<div className="premium-card p-4 mb-6 bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
  <h3 className="font-bold text-success mb-3 flex items-center gap-2">
    <Trophy className="w-5 h-5" />
    Recompensas Possíveis
  </h3>
  <div className="grid grid-cols-3 gap-3 text-center text-xs">...</div>
</div>
```

**Código de Referência (Linhas 128-136):**

```tsx
<div className="mt-6 p-4 bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl border border-success/20">
  <div className="flex items-center justify-between">
    <span className="text-sm text-foreground/80">Recompensa Máxima:</span>
    <div className="flex items-center gap-3">
      <span className="text-warning font-bold">+300 XP</span>
      <span className="text-gold font-bold">+120 Coins</span>
    </div>
  </div>
</div>
```

**Análise:**

- Formato atual (grid 3 cols) vs referência (flex between)
- Ambos funcionais, mas PRD menciona usar valores do antigo
- Atualizar valores para: +300 XP, +120 Coins

**Critérios de Aceitação:**

- [ ] Box claramente destacado
- [ ] Valores atualizados se necessário
- [ ] Visual consistente com resto do funil

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

---

### TASK-007: Aumentar Tamanho do Círculo

> **PRD Ref:** Seção 3.2 - REQ-EXEC-002
> **Prioridade:** ALTA
> **Status:** ⬜ NÃO INICIADA

**Problema:**

- Círculo atual é pequeno: `w-40 h-40` (160px)
- Referência usa: `w-64 h-64` (256px) - 60% maior!

**Código Atual (Linha 206):**

```tsx
<div className={`
  w-40 h-40 rounded-full bg-gradient-to-br ${breathColor}
  transition-all duration-1000 ease-in-out ${breathScale}
  shadow-lg animate-glow-pulse
`}>
```

**Código de Referência (Linha 236):**

```tsx
<div
  className={`w-64 h-64 rounded-full bg-gradient-to-br ${getPhaseColor()} flex items-center justify-center transition-all duration-1000 ease-in-out shadow-2xl`}
  style={{ transform: `scale(${scaleValue})` }}
>
```

**Mudanças Necessárias:**

1. Tamanho: w-40 h-40 → w-64 h-64
2. Sombra: shadow-lg → shadow-2xl
3. Remover classe breathScale, usar style transform
4. Adicionar conteúdo interno (texto + contador)

**Critérios de Aceitação:**

- [ ] Círculo com tamanho w-64 h-64 (256px)
- [ ] Ocupa mais espaço da tela (mais imersivo)
- [ ] Sombra mais pronunciada (shadow-2xl)

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

---

### TASK-008: Implementar Feedback de Dopamina

> **PRD Ref:** Seção 3.2 - REQ-EXEC-005
> **Prioridade:** ALTA
> **Status:** ⬜ NÃO INICIADA

**Problema:**

- Falta elementos que estimulem dopamina ("tipo joguinho de cassino")
- Sistema de pontos existe mas não tem feedback empolgante

**Elementos a Implementar:**

1. **Contador de XP em tempo real** com animação
   - Referência Linha 231-234: `+{totalTime * 5} XP • +{Math.floor(totalTime * 2)} Coins`
2. **Animação de números incrementando**
3. **Timer grande e visível** no topo
4. **Possíveis partículas** ao ganhar pontos (opcional)

**Critérios de Aceitação:**

- [ ] XP/Coins atualizam em tempo real na tela
- [ ] Números têm animação ao incrementar
- [ ] Feedback visual quando ganha pontos
- [ ] Timer grande e destacado

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

---

### TASK-009: Redesign da Tela de Conclusão

> **PRD Ref:** Seção 3.3 - REQ-CONC-001
> **Prioridade:** ALTA
> **Status:** ⬜ NÃO INICIADA

**Problema:**

- Design atual "quebrou totalmente" e está "péssimo"
- Inconsistente com resto do funil

**Código Atual (Linhas 254-311):**

- Background inline style com gradiente roxo
- Card com rgba e backdrop-filter
- Layout básico mas funcional

**Código de Referência (Linhas 167-199):**

- Usa classes do design system (bg-background, glass-panel)
- Grid de 2 colunas para XP e Coins
- Animação animate-bounce-in e animate-success-burst
- Botão com gradiente animado

**Mudanças Necessárias:**

1. Usar design system em vez de inline styles
2. Implementar grid de recompensas
3. Adicionar animações de celebração
4. Manter consistência visual

**Critérios de Aceitação:**

- [ ] Design consistente com resto do funil
- [ ] Usa design system (não inline styles)
- [ ] Animações de celebração funcionando
- [ ] Informações claras e legíveis

**Backup:** `bkps/Step6BreathingChallenge.tsx.bkp_YYYYMMDD_HHMMSS`

---

### TASK-010: Som Opcional

> **PRD Ref:** Seção 3.2 - REQ-EXEC-006
> **Prioridade:** BAIXA
> **Status:** ⬜ NÃO INICIADA

**Nota do PRD:**

- "se possível ter algum som e tal, mas não precisa"
- Implementar apenas se houver tempo após outras tarefas

**Critérios de Aceitação:**

- [ ] Sons de feedback sutis (se implementado)
- [ ] Toggle para desativar sons
- [ ] Não bloqueia funcionamento se não implementado

---

## 📌 REGISTRO DE ALTERAÇÕES

| Data       | Task             | Status | Backup | Observações              |
| ---------- | ---------------- | ------ | ------ | ------------------------ |
| 11/12/2025 | Criação TASKS.md | ✅     | N/A    | Documento inicial criado |
| -          | -                | -      | -      | -                        |

---

## 🔗 LINKS IMPORTANTES

- **STATUS.md:** [STATUS.md](STATUS.md)
- **PRD:** [docs/dev/etapa_5/PRD_1_Claude.md](docs/dev/etapa_5/PRD_1_Claude.md)
- **Componente Raiz:** [src/components/steps/Step6BreathingChallenge.tsx](src/components/steps/Step6BreathingChallenge.tsx)
- **Componente Referência:** [util/funilrespiralivre-oficial/src/components/challenges/Challenge1Breathing.tsx](util/funilrespiralivre-oficial/src/components/challenges/Challenge1Breathing.tsx)
- **Pasta Backups:** [bkps/](bkps/)

---

# ETAPA 5 - DESAFIO MINDFULNESS (BOTÃO DE EMERGÊNCIA)

> **PRD de Referência:** [PRD.md](PRD.md) (Raiz do projeto - 1760 linhas)
> **Arquivo de Status:** [STATUS.md](STATUS.md) > **Data de Início:** 17/12/2025

---

## 📋 VISÃO GERAL - ETAPA 5

Este arquivo rastreia todas as tarefas e subtarefas para **redesign completo** do **Desafio Mindfulness** (Etapa 5 do funil).

**Componente Atual:** `src/components/steps/Step7MindfulnessChallenge.tsx` (363 linhas - A SER SUBSTITUÍDO)
**Designs de Referência Aprovados:**

- Desafio Foco Laser: `src/components/steps/Step9FocusChallenge.tsx`
- Desafio Memória Livre: (verificar estrutura visual)

---

## 🗂️ ESTRUTURA DE BACKUPS - ETAPA 5

| Arquivo                       | Backup       | Localização                                              |
| ----------------------------- | ------------ | -------------------------------------------------------- |
| Step7MindfulnessChallenge.tsx | **PENDENTE** | `bkps/Step7MindfulnessChallenge.tsx.bkp_YYYYMMDD_HHMMSS` |

---

## 📊 FASES DE IMPLEMENTAÇÃO - ETAPA 5 (Conforme PRD Seção 10.1)

### FASE 1 MVP - CRÍTICO (4-6 semanas) ⬜ NÃO INICIADA

#### Sprint 1-2: Fundação Visual e Apresentação

- [ ] **TASK-E5-001:** REQ-VISUAL-001 - Estrutura de card padrão (igual Foco Laser)
  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.2, REQ-VISUAL-001
  - Código de Referência: `Step9FocusChallenge.tsx` (estrutura visual)
- [ ] **TASK-E5-002:** REQ-VISUAL-002 - Paleta turquesa/verde água

  - Componente: `Step7MindfulnessChallenge.tsx`
  - Cores: #00CED1 (Turquesa) ou #3EB489 (Verde Água)
  - PRD Ref: Seção 5.1, Paleta do Novo Desafio Mindfulness

- [ ] **TASK-E5-003:** REQ-VISUAL-003 - Ícone do desafio com badge de nível

  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.2, REQ-VISUAL-003
  - Sugestões: cérebro com ondas, olho mindful, mão em mudra

- [ ] **TASK-E5-004:** REQ-VISUAL-004 - Seção "Como Funciona" com 3 passos

  - Componente: `Step7MindfulnessChallenge.tsx` (tela instructions)
  - PRD Ref: Seção 3.2, REQ-VISUAL-004
  - Passos: Observar, Registrar, Completar (ou similar)

- [ ] **TASK-E5-005:** REQ-VISUAL-005 - Card de Recompensas (+150 XP, +50 Coins)

  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.2, REQ-VISUAL-005

- [ ] **TASK-E5-006:** REQ-VISUAL-006 - Botão CTA full-width
  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.2, REQ-VISUAL-006

#### Sprint 3-4: Mecânica Core e Tela de Execução

- [ ] **TASK-E5-007:** REQ-EXEC-001 - Layout da tela principal de execução

  - Componente: `Step7MindfulnessChallenge.tsx` (tela challenge)
  - PRD Ref: Seção 3.3, REQ-EXEC-001
  - Layout: fundo preto, barra de progresso, botão grande central

- [ ] **TASK-E5-008:** REQ-EXEC-002 - Botão central grande

  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.3, REQ-EXEC-002
  - Formato: círculo perfeito, 60-70% da largura
  - Valor: +3 pontos por clique

- [ ] **TASK-E5-009:** REQ-EXEC-003 - 3 botões sensoriais

  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.3, REQ-EXEC-003
  - Botões: "👁️ Ver" (+1pt), "👂 Ouvir" (+3pts), "✋ Sentir" (+5pts)

- [ ] **TASK-E5-010:** REQ-MIND-004 - Sistema de pontuação diferenciada

  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.1, REQ-MIND-004
  - Cálculo: Ver=1, Ouvir=3, Sentir=5, Central=(1+3+5)/3=3

- [ ] **TASK-E5-011:** REQ-EXEC-004 - Display de pontuação em tempo real

  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.3, REQ-EXEC-004
  - Formato: "Pontos: X / 9 mínimo"

- [ ] **TASK-E5-012:** REQ-MIND-005 - Mínimo 9 pontos para completar

  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.1, REQ-MIND-005
  - Lógica: Botão "Concluir" só aparece quando pontos >= 9

- [ ] **TASK-E5-013:** REQ-EXEC-005 - Botão "Concluir" condicional
  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.3, REQ-EXEC-005
  - Animação: slide-up suave quando pontos >= 9

#### Sprint 5-6: Feedback, Animações e Conclusão

- [ ] **TASK-E5-014:** REQ-MIND-006 - Feedback visual e animações

  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.1, REQ-MIND-006
  - Animações: pulso de cor, vibração, "+X" flutuando

- [ ] **TASK-E5-015:** REQ-EXEC-006 - Mensagens de estado

  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.3, REQ-EXEC-006
  - Mensagens: inicial, mínimo atingido, excelente (15+)

- [ ] **TASK-E5-016:** REQ-EXEC-007 - Tela de conclusão customizada

  - Componente: `Step7MindfulnessChallenge.tsx` (tela completed)
  - PRD Ref: Seção 3.3, REQ-EXEC-007
  - Usar design system (não inline styles)

- [ ] **TASK-E5-017:** REQ-CORR-001 - Remover desafio antigo
  - Componente: `Step7MindfulnessChallenge.tsx`
  - PRD Ref: Seção 3.4, REQ-CORR-001
  - Ação: Substituir código antigo pelo novo

---

### FASE 2 - ESSENCIAL (Otimizações de UX) ⬜ NÃO INICIADA

- [ ] **TASK-E5-018:** REQ-VISUAL-007 - Espaçamento e hierarquia
- [ ] **TASK-E5-019:** REQ-MIND-007 - Garantir ausência de limite de tempo
- [ ] **TASK-E5-020:** REQ-MIND-008 - Mensagens de incentivo à honestidade

---

### FASE 3 - ACESSIBILIDADE (Polish) ⬜ NÃO INICIADA

- [ ] **TASK-E5-021:** Implementar contraste WCAG AA
- [ ] **TASK-E5-022:** Garantir áreas de toque adequadas (44x44px)
- [ ] **TASK-E5-023:** Suporte a screen readers

---

## 📌 REGISTRO DE ALTERAÇÕES - ETAPA 5

| Data       | Task                  | Status | Backup | Observações                  |
| ---------- | --------------------- | ------ | ------ | ---------------------------- |
| 17/12/2025 | Criação seção Etapa 5 | ✅     | N/A    | Baseado em PRD.md atualizado |
| -          | -                     | -      | -      | -                            |

---

## 🔗 LINKS IMPORTANTES - ETAPA 5

- **STATUS.md:** [STATUS.md](STATUS.md)
- **PRD Mindfulness:** [PRD.md](PRD.md) (Raiz do projeto)
- **Componente Atual:** [src/components/steps/Step7MindfulnessChallenge.tsx](src/components/steps/Step7MindfulnessChallenge.tsx)
- **Referência Visual (Foco Laser):** [src/components/steps/Step9FocusChallenge.tsx](src/components/steps/Step9FocusChallenge.tsx)
- **Pasta Backups:** [bkps/](bkps/)
