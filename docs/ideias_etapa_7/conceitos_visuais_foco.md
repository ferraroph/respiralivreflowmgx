# 🎮 10 CONCEITOS VISUAIS COMPLETOS - DESAFIO FOCO v2.0

> **Mantendo:** As 12 ideias de mecânicas anteriores (HP, combos, etc.)
> **Adicionando:** Conceitos COMPLETOS de layout, visual, estilo, dinâmica

---

## 🌌 CONCEITO 1: ARENA ESPACIAL

**Estilo Visual:**

- Fundo: Espaço profundo com estrelas (partículas lentas)
- Paleta: Preto + azul elétrico + roxo cósmico + verde neon para positivos
- Inimigos: Asteroides/meteoros pegando fogo, representando gatilhos
- Player: Escudo circular no centro da tela

**Layout:**

```
┌─────────────────────────────────┐
│  HP ████████████  SCORE: 1250   │
│                                  │
│        ☄️     ☄️                 │
│    ☄️              ☄️            │
│          [ESCUDO]               │
│      ☄️      ☄️       ☄️         │
│                                  │
│   COMBO: x5    TEMPO: 32s       │
└─────────────────────────────────┘
```

**Dinâmica:**

- Asteroides vêm de TODAS direções em direção ao centro
- Player clica para "destruir" antes de atingir o escudo
- Se atingir o escudo = perde HP
- Fundo tem parallax (camadas de estrelas)

**Tema Narrativo:**
"Sua mente é o escudo. Os gatilhos são meteoros tentando destruir sua paz."

---

## ⚔️ CONCEITO 2: DEFESA DE CASTELO (Tower Defense Simplificado)

**Estilo Visual:**

- Fundo: Castelo/fortaleza no centro-inferior da tela
- Paleta: Dourado + preto + vermelho para inimigos
- Inimigos: Soldados/monstros subindo pela lateral
- Estilo: Medieval pixel art ou flat minimal

**Layout:**

```
┌─────────────────────────────────┐
│  MURO: ████████   OURO: 450     │
│                                  │
│  👹  👹        👹   👹            │
│    👹     👹         👹          │
│       [ÁREA DE TOQUE]           │
│                                  │
│   🏰🏰🏰🏰 [CASTELO] 🏰🏰🏰🏰     │
│         ONDA: 2/5               │
└─────────────────────────────────┘
```

**Dinâmica:**

- Inimigos surgem do topo e descem
- Clicar elimina; se chegam ao muro = dano
- Sistema de ONDAS (wave 1, 2, 3...)
- Boss no final da última onda

**Tema Narrativo:**
"Defenda sua fortaleza mental. Cada gatilho que passa enfraquece seus muros."

---

## 🍎 CONCEITO 3: FRUIT NINJA / SLASH MODE

**Estilo Visual:**

- Fundo: Gradiente escuro com splash de cores
- Paleta: Fundo escuro + frutas/objetos coloridos vibrantes
- Inimigos: "Gatilhos" voando pela tela (cigarros, bebidas, etc.)
- Rastro: Trail visual do mouse/dedo ao arrastar

**Layout:**

```
┌─────────────────────────────────┐
│  SCORE: 1250      VIDAS: ❤️❤️❤️  │
│                                  │
│      🚬         🍺              │
│           🔥        🚬          │
│     ━━━━━━━━━━━━ (slash trail)  │
│  💣              ⭐              │
│                                  │
│        COMBO: x7 FRENZY!        │
└─────────────────────────────────┘
```

**Dinâmica:**

- Objetos são LANÇADOS de baixo pra cima (arco parabólico)
- ARRASTAR o dedo/mouse para cortar (não clicar)
- Bombas = não cortar (perde vida)
- Estrelas = power-ups
- Frenzy mode = múltiplos objetos

**Tema Narrativo:**
"Corte suas tentações antes que dominem você."

**Bibliotecas:** Canvas API para trail, framer-motion para física

---

## 🎵 CONCEITO 4: RHYTHM / BEAT SYNC

**Estilo Visual:**

- Fundo: Visualizador de áudio (ondas/barras pulsando)
- Paleta: Neon synthwave (roxo, rosa, ciano, preto)
- Inimigos: Notas/alvos descendo em "pista"
- Linha de hit: Barra no bottom onde precisa clicar

**Layout:**

```
┌─────────────────────────────────┐
│  SCORE: 2400    PERFECT x12     │
│                                  │
│    ↓     ↓     ↓     ↓          │
│      ●       ●     ●            │
│        ●   ●         ●          │
│    ●         ●   ●              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  [A]   [S]   [D]   [F]          │
│       TIMING: PERFECT           │
└─────────────────────────────────┘
```

**Dinâmica:**

- Notas descem em colunas (estilo Guitar Hero)
- Precisa pressionar tecla ou clicar no momento certo
- Perfect / Good / Miss rankings
- BPM aumenta gradualmente
- Música de fundo com beat

**Tema Narrativo:**
"Encontre seu ritmo interior. Cada batida perfeita fortalece seu foco."

**Bibliotecas:** Web Audio API, howler.js para sync

---

## 🎯 CONCEITO 5: SNIPER / PRECISION SHOT

**Estilo Visual:**

- Fundo: Campo de treinamento militar escuro
- Paleta: Verde militar + preto + laranja para alvos
- Inimigos: Alvos/silhuetas aparecendo em "janelas"
- Crosshair: Mira de sniper seguindo o mouse

**Layout:**

```
┌─────────────────────────────────┐
│  SCORE: 1800    BALAS: ∞        │
│                                  │
│  ┌───┐     ┌───┐     ┌───┐      │
│  │ 🎯│     │   │     │🎯 │      │
│  └───┘     └───┘     └───┘      │
│                                  │
│  ┌───┐     ┌───┐     ┌───┐      │
│  │   │     │🎯 │     │   │      │
│  └───┘     └───┘     └───┘      │
│       [+] CROSSHAIR             │
│  PRECISÃO: 87%   TEMPO: 28s     │
└─────────────────────────────────┘
```

**Dinâmica:**

- Alvos aparecem em "janelas" fixas (grid 3x2 ou 4x3)
- Tempo de exposição curto (0.8-1.5s)
- Crosshair de sniper no mouse
- Som de tiro ao clicar
- Feedback: flash na janela

**Tema Narrativo:**
"Treine sua mira mental. Cada gatilho exige precisão cirúrgica."

---

## 🔬 CONCEITO 6: CÉLULA / BIOLÓGICO

**Estilo Visual:**

- Fundo: Interior de corpo humano (microscópio)
- Paleta: Tons orgânicos (rosa, vermelho, azul celeste)
- Inimigos: Vírus/bactérias (representando toxinas do cigarro)
- Player: Anticorpo/célula branca no centro

**Layout:**

```
┌─────────────────────────────────┐
│  PULMÃO: ████████░░   SCORE     │
│                                  │
│    🦠    🦠        🦠            │
│        🦠      🦠                │
│          [CÉLULA]   🦠          │
│    🦠         🦠       🦠        │
│                                  │
│   TOXINAS ELIMINADAS: 24        │
└─────────────────────────────────┘
```

**Dinâmica:**

- Vírus flutuam organicamente (movimento não-linear)
- Clicar para "absorver" toxina
- Barra de saúde do pulmão que recupera ao eliminar
- Visual de limpeza progressiva
- Partículas de "purificação"

**Tema Narrativo:**
"Seu corpo está se regenerando. Elimine as toxinas acumuladas."

---

## 🌪️ CONCEITO 7: VÓRTEX / ZONA DE CONTROLE

**Estilo Visual:**

- Fundo: Vórtex/espiral hipnótico girando
- Paleta: Gradiente escuro circular
- Inimigos: Surgem das bordas e são puxados pro centro
- Centro: Zona de "paz" que você protege

**Layout:**

```
┌─────────────────────────────────┐
│  SCORE: 1400    FOCO: ████████  │
│                                  │
│              ↘ ↙                 │
│        👹 ↘     ↙ 👹             │
│      👹 →  [PAZ]  ← 👹           │
│        👹 ↗     ↖ 👹             │
│              ↗ ↖                 │
│                                  │
│   ELIMINADOS: 34   ONDA: 3      │
└─────────────────────────────────┘
```

**Dinâmica:**

- Vórtex visual puxando inimigos pro centro
- Inimigos se movem em espiral pra dentro
- Precisa clicar antes de chegarem
- Velocidade aumenta com as ondas
- Efeito de "portal" no centro

**Tema Narrativo:**
"Mantenha o centro de paz. Não deixe os gatilhos chegarem ao núcleo."

---

## ⚡ CONCEITO 8: REFLEXOS ELÉTRICOS

**Estilo Visual:**

- Fundo: Circuito/placa eletrônica escura
- Paleta: Preto + verde neon + azul elétrico
- Inimigos: "Cargas negativas" percorrendo trilhas
- Feedback: Raios/faíscas ao eliminar

**Layout:**

```
┌─────────────────────────────────┐
│  ENERGIA: ⚡⚡⚡⚡⚡   SCORE: 1600  │
│                                  │
│  ═══╗    ─────╗    ═════╗       │
│     ║  ⚫      ║  ⚫     ║       │
│     ╚════════╝═══════╝         │
│           ⚫     ⚫              │
│  ═══════════════════════       │
│                                  │
│   REFLEXO: 0.32s   COMBO: x4    │
└─────────────────────────────────┘
```

**Dinâmica:**

- Cargas se movem por "trilhas" de circuito
- Movimento previsível (seguem os caminhos)
- Clicar gera "descarga" que elimina
- Múltiplas rotas = precisa escolher prioridade
- Tempo de reação medido e exibido

**Tema Narrativo:**
"Redirecione sua energia neural. Bloqueie os sinais negativos."

---

## 🎪 CONCEITO 9: GALERIA DE TIRO (Classic Arcade)

**Estilo Visual:**

- Fundo: Feira/galeria de tiro estilizada
- Paleta: Cores de parque de diversão (vermelho, amarelo, azul)
- Inimigos: Patos/alvos em pé passando horizontalmente
- Estilo: Retrô cartoon

**Layout:**

```
┌─────────────────────────────────┐
│  🏆 1250 PTS     🔫 BALAS: ∞    │
│                                  │
│  NÍVEL 1: ──🎯──🎯──🎯───→      │
│  NÍVEL 2: ←───🎯──🎯──🎯──      │
│  NÍVEL 3: ──🎯────🎯──→         │
│                                  │
│        👆 (crosshair)            │
│                                  │
│   ACERTOS: 18/25   TEMPO: 20s   │
└─────────────────────────────────┘
```

**Dinâmica:**

- Alvos passam horizontalmente em "trilhos"
- Múltiplos níveis com velocidades diferentes
- Alguns vão pra esquerda, outros pra direita
- Alvos especiais (dourados) = mais pontos
- Alvos vermelhos = não atirar

**Tema Narrativo:**
"É hora do treino na galeria. Mire certeiro, evite os falsos."

---

## 👊 CONCEITO 10: BOSS RUSH (Focus Boss Battle)

**Estilo Visual:**

- Fundo: Arena épica escura com luzes
- Paleta: Preto + vermelho ameaçador + verde heroico
- Boss: Monstro GRANDE no topo/centro
- Player: HP bar no bottom

**Layout:**

```
┌─────────────────────────────────┐
│  BOSS HP: ████████████░░░░░     │
│                                  │
│         ╔═══════════╗           │
│         ║   👹👹👹   ║ ← BOSS   │
│         ╚═══════════╝           │
│                                  │
│    ⚡        ⚡        ⚡         │
│         [ATIRAR]                │
│                                  │
│  SEU HP: ████████░░   DPS: 45   │
└─────────────────────────────────┘
```

**Dinâmica:**

- Boss único com HP bar grande
- Atacar boss = cliques repetidos no botão ou no boss
- Boss solta "minions" que precisam ser eliminados
- Minions que chegam = você leva dano
- Boss tem fases (muda comportamento com 50%, 25% HP)
- Ataque especial do boss = sequência rápida de eliminação

**Tema Narrativo:**
"Enfrente o Guardião do Vício. Só você pode derrotá-lo."

**REF do PRD:** REQ-FOC-006 - Boss Battle

---

# 📊 COMPARATIVO DE CONCEITOS

| #   | Nome           | Complexidade | Visual    | Diferencial                  |
| --- | -------------- | ------------ | --------- | ---------------------------- |
| 1   | Arena Espacial | Média        | Épico     | Parallax, direções múltiplas |
| 2   | Defesa Castelo | Alta         | Medieval  | Sistema de ondas, estrutura  |
| 3   | Fruit Ninja    | Alta         | Vibrante  | Arrastar ao invés de clicar  |
| 4   | Rhythm Beat    | Alta         | Synthwave | Sincronização com música     |
| 5   | Sniper         | Baixa        | Militar   | Grid fixo, precisão          |
| 6   | Célula         | Média        | Orgânico  | Movimento fluido, temático   |
| 7   | Vórtex         | Média        | Hipnótico | Movimento espiral            |
| 8   | Elétrico       | Média        | Tech/Neon | Trilhas previsíveis          |
| 9   | Galeria Tiro   | Baixa        | Retrô     | Múltiplos níveis horizontais |
| 10  | Boss Rush      | Alta         | Épico     | Foco em boss único           |

---

# 🎯 RECOMENDAÇÃO

Para o contexto do funil (mobile-first, tema de parar de fumar, design dark premium):

**TOP 3 MAIS ADEQUADOS:**

1. **CONCEITO 6 (Célula)** - Temático, conecta com saúde, movimento orgânico
2. **CONCEITO 1 (Arena Espacial)** - Visual épico, fácil de implementar
3. **CONCEITO 5 (Sniper)** - Simples e eficaz, grid fixo

**AGUARDANDO SUA ESCOLHA DO CONCEITO VISUAL.**
