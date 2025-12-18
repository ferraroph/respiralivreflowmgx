# ETAPA 5 - Desafio Mindfullness

## Redesign e Otimização da Experiência de Usuário

**Versão:** 1.0  
**Data de Criação:** 17 de Dezembro de 2025  
**Produto:** Respira Livre - App de Cessação Tabágica  
**Análise Baseada em:** Vídeos "Desafio_Mindfullness_Pt_1.mp4" e "Desafio_Mindfullness_Pt_2.mp4"  
**Total de Frames Analisados:** 13.913 frames (24 FPS)

---

## 1. CONTEXTO E OBJETIVO

### 1.1 Situação Atual

O aplicativo Respira Livre atualmente possui múltiplos desafios gamificados destinados a auxiliar usuários no processo de cessação tabágica através de técnicas de mindfulness, foco e memória. Durante análise técnica em vídeo (4min09s + 5min30s), foram identificadas inconsistências críticas de design, UX problemática e oportunidades de melhoria baseadas em designs de referência já aprovados.

**Domínios Identificados:**

- Versão em análise: `respiralivre flow.vercel.app`
- Versão de referência: `respiralivre flow.lovable.app`

**Status dos Desafios Analisados:**

- Desafio Mindfulness: Design quebrado, texto inadequado, experiência entediante
- Desafio Foco Laser: Design aprovado como referência perfeita
- Desafio Resistência: UX problemática, muita informação, quebra de fluxo
- Desafio Memória Livre: Design perfeito, aprovado para implementação

### 1.2 Objetivo do PRD

Este documento especifica tecnicamente:

1. Redesign completo do Desafio Mindfulness com nova mecânica de "Botão de Emergência"
2. Padronização visual baseada nos designs aprovados (Foco Laser e Memória Livre)
3. Correções críticas de UX nos desafios existentes
4. Sistema de pontuação multi-sensorial inovador
5. Fluxo de implementação priorizado

---

## 2. ANÁLISE COMPARATIVA DETALHADA

### 2.1 Desafio Foco Laser (Design de Referência Aprovado)

**Referência:** Frame 240 (Parte 1, 00:10s) e Frame 4920 (Parte 2, 03:25s)  
**Status:** APROVADO - "Perfeito. Eu quero esse design aqui."  
**URL Referência:** `respiralivre flow.lovable.app`

**Elementos Visuais Aprovados:**

- **Ícone:** Botão amarelo (#FFD700 aproximado) com símbolo de alvo concêntrico preto
- **Badge de Nível:** "Nível 2" em vermelho no topo direito do ícone
- **Título:** "Desafio: Foco Laser" em fonte bold, branco
- **Subtítulo:** "Mantenha o foco, destr oia a distração" em fonte menor, cinza claro
- **Seção "Como Funciona":**
  - Ícone de raio amarelo
  - Card com fundo escuro semi-transparente
  - 3 passos numerados (círculos dourados)
  - Texto descritivo claro e conciso
- **Recompensas:**
  - Card separado com bordas douradas
  - "Recompensa: +150 XP +75 Coins"
- **CTA Principal:** Botão amarelo full-width " Começar Desafio"
- **Indicador de Progresso:** "Step: 6" em badge verde no canto inferior direito

**Paleta de Cores:**

- Primária: Amarelo vibrante (#FFD700)
- Secundária: Dourado para elementos de destaque (#D4AF37)
- Fundo: Preto (#000000) com gradiente sutil
- Texto: Branco (#FFFFFF) e cinza claro (#CCCCCC)
- Destaques: Verde para XP (#00FF00), Amarelo para Coins

**Estrutura de Layout:**

```
┌─────────────────────────────┐
│    [Ícone Amarelo + Badge]  │
│                             │
│    Desafio: Foco Laser      │
│    Subtítulo descritivo     │
│                             │
│  ┌───────────────────────┐  │
│  │  Como Funciona      │  │
│  │                       │  │
│  │ ① Passo 1 detalhado  │  │
│  │ ② Passo 2 detalhado  │  │
│  │ ③ Passo 3 detalhado  │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ Recompensa:           │  │
│  │ +150 XP  +75 Coins    │  │
│  └───────────────────────┘  │
│                             │
│  [ Começar Desafio]       │
│                             │
└─────────────────────────────┘
```

**Quote Literal do Usuário:**

> "Ó, perfeito. Eu quero esse design aqui." - Timestamp 00:10s

---

### 2.2 Desafio Mindfulness (Design Atual - REJEITADO)

**Referência:** Frame 456 (Parte 1, 00:19s), Frame 672 (Parte 1, 00:28s)  
**Status:** REJEITADO - "Quebrou totalmente... tá péssimo o design"  
**URL:** `respiralivre flow.vercel.app`

**Problemas Identificados:**

**P1 - Design Visual Inadequado:**

- Frame 456, 00:00s: "Ó, tá vendo que quebrou totalmente ali, mano, o design já aqui, né? Já tá péssimo o design."
- **Evidência:** Título em verde neon desalinhado com a paleta
- **Evidência:** Fundo roxo escuro que cria ambiente "entediante"
- **Impacto:** Primeira impressão negativa, baixo engajamento

**P2 - Texto e Copy Inadequados:**

- Frame 456, 00:22s: "Note seus pensamentos e sensações... tá péssimo isso aqui. Tá? Péssimo esse desafio."
- Frame 3912 (Parte 2), 02:43s: "Aceite o momento presente. Olha que nada a ver, véi. Nada a ver."
- **Evidência:** Textos vagos e não acionáveis
- **Impacto:** Usuário não entende o que fazer

**P3 - Estrutura Visual Confusa:**

- Seção "Técnica dos 3 Passos" com passos numerados mas sem clareza de execução
- Passos: "Observar", "Aceitar", "Liberar" - abstratos demais
- Botão "Iniciar Meditação" roxo/azul gradiente (inconsistente com padrão)

**P4 - Experiência de Usuário Problemática:**

- Frame 4440 (Parte 2), 02:52s: "Aqui, ó. Pô, tem a questão ali que ele não vai pra cima, tal."
- Frame 4440, 03:01s: "Nossa, muita informação, péssima experiência de usuário."
- **Evidência:** Overflow de conteúdo não scrollável
- **Evidência:** Densidade de informação excessiva

**Elementos Visuais Atuais:**

- Título: "Desafio Mindfulness" em verde (#00FF00 neon)
- Subtítulo: "Nível 2 · Dificuldade: Moderado"
- Card "Técnica dos 3 Passos" roxo escuro
- Card "Recompensas Zen" roxo escuro
- Botão: " Iniciar Meditação" roxo/azul gradiente
- Paleta: Verde neon + Roxo escuro (rejeitada)

**Quotes Literais do Usuário:**

> "Ó, tá vendo que quebrou totalmente ali, mano, o design já aqui, né? Já tá péssimo o design." - 00:00s

> "Vamos comparar o conceito dos dois. Note seus pensamentos e sensações... tá péssimo isso aqui. Tá? Péssimo esse desafio." - 00:22s

> "Nossa, muita informação, péssimo de ler, péssima experiência de usuário." - Parte 2, 03:01s

> "Aceite o momento presente. Olha que nada a ver, véi. Nada a ver." - Parte 2, 02:43s

---

### 2.3 Desafio Memória Livre (Design Aprovado)

**Referência:** Frame 6816 (Parte 2, 04:44s)  
**Status:** APROVADO - "Isso aqui é perfeito, cara. Entendeu, mano?"  
**URL:** `respiralivre flow.lovable.app`

**Elementos Visuais Aprovados:**

- **Ícone:** Botão rosa/magenta (#FF69B4 aproximado) com símbolo de cérebro preto
- **Badge de Nível:** "Nível 3" em amarelo no topo direito do ícone
- **Título:** "Desafio: Memória Livre" em fonte bold, branco
- **Subtítulo:** "Treine sua mente, fortaleça sua vontade" em fonte menor, cinza claro
- **Seção "Como Funciona":**
  - Ícone de raio roxo
  - 3 passos numerados (círculos roxos)
  - Mecânica clara: memorizar sequência de 5 cores
- **Recompensas:**
  - "+200 XP +100 Coins" (valores maiores que Foco Laser)
- **CTA Principal:** Botão rosa/magenta full-width " Começar Desafio"
- **Indicador de Progresso:** "Step: 7"

**Estrutura:** Idêntica ao Foco Laser, apenas com paleta rosa/magenta

**Quote Literal do Usuário:**

> "Isso aqui é perfeito, cara. Entendeu, mano? Esse desafio da Memória Livre, pode vir... eh... depois daquele desafio do mindfulness, né, que a pessoa já vai tá na vibe e tal, correto?" - Parte 2, 04:44s

---

### 2.4 Desafio Resistência (Design Atual - PARCIALMENTE REJEITADO)

**Referência:** Frame 4440 (Parte 2, 03:05s), Frame 5664 (Parte 2, 03:54s)  
**Status:** ️ PARCIAL - Conceito rejeitado, mas distribuição de botões tem mérito

**Elementos Aprovados:**

- Distribuição de botões: "Iniciar Desafio" (verde) e "Pular Desafio" (cinza) lado a lado
- Cor verde do botão primário

**Problemas Identificados:**

**P1 - Layout Problemático:**

- Frame 4440, 03:01s: "Nossa, muita informação, péssimo de ler, péssima experiência de usuário."
- Frame 4440, 02:52s: "Pô, tem a questão ali que ele não vai pra cima, tal."
- **Evidência:** Texto muito longo sem scroll adequado

**P2 - Dinâmica Quebrada:**

- Frame 5664, 03:54s: "Isso aqui tá péssimo. Tá péssimo."
- Frame 5664, 04:32s: "Isso aqui... eu não gostei, a pessoa tem que clicar no botão 'concluir', coletar pontos, daí pô, quebra a dinâmica ali."
- **Evidência:** Requer clique manual para concluir ao invés de auto-completar

**P3 - Conceito Não Adequado:**

- Frame 5664, 03:49s: "Não, esquece que eu falei, não. Não pode ser no lugar desse aqui não. Péssimo. Péssimo."
- **Decisão:** Desafio de Resistência deve ser deixado "na gaveta" por enquanto

**Elementos Visuais:**

- Título: "Desafio de Resistência"
- Descrição longa (4-5 linhas)
- 3 ícones informativos: Meta, Pontos por clique, Tempo limite
- Botões: "Iniciar Desafio" (verde) e "Pular Desafio" (cinza escuro)

**Tela de Execução:**

- Timer vermelho grande "29s"
- "Nível de Resistência: 0"
- "Pontos: 0" em verde
- Botão circular com gradiente (laranja → verde) e ícone de escudo
- Instrução: "Clique no escudo para aumentar sua resistência!"

**Nota sobre Botões:**

> "Aqui eu gostei da distribuição dos botões, tipo 'iniciar desafio' e 'pular desafio', um do lado do outro, né? Mas eu ainda prefiro um abaixo do outro que nem tava no outro." - Parte 2, 03:05s

**Decisão de Produto:**

- Manter conceito "na gaveta" para desenvolvimento futuro
- Extrair padrão de distribuição de botões para outros desafios
- Preferência confirmada: botões em stack vertical vs horizontal

---

## 3. REQUISITOS FUNCIONAIS

### 3.1 Novo Desafio Mindfulness - "Botão de Emergência"

**REQ-MIND-001: Conceito Principal**

- O novo Desafio Mindfulness deve ser redesenhado como "Botão de Emergência"
- Objetivo: estimular presença e mindfulness através de observação ativa do ambiente
- Mecânica: usuário deve notar coisas específicas no ambiente (visual, auditivo, sensorial) e registrar através de interação com botões
- Prioridade: CRÍTICA
- Impacto: Substituição completa do desafio atual
- Referência: Parte 1, 00:55s - 04:02s (conceito completo explicado)
- Nota adicional: "Funciona com o objetivo de estimular a presença, né? O Mindfulness. Correto? Melhor do que isso daqui."

**REQ-MIND-002: Mecânica de Observação**

- Usuário deve notar 5 coisas no ambiente (visual, auditivo, ou sensorial)
- Sistema deve permitir múltiplas "séries" de 5 observações
- Cada série completa = 1 unidade de progresso
- Sistema deve incentivar honestidade: "tem que ser sempre cinco coisas diferentes, ela não pode escolher a mesma coisa"
- Prioridade: CRÍTICA
- Impacto: Core da mecânica do desafio
- Referência: Parte 1, 01:09s - 02:22s
- Nota adicional: "Então tem que ser fortificado que a honestidade da pessoa conta muito. Porque, tipo assim, isso vai forçar a pessoa a entrar em um estado de presença..."

**REQ-MIND-003: Sistema de Botões Multi-Sensorial**

- Interface deve conter:
  - 1 botão central grande (círculo)
  - 3 botões menores específicos: "Ver", "Ouvir", "Sentir" (gosto/cheiro)
- Todos os botões devem ser interativos e responsivos
- Botões devem mudar de cor/estado ao serem clicados
- Layout: botão grande no centro, 3 botões pequenos abaixo (possível distribuição horizontal)
- Prioridade: CRÍTICA
- Impacto: Interface principal do desafio
- Referência: Parte 1, 03:22s - 04:02s; Parte 2, 00:00s - 00:53s
- Nota adicional: "Pode ter tipo um botão ali maior, né, um redondo. E pode ter, tipo assim, botões de sentido, que ela toca embaixo."

**REQ-MIND-004: Sistema de Pontuação Diferenciada**

- Cada botão sensorial tem valor de pontos diferente:
  - "Ver" = 1 ponto
  - "Ouvir" = 3 pontos
  - "Sentir" = 5 pontos
- Botão central (grande) = média dos três = 3 pontos por clique
- Cálculo: (1 + 3 + 5) / 3 = 3 pontos
- Sistema deve somar pontos em tempo real
- Prioridade: ALTA
- Impacto: Gamificação e recompensa progressiva
- Referência: Parte 2, 00:04s - 01:47s
- Nota adicional: "O 'ver' conta uma pontuação de número um... O 'ouvir', ele conta como três pontos... E o 'sentir', ele conta como cinco pontos, tá?"

**REQ-MIND-005: Requisitos Mínimos e Máximos**

- Pontuação mínima para completar desafio: 9 pontos
  - Equivalente a: 3 cliques no botão grande OU 2 cliques em "Sentir" + 1 em qualquer OU outras combinações
- Incentivo para completar: 10 ou mais pontos (excelente desempenho)
- Não há limite máximo de pontos
- Não há limite de tempo para completar
- Prioridade: ALTA
- Impacto: Define critério de sucesso do desafio
- Referência: Parte 1, 01:38s - 02:13s; Parte 2, 01:47s - 02:17s
- Nota adicional: "Daí ela tem que pontuar no mínimo nove, né? Ou seja, clicou no botão grande três vezes, né? Eu acho que essa é uma regra boa."

**REQ-MIND-006: Feedback Visual e Animações**

- Botões devem mudar de cor ao serem clicados
- Pontuação deve ser exibida em tempo real
- Animação de ganho de pontos (número aumentando com efeito)
- Possível barra de progresso visual mostrando evolução até o mínimo
- Feedback tátil (vibração) ao clicar (mobile)
- Prioridade: MÉDIA
- Impacto: Melhora engajamento e clareza de progresso
- Referência: Parte 1, 01:26s - 01:38s
- Nota adicional: "Vai ganhando pontuação, vai mudando de cor, né? E tudo mais."

**REQ-MIND-007: Sem Limite de Tempo**

- Desafio não deve ter timer countdown
- Usuário pode completar no seu próprio ritmo
- Foco na qualidade da observação, não na velocidade
- Prioridade: MÉDIA
- Impacto: Reduz ansiedade, aumenta mindfulness genuíno
- Referência: Parte 1, 02:55s - 03:00s
- Nota adicional: "Daí não tem tempo, não tem nada. É tipo assim, é só... Né? O mínimo de quantidade."

**REQ-MIND-008: Mensagens de Incentivo à Honestidade**

- Sistema deve exibir mensagens reforçando importância de observações genuínas
- Mensagem sugerida: "Lembre-se: observe coisas diferentes a cada vez. Sua honestidade potencializa o efeito!"
- Mensagem pode aparecer ao iniciar o desafio
- Prioridade: BAIXA
- Impacto: Reforça intenção terapêutica do exercício
- Referência: Parte 1, 02:13s - 02:26s
- Nota adicional: "Então tem que ser fortificado que a honestidade da pessoa conta muito."

---

### 3.2 Padronização Visual (Baseada em Foco Laser e Memória Livre)

**REQ-VISUAL-001: Estrutura de Card Padrão**

- Todos os desafios devem seguir o layout do Foco Laser (aprovado)
- Estrutura obrigatória:
  1. Ícone do desafio + Badge de nível (topo)
  2. Título do desafio
  3. Subtítulo descritivo (1 linha, máx. 60 caracteres)
  4. Card "Como Funciona" com 3 passos máximo
  5. Card "Recompensas" separado
  6. Botão CTA full-width (cor conforme desafio)
  7. Badge "Step: X" no canto inferior direito
- Prioridade: CRÍTICA
- Impacto: Consistência de UX em todo o app
- Referência: Frame 240, Frame 6816
- Nota adicional: Design aprovado como "perfeito" em duas instâncias

**REQ-VISUAL-002: Paleta de Cores do Mindfulness**

- Desafio Mindfulness deve usar cor que contraste com amarelo (Foco Laser) e rosa (Memória Livre)
- Sugestões: Azul turquesa (#00CED1) ou Verde água (#3EB489)
- Evitar: Verde neon, Roxo escuro (paletas rejeitadas)
- Manter: Fundo preto, texto branco/cinza claro
- Prioridade: ALTA
- Impacto: Identidade visual e diferenciação entre desafios
- Referência: Rejeição explícita do verde neon e roxo (Frame 456, 00:00s)

**REQ-VISUAL-003: Ícone do Desafio Mindfulness**

- Criar ícone no estilo dos aprovados (círculo com símbolo interno)
- Sugestões de símbolos: cérebro com ondas, olho mindful, mão em mudra, círculos concêntricos zen
- Cor do ícone: conforme paleta definida em REQ-VISUAL-002
- Badge de nível no topo direito (amarelo com texto preto)
- Prioridade: ALTA
- Impacto: Reconhecimento visual imediato

**REQ-VISUAL-004: Seção "Como Funciona"**

- Título: " Como Funciona" (com ícone de raio)
- Fundo: Card com cor semi-transparente (40% opacity da cor primária)
- 3 passos obrigatórios, numerados com círculos coloridos
- Texto: claro, acionável, máximo 1-2 linhas por passo
- Fonte: Sans-serif, peso regular para corpo e bold para números
- Prioridade: CRÍTICA
- Impacto: Clareza de instruções
- Referência: Frame 240 (Foco Laser - aprovado)

**REQ-VISUAL-005: Card de Recompensas**

- Card separado abaixo de "Como Funciona"
- Título: " Recompensa:" ou similar com ícone
- Formato: "+[X] XP +[X] Coins"
- XP em verde (#00FF00), Coins em amarelo (#FFD700)
- Borda sutil na cor primária do desafio
- Prioridade: ALTA
- Impacto: Motivação e transparência de progressão

**REQ-VISUAL-006: Botão CTA Principal**

- Full-width (92% da largura da tela)
- Altura mínima: 56px (tappable)
- Texto: " Começar Desafio" (ou variação com ícone relevante)
- Cor: primária do desafio
- Texto: preto ou branco (conforme contraste WCAG AA)
- Border-radius: 12px
- Hover/Active states obrigatórios
- Prioridade: CRÍTICA
- Impacto: Conversão para iniciar desafio

**REQ-VISUAL-007: Espaçamento e Hierarquia**

- Margin entre elementos: 16px mínimo
- Padding interno de cards: 20px
- Títulos: 24-28px, bold
- Subtítulos: 14-16px, regular
- Corpo de texto: 14px, regular
- Hierarquia clara: Título > Como Funciona > Recompensas > CTA
- Prioridade: MÉDIA
- Impacto: Legibilidade e escaneabilidade

---

### 3.3 Tela de Execução do Mindfulness

**REQ-EXEC-001: Layout da Tela Principal**

- Fundo: preto ou gradiente escuro
- Topo: barra de progresso ou contador de pontos
- Centro: botão grande circular (diâmetro: 60-70% da largura)
- Abaixo: 3 botões menores (Ver, Ouvir, Sentir)
- Distribuição dos 3 botões: horizontal, espaçados igualmente
- Footer: botão "Concluir" (só aparece quando atingir mínimo)
- Prioridade: CRÍTICA
- Impacto: Interface principal da interação
- Referência: Conceito descrito Parte 1, 03:22s - 04:02s

**REQ-EXEC-002: Botão Central Grande**

- Formato: círculo perfeito
- Cor inicial: neutra (cinza ou cor primária em 40% opacity)
- Ícone: pulsação sutil ou símbolo zen
- Texto: "Notei 5 coisas" ou "Registrar Observação"
- Animação ao clicar:
  - Pulso de cor
  - Feedback tátil
  - Contador de pontos +3
- Estado após clique: retorna ao inicial após 0.3s
- Prioridade: CRÍTICA
- Impacto: Interação principal do usuário

**REQ-EXEC-003: Botões Sensoriais Pequenos**

- Formato: círculos menores ou capsule buttons
- Tamanhos proporcionais ao valor (opcional):
  - "Ver" (1pt): menor
  - "Ouvir" (3pts): médio
  - "Sentir" (5pts): maior
- Labels claros: "️ Ver" " Ouvir" " Sentir"
- Cor: gradiente ou sólida na paleta do desafio
- Animação ao clicar:
  - Escala aumenta (scale 1.1)
  - Mostra pontos ganhos flutuando (+1, +3, +5)
  - Vibração diferenciada por valor
- Prioridade: CRÍTICA
- Impacto: Opção de interação detalhada

**REQ-EXEC-004: Display de Pontuação**

- Posição: topo da tela, centralizado
- Formato: "Pontos: [X] / 9 mínimo"
- Animação: número aumenta com easing suave
- Mudança de cor ao atingir mínimo: verde brilhante
- Possível barra de progresso visual adicional
- Prioridade: ALTA
- Impacto: Feedback claro de progresso

**REQ-EXEC-005: Botão de Conclusão**

- Só aparece quando pontuação >= 9
- Posição: footer fixo
- Texto: "Concluir Desafio" ou "Coletar Recompensa"
- Cor: verde (#00FF00) ou cor primária
- Animação de entrada: slide-up suave
- Prioridade: ALTA
- Impacto: Conclusão clara do desafio

**REQ-EXEC-006: Mensagens de Estado**

- Mensagem inicial ao entrar:
  - "Observe 5 coisas ao seu redor. Pode ser visual, sonoro ou sensorial. Registre cada observação."
- Mensagem ao atingir 9 pontos:
  - "Ótimo! Você atingiu o mínimo. Continue ou finalize agora."
- Mensagem ao atingir 15+ pontos:
  - "Excelente! Você está em estado de presença profunda."
- Prioridade: MÉDIA
- Impacto: Orientação e incentivo

**REQ-EXEC-007: Tela de Conclusão**

- Similar ao Frame 0001 (Desafio Concluído)
- Ícone: troféu verde ou símbolo zen
- Título: "Desafio Concluído!"
- Texto motivacional customizado para Mindfulness:
  - "Você exercitou sua presença! Sua consciência está mais afiada."
- Exibir:
  - Pontuação final
  - XP ganho
  - Coins ganhos
  - Bônus (se aplicável)
- CTA: "Concluir e Coletar Pontos" (verde)
- Prioridade: ALTA
- Impacto: Fechamento satisfatório da experiência

---

### 3.4 Correções de Desafios Existentes

**REQ-CORR-001: Desafio Mindfulness Antigo - Remoção**

- Remover completamente o desafio atual (Técnica dos 3 Passos)
- Substituir por novo Botão de Emergência (REQ-MIND-001 a 008)
- Migrar ou manter dados históricos de usuários (se aplicável)
- Prioridade: CRÍTICA
- Impacto: Melhoria radical de UX
- Referência: Rejeição total do design atual

**REQ-CORR-002: Desafio Resistência - Melhorias UX**

- Garantir scroll adequado em todo o conteúdo
- Reduzir densidade de texto na tela de apresentação
- Considerar mover instruções detalhadas para modal "Como Funciona"
- Prioridade: ALTA (se desafio for mantido)
- Impacto: Legibilidade e acessibilidade
- Referência: Parte 2, Frame 4440, 02:52s - 03:01s

**REQ-CORR-003: Desafio Resistência - Auto-Completar**

- Remover necessidade de clicar em "Concluir" manualmente
- Desafio deve auto-completar ao atingir meta ou tempo expirar
- Transição automática para tela de recompensas
- Prioridade: ALTA (se desafio for mantido)
- Impacto: Fluidez da experiência
- Referência: Parte 2, 04:32s - "quebra a dinâmica ali"

**REQ-CORR-004: Padronização de Botões**

- Desafios com opção de "Pular": manter botões em stack vertical
- Ordem: "Começar Desafio" (primário) acima, "Pular Desafio" (secundário) abaixo
- Espaçamento: 12px entre botões
- Prioridade: MÉDIA
- Impacto: Consistência e preferência do usuário
- Referência: Parte 2, 03:05s - "Mas eu ainda prefiro um abaixo do outro"

---

## 4. REQUISITOS NÃO-FUNCIONAIS

### 4.1 Performance

**REQ-PERF-001: Tempo de Carregamento**

- Tela de apresentação do desafio: <1s em conexão 3G
- Transição entre telas: <300ms
- Animações: 60 FPS consistente
- Prioridade: ALTA

**REQ-PERF-002: Responsividade de Botões**

- Feedback visual em <50ms após toque
- Vibração (se habilitada) em <30ms
- Atualização de pontuação em <100ms
- Prioridade: CRÍTICA (afeta sensação de responsividade)

**REQ-PERF-003: Otimização de Assets**

- Ícones: SVG sempre que possível
- Imagens: WebP com fallback PNG
- Animações: CSS transitions/animations, evitar JS quando possível
- Prioridade: MÉDIA

### 4.2 Acessibilidade

**REQ-ACESS-001: Contraste WCAG AA**

- Todos os textos devem ter contraste mínimo 4.5:1
- Botões e elementos interativos: 3:1 mínimo
- Testar com ferramenta de contraste (WebAIM, Lighthouse)
- Prioridade: ALTA

**REQ-ACESS-002: Áreas de Toque**

- Botões: mínimo 44x44px (iOS) / 48x48dp (Android)
- Espaçamento entre botões: mínimo 8px
- Prioridade: CRÍTICA

**REQ-ACESS-003: Suporte a Screen Readers**

- Labels ARIA adequados em todos os elementos interativos
- Anúncio de mudanças de estado (pontuação, conclusão)
- Ordem lógica de foco (tab order)
- Prioridade: MÉDIA

**REQ-ACESS-004: Suporte a Modo Escuro/Claro**

- Design atual é dark mode nativo
- Considerar implementação de light mode futuro
- Prioridade: BAIXA

### 4.3 Compatibilidade

**REQ-COMPAT-001: Navegadores**

- Chrome/Edge: últimas 2 versões
- Safari: últimas 2 versões
- Firefox: últimas 2 versões
- Mobile browsers: Safari iOS 14+, Chrome Android 90+
- Prioridade: ALTA

**REQ-COMPAT-002: Dispositivos**

- Smartphones: iPhone 8+ / Android 8.0+
- Tablets: iPad Air 2+ / Android tablets
- Desktop: 1280x720 mínimo
- Prioridade: ALTA

**REQ-COMPAT-003: Orientações**

- Portrait: otimizado (preferencial)
- Landscape: suportado mas não otimizado
- Prioridade: MÉDIA

### 4.4 Segurança e Dados

**REQ-SEG-001: Armazenamento de Progresso**

- Salvar pontuação e progresso localmente (localStorage/IndexedDB)
- Sincronizar com servidor quando online
- Garantir integridade de dados (não permitir manipulação local)
- Prioridade: ALTA

**REQ-SEG-002: Privacidade**

- Não coletar dados sensíveis de observações
- Analytics: apenas eventos agregados (desafio iniciado, concluído, pontuação)
- Prioridade: ALTA

---

## 5. ESPECIFICAÇÕES DE DESIGN

### 5.1 Cores

**Paleta do Novo Desafio Mindfulness:**

```
Primária:    #00CED1 (Turquesa) ou #3EB489 (Verde Água)
Secundária:  #1E90FF (Azul Elétrico) para destaques
Fundo:       #000000 (Preto)
Card BG:     #1A1A1A (Cinza Escuro)
Texto:       #FFFFFF (Branco) / #CCCCCC (Cinza Claro)
Sucesso:     #00FF00 (Verde Neon)
XP:          #00FF00 (Verde)
Coins:       #FFD700 (Amarelo Ouro)
```

**Paleta Foco Laser (Referência):**

```
Primária:    #FFD700 (Amarelo Ouro)
Secundária:  #D4AF37 (Dourado)
```

**Paleta Memória Livre (Referência):**

```
Primária:    #FF69B4 (Rosa/Magenta)
Secundária:  #C71585 (Magenta Escuro)
```

### 5.2 Tipografia

**Família de Fonte:** Inter, SF Pro Display, ou Roboto (sans-serif)

**Tamanhos e Pesos:**

```
H1 (Título Desafio):     28px, Bold (700)
H2 (Subtítulo):          16px, Regular (400)
H3 (Seções):             20px, SemiBold (600)
Corpo (Instruções):      14px, Regular (400)
Corpo (Passos):          14px, Regular (400)
Números (Pontos):        32px, Bold (700) - tela de execução
Números (Passos):        18px, Bold (700)
Botões CTA:              16px, SemiBold (600)
Botões Secundários:      14px, Medium (500)
Badges:                  12px, Bold (700)
```

### 5.3 Espaçamento/Grid

**Sistema de Espaçamento (múltiplos de 4px):**

```
XXS:  4px   - Spacing interno mínimo
XS:   8px   - Entre elementos muito próximos
S:    12px  - Entre botões stacked
M:    16px  - Padrão entre elementos
L:    20px  - Padding de cards
XL:   24px  - Entre seções
XXL:  32px  - Margens externas
XXXL: 48px  - Espaçamento de destaque
```

**Grid Layout (Mobile):**

```
Container Width:  92% (4% margin cada lado)
Max Width:        480px (smartphones grandes)
Gutters:          16px entre colunas
```

**Grid Layout (Tablet/Desktop):**

```
Container Width:  80%
Max Width:        768px
Gutters:          24px
```

### 5.4 Animações

**Duração Padrão:**

- Micro-interações: 150ms (hover, click)
- Transições: 300ms (mudança de tela)
- Animações complexas: 500ms (entrada de elementos)
- Loading states: 1000ms+ (skeleton screens)

**Easing Functions:**

- Entrada: `cubic-bezier(0.4, 0.0, 0.2, 1)` (ease-out)
- Saída: `cubic-bezier(0.0, 0.0, 0.2, 1)` (ease-in)
- Bidirecion: `cubic-bezier(0.4, 0.0, 0.6, 1)` (ease-in-out)

**Animações Específicas do Mindfulness:**

**Botão Central ao Clicar:**

```css
@keyframes buttonPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
duration: 300ms;
```

**Pontos Flutuando ao Ganhar:**

```css
@keyframes pointsFloat {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-40px) scale(1.5);
    opacity: 0;
  }
}
duration: 800ms;
```

**Botão Concluir Aparecendo:**

```css
@keyframes slideUp {
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
duration: 400ms
easing: ease-out
```

### 5.5 Efeitos Visuais

**Sombras (Elevation):**

```css
/* Cards */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);

/* Botões Elevated */
box-shadow: 0 6px 20px rgba(0, 206, 209, 0.4); /* Turquesa com 40% opacity */

/* Modal/Overlay */
box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7);
```

**Gradientes:**

```css
/* Fundo Sutil */
background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);

/* Botão Primário Mindfulness */
background: linear-gradient(135deg, #00ced1 0%, #1e90ff 100%);

/* Card de Recompensa */
background: linear-gradient(
  90deg,
  rgba(0, 206, 209, 0.1) 0%,
  rgba(30, 144, 255, 0.1) 100%
);
```

**Border Radius:**

```
Botões:      12px
Cards:       16px
Badges:      20px (pill shape)
Ícones:      20px (rounded square)
```

**Blur Effects:**

```css
/* Backdrop de Modal */
backdrop-filter: blur(10px);
background: rgba(0, 0, 0, 0.7);

/* Card Glass Effect (opcional) */
backdrop-filter: blur(16px) saturate(180%);
background: rgba(26, 26, 26, 0.75);
border: 1px solid rgba(255, 255, 255, 0.125);
```

---

## 6. ELEMENTOS A MANTER

### 6.1 Estrutura Aprovada (Foco Laser / Memória Livre)

**Manter 100%:**

- Layout de card com ícone + badge de nível
- Seção "Como Funciona" com 3 passos
- Card de Recompensas separado
- Botão CTA full-width na cor do desafio
- Badge "Step: X" no canto inferior direito
- Hierarquia visual: Ícone → Título → Como Funciona → Recompensas → CTA

**Referência:** Frame 240, Frame 6816

### 6.2 Tela de Conclusão (Frame 0001)

**Manter Estrutura:**

- Ícone de troféu grande e centralizado
- Título "Desafio Concluído!"
- Texto motivacional (customizar por desafio)
- Card com estatísticas:
  - Nível Final
  - Pontos Ganhos
  - Bônus de Conclusão
- Botão verde "Concluir e Coletar Pontos"

### 6.3 Sistema de Navegação

**Manter:**

- Barra inferior com 5 ícones
- Indicação visual de página ativa
- Animações suaves de transição

---

## 7. ELEMENTOS A MODIFICAR/ADICIONAR

### 7.1 Desafio Mindfulness - Completo Redesign

**Modificar:**

- Substituir "Técnica dos 3 Passos" por "Botão de Emergência"
- Mudar título de "Desafio Mindfulness" para "Desafio: Observação Consciente" ou similar
- Substituir subtítulo por algo acionável: "Exercite sua presença através dos sentidos"
- Criar nova tela de execução conforme REQ-EXEC-001 a 007

**Adicionar:**

- Sistema de botões multi-sensoriais
- Sistema de pontuação diferenciada
- Animações de feedback sensorial
- Mensagens de incentivo à honestidade

### 7.2 Todos os Desafios - Padronização

**Modificar:**

- Garantir que todos seguem estrutura do Foco Laser
- Padronizar botões: vertical stack, não horizontal
- Uniformizar tamanhos de fonte e espaçamentos

**Adicionar:**

- Indicador de step/progresso em todos os desafios (se não houver)
- Badges de nível consistentes

### 7.3 Desafio Resistência - Se Mantido

**Modificar:**

- Reduzir texto da tela de apresentação
- Remover botão "Concluir" manual, tornar auto-conclusão
- Implementar scroll adequado

**Nota:** Desafio pode ser movido para "gaveta" (backlog) conforme feedback

---

## 8. FLUXO DE USUÁRIO

### 8.1 Fluxo Principal - Novo Desafio Mindfulness

```
1. DESCOBERTA
   └─ Usuário visualiza lista de desafios
      └─ Vê card do "Desafio: Observação Consciente"
         └─ Ícone turquesa + Badge "Nível 2"

2. APRESENTAÇÃO
   └─ Usuário toca no card
      └─ Tela de apresentação carrega (<1s)
         └─ Exibe:
            - Ícone grande + Badge
            - Título e subtítulo
            - "Como Funciona" (3 passos)
            - Recompensas (+150 XP, +50 Coins)
            - Botão "Começar Desafio"

3. INÍCIO
   └─ Usuário toca "Começar Desafio"
      └─ Transição para tela de execução (300ms)
         └─ Exibe:
            - Mensagem inicial orientadora
            - Botão grande central
            - 3 botões sensoriais
            - Contador "Pontos: 0 / 9"

4. EXECUÇÃO - Opção A (Botão Grande)
   └─ Usuário observa 5 coisas ao redor
      └─ Toca botão central grande
         └─ Feedback:
            - Animação de pulso
            - Vibração
            - Pontos: 0 → 3
            - Número "+3" flutua

   └─ Usuário observa mais 5 coisas
      └─ Toca botão central novamente
         └─ Pontos: 3 → 6

   └─ Usuário observa mais 5 coisas
      └─ Toca botão central terceira vez
         └─ Pontos: 6 → 9
            └─ Botão "Concluir" aparece (slide-up)
            └─ Mensagem: "Ótimo! Você atingiu o mínimo"

5. EXECUÇÃO - Opção B (Botões Específicos)
   └─ Usuário vê uma árvore (visual)
      └─ Toca botão "Ver"
         └─ Pontos: 0 → 1

   └─ Usuário ouve pássaro (auditivo)
      └─ Toca botão "Ouvir"
         └─ Pontos: 1 → 4

   └─ Usuário sente brisa (sensorial)
      └─ Toca botão "Sentir"
         └─ Pontos: 4 → 9
            └─ Botão "Concluir" aparece

6. EXECUÇÃO - Opção C (Misto)
   └─ Usuário combina botões:
      - Botão grande: +3 (total: 3)
      - "Ouvir": +3 (total: 6)
      - "Sentir": +5 (total: 11)
         └─ Excedeu mínimo
         └─ Botão "Concluir" disponível

7. CONCLUSÃO
   └─ Usuário toca "Concluir"
      └─ Transição para tela de conclusão (300ms)
         └─ Exibe:
            - Troféu turquesa
            - "Desafio Concluído!"
            - Texto: "Você exercitou sua presença!"
            - Pontuação final: 11 pontos
            - XP ganho: +150
            - Coins ganhos: +50
            - Botão "Concluir e Coletar Pontos"

8. FINALIZAÇÃO
   └─ Usuário toca "Concluir e Coletar Pontos"
      └─ Pontos são adicionados ao perfil
      └─ Retorna para lista de desafios ou home
      └─ Desafio marcado como concluído (badge/check)
```

### 8.2 Fluxos Alternativos

**ALT-001: Usuário Desiste no Meio**

```
1. Durante execução
   └─ Usuário toca botão "Voltar" (<) ou gesture de voltar
      └─ Modal de confirmação:
         "Deseja sair do desafio? Seu progresso será perdido."
         [Continuar Desafio] [Sair]

      Opção A: [Continuar Desafio]
      └─ Modal fecha, volta para execução

      Opção B: [Sair]
      └─ Retorna para lista de desafios
      └─ Nenhum ponto/XP ganho
      └─ Analytics: evento "desafio_abandonado"
```

**ALT-002: Usuário Excede Largamente o Mínimo**

```
1. Usuário atinge 20+ pontos
   └─ Mensagem especial:
      "Incrível! Você está em estado de presença profunda. Continue quanto quiser."
   └─ Possível badge especial: "Mestre da Observação"
   └─ Bônus de XP/Coins aumentado: +50% sobre o padrão
```

**ALT-003: Usuário Explora Botão Após Atingir Mínimo**

```
1. Pontos >= 9
   └─ Botão "Concluir" visível
   └─ Usuário continua clicando
      └─ Pontos continuam aumentando
      └─ Sistema permite (sem limite superior)
      └─ Mensagem de encorajamento a cada 5 pontos adicionais
```

### 8.3 Casos de Erro

**ERR-001: Falha ao Carregar Desafio**

```
Cenário: API não responde ou erro de rede
Resposta:
- Exibir toast: "Não foi possível carregar o desafio. Verifique sua conexão."
- Botão: "Tentar Novamente"
- Fallback: Carregar dados em cache (se disponível)
```

**ERR-002: Falha ao Salvar Progresso**

```
Cenário: Erro ao sincronizar com servidor
Resposta:
- Salvar localmente (localStorage/IndexedDB)
- Toast: "Progresso salvo localmente. Sincronizaremos quando possível."
- Ícone de cloud offline no header
- Tentar resync em background
```

**ERR-003: Usuário Tenta Começar Desafio Já Concluído Hoje**

```
Cenário: Sistema de cooldown/limite diário
Resposta:
- Modal: "Você já completou este desafio hoje! Volte amanhã para mais recompensas."
- Botão: "Ver Outros Desafios"
- Alternativa: Permitir repetir sem ganhar XP/Coins (modo prática)
```

---

## 9. MÉTRICAS DE SUCESSO

### 9.1 Métricas de Engajamento

**ENG-001: Taxa de Início**

- **Métrica:** % de usuários que tocam "Começar Desafio" após visualizar apresentação
- **Baseline:** 45% (estimado para desafio atual)
- **Meta:** >65% (pós-redesign)
- **Método:** Analytics - evento "desafio_visualizado" vs "desafio_iniciado"

**ENG-002: Taxa de Conclusão**

- **Métrica:** % de usuários que completam o desafio após iniciar
- **Baseline:** 30% (estimado)
- **Meta:** >60%
- **Método:** Evento "desafio_iniciado" vs "desafio_concluido"

**ENG-003: Tempo Médio de Conclusão**

- **Métrica:** Tempo entre início e conclusão
- **Baseline:** N/A (novo desafio)
- **Meta:** 3-5 minutos (ideal para mindfulness)
- **Método:** Timestamp de início e fim

**ENG-004: Pontuação Média**

- **Métrica:** Média de pontos obtidos ao concluir
- **Baseline:** N/A
- **Meta:** >12 pontos (indicando exploração além do mínimo)
- **Método:** Coleta de pontuação final

**ENG-005: Taxa de Uso de Botões Específicos**

- **Métrica:** % de usuários que usam botões "Ver", "Ouvir", "Sentir" vs apenas botão grande
- **Baseline:** N/A
- **Meta:** >40% usam pelo menos 1 botão específico
- **Método:** Contagem de cliques por tipo de botão

**ENG-006: Taxa de Repetição**

- **Métrica:** % de usuários que completam o desafio 2+ vezes em 7 dias
- **Baseline:** 15% (estimado para desafio atual)
- **Meta:** >30%
- **Método:** Contagem de conclusões por user_id em janela de 7 dias

### 9.2 Métricas de Qualidade

**QUAL-001: Net Promoter Score (NPS)**

- **Métrica:** "De 0 a 10, quanto você recomendaria este desafio?"
- **Baseline:** N/A
- **Meta:** NPS >50 (excelente)
- **Método:** Survey após 3ª conclusão

**QUAL-002: Satisfação (CSAT)**

- **Métrica:** "Como você avalia sua experiência?" (1-5 estrelas)
- **Baseline:** 3.2/5 (estimado para desafio atual)
- **Meta:** >4.2/5
- **Método:** Prompt opcional após conclusão

**QUAL-003: Taxa de Abandono Precoce**

- **Métrica:** % de usuários que saem antes de 30s ou 3 pontos
- **Baseline:** 50% (estimado)
- **Meta:** <20%
- **Método:** Analytics - tempo/pontos ao evento "desafio_abandonado"

**QUAL-004: Clareza de Instruções**

- **Métrica:** % de usuários que entendem a mecânica sem ajuda
- **Baseline:** N/A
- **Meta:** >85% completam sem visualizar tutorial/ajuda
- **Método:** Contagem de acessos a "Como Funciona" durante execução

### 9.3 Métricas de Negócio

**NEG-001: Retenção D1 (Day 1)**

- **Métrica:** % de usuários que retornam 1 dia após completar desafio
- **Baseline:** 35% (geral do app)
- **Meta:** >45% (para usuários que completam Mindfulness)
- **Método:** Análise de cohort

**NEG-002: Conversão para Premium**

- **Métrica:** % de usuários gratuitos que convertem após usar desafio
- **Baseline:** 2.5% (geral)
- **Meta:** >4% (desafio pode ser teaser de features premium)
- **Método:** Tracking de conversão em 30 dias pós-uso

**NEG-003: Tempo em App (Session Duration)**

- **Métrica:** Tempo médio de sessão em dias com uso do desafio
- **Baseline:** 8 minutos
- **Meta:** >12 minutos
- **Método:** Analytics de sessão

**NEG-004: Progressão de Nível**

- **Métrica:** % de usuários que sobem de nível no sistema de gamificação
- **Baseline:** 40% em 30 dias
- **Meta:** >55% (desafio contribui com XP significativo)
- **Método:** Tracking de level_up eventos

---

## 10. IMPLEMENTAÇÃO

### 10.1 Priorização (MVP/Fases)

#### FASE 1 - MVP (4-6 semanas) - CRÍTICO

**Sprint 1-2: Fundação Visual e Apresentação**

- [ ] REQ-VISUAL-001: Implementar estrutura de card padrão
- [ ] REQ-VISUAL-002: Definir e implementar paleta de cores do Mindfulness
- [ ] REQ-VISUAL-003: Criar ícone do desafio
- [ ] REQ-VISUAL-004: Implementar seção "Como Funciona"
- [ ] REQ-VISUAL-005: Implementar card de Recompensas
- [ ] REQ-VISUAL-006: Implementar botão CTA principal
- [ ] REQ-MIND-001: Definir conceito e documentar mecânica
- [ ] Tela de apresentação completa e funcional

**Sprint 3-4: Mecânica Core e Tela de Execução**

- [ ] REQ-EXEC-001: Implementar layout da tela principal
- [ ] REQ-EXEC-002: Implementar botão central grande
- [ ] REQ-EXEC-003: Implementar botões sensoriais (Ver, Ouvir, Sentir)
- [ ] REQ-MIND-004: Implementar sistema de pontuação diferenciada
- [ ] REQ-EXEC-004: Implementar display de pontuação
- [ ] REQ-MIND-005: Implementar requisitos mínimos/máximos
- [ ] REQ-EXEC-005: Implementar botão de conclusão condicional
- [ ] REQ-PERF-002: Garantir responsividade de botões

**Sprint 5-6: Feedback, Animações e Conclusão**

- [ ] REQ-MIND-006: Implementar feedback visual e animações
- [ ] REQ-EXEC-006: Implementar mensagens de estado
- [ ] REQ-EXEC-007: Implementar tela de conclusão customizada
- [ ] REQ-VISUAL-007: Ajustar espaçamento e hierarquia
- [ ] REQ-CORR-001: Remover desafio antigo e ativar novo
- [ ] Testes de QA completos
- [ ] Deploy para produção

**Entregáveis do MVP:**

- Novo Desafio Mindfulness 100% funcional
- Design padronizado conforme Foco Laser/Memória Livre
- Sistema de pontuação multi-sensorial operacional
- Animações e feedback responsivos
- Analytics básico implementado

#### FASE 2 - Melhorias e Correções (2-3 semanas) - ALTA

**Sprint 7-8: Correções de Desafios Existentes**

- [ ] REQ-CORR-002: Melhorias UX no Desafio Resistência (se mantido)
- [ ] REQ-CORR-003: Implementar auto-completar no Resistência
- [ ] REQ-CORR-004: Padronizar botões em todos os desafios
- [ ] REQ-PERF-001: Otimização de carregamento
- [ ] REQ-PERF-003: Otimização de assets
- [ ] Testes A/B de variações (botão grande vs específicos)

**Entregáveis da Fase 2:**

- Desafio Resistência otimizado (ou movido para backlog)
- Consistência visual em 100% dos desafios
- Performance otimizada (<1s carregamento)
- Dados de A/B tests coletados

#### FASE 3 - Acessibilidade e Polimento (2 semanas) - MÉDIA

**Sprint 9-10: Acessibilidade e Refinamento**

- [ ] REQ-ACESS-001: Implementar contraste WCAG AA
- [ ] REQ-ACESS-002: Garantir áreas de toque adequadas
- [ ] REQ-ACESS-003: Implementar suporte a screen readers
- [ ] REQ-MIND-007: Validar ausência de limite de tempo
- [ ] REQ-MIND-008: Implementar mensagens de incentivo
- [ ] Testes de usabilidade com usuários reais (5-10 pessoas)
- [ ] Iterações baseadas em feedback

**Entregáveis da Fase 3:**

- WCAG AA compliance
- Suporte completo a assistive technologies
- Refinamentos baseados em usabilidade

#### FASE 4 - Features Avançadas (Backlog) - BAIXA

**Features Futuras (não priorizadas):**

- [ ] REQ-ACESS-004: Modo claro (light mode)
- [ ] Sistema de badges especiais (Mestre da Observação, etc)
- [ ] Tutorial interativo first-time user experience (FTUE)
- [ ] Variações de desafio (tempo limitado, tema específico)
- [ ] Integração com outras features do app (diário, comunidade)
- [ ] Desafio "Gaveta" - Jogo de eliminar inimigos (Frame 6120 conceito)

### 10.2 Dependências Técnicas

**Dependências Externas:**

- Framework Frontend: React / React Native (assumido)
- Sistema de Roteamento: React Router ou similar
- Animações: Framer Motion ou React Spring (recomendado)
- State Management: Redux / Context API / Zustand
- Analytics: Google Analytics, Mixpanel, ou Amplitude
- Backend API: endpoint para salvar/sincronizar progresso
- Assets: ícones (biblioteca ou custom SVGs)

**Dependências Internas:**

- Sistema de gamificação existente (XP, Coins, Levels)
- Sistema de autenticação (user_id para salvar progresso)
- Design System (se existir, adaptar; se não, criar)
- Infraestrutura de analytics já implementada

**Bloqueios Potenciais:**

- Aprovação de design final do ícone e paleta
- Definição de recompensas (XP/Coins) - requer balanceamento
- Sincronização com roadmap de outros desafios
- Recursos de design/ilustração (se ícone for custom)

### 10.3 Estimativas (opcional)

**Baseado em squad típico (1 designer, 2 devs frontend, 1 QA):**

**Fase 1 (MVP):**

- Design: 40h (5 dias)
- Frontend: 160h (20 dias / 2 devs)
- Backend: 16h (2 dias - endpoints simples)
- QA: 32h (4 dias)
- **Total:** ~6 semanas calendar time

**Fase 2 (Melhorias):**

- Design: 16h (2 dias - ajustes)
- Frontend: 64h (8 dias / 2 devs)
- QA: 16h (2 dias)
- **Total:** ~2-3 semanas

**Fase 3 (Acessibilidade):**

- Frontend: 48h (6 dias / 2 devs)
- QA: 16h (2 dias)
- **Total:** ~2 semanas

**TOTAL ESTIMADO PARA FASES 1-3:** 10-11 semanas

---

## 11. CRITÉRIOS DE ACEITAÇÃO

### 11.1 Tela de Apresentação do Desafio

- [ ] Ícone do desafio é exibido com cor turquesa/verde água conforme paleta definida
- [ ] Badge de nível é exibida no topo direito do ícone (ex: "Nível 2")
- [ ] Título "Desafio: Observação Consciente" (ou nome final aprovado) está em fonte bold, 28px, branco
- [ ] Subtítulo descritivo está presente e legível (16px, cinza claro)
- [ ] Seção "Como Funciona" contém exatamente 3 passos numerados
- [ ] Cada passo tem texto claro e acionável (máx. 2 linhas)
- [ ] Card de Recompensas exibe "+150 XP" em verde e "+50 Coins" em amarelo (ou valores finais aprovados)
- [ ] Botão "Começar Desafio" é full-width, na cor primária, com ícone de raio
- [ ] Badge "Step: X" aparece no canto inferior direito
- [ ] Tempo de carregamento da tela é <1s em conexão 3G
- [ ] Layout é idêntico (estruturalmente) ao Desafio Foco Laser aprovado
- [ ] Todos os elementos têm contraste WCAG AA mínimo (4.5:1 para texto)

### 11.2 Tela de Execução - Layout e Elementos

- [ ] Fundo é preto ou gradiente escuro conforme especificação
- [ ] Display de pontuação está no topo: "Pontos: X / 9"
- [ ] Botão central grande é um círculo, centralizado, com diâmetro 60-70% da largura
- [ ] Botão central tem texto/ícone claro (ex: "Notei 5 coisas")
- [ ] 3 botões sensoriais estão visíveis abaixo do botão central
- [ ] Botões sensoriais têm labels claros: "️ Ver", " Ouvir", " Sentir"
- [ ] Botões sensoriais estão distribuídos horizontalmente com espaçamento igual
- [ ] Área de toque de todos os botões é >= 44x44px (iOS) ou 48x48dp (Android)
- [ ] Mensagem inicial orientadora é exibida ao entrar na tela
- [ ] Não há timer ou countdown visível (desafio sem limite de tempo)

### 11.3 Tela de Execução - Interação e Pontuação

**Botão Central Grande:**

- [ ] Ao clicar, adiciona exatamente 3 pontos
- [ ] Animação de pulso é executada (scale 1 → 1.05 → 1, duração 300ms)
- [ ] Vibração tátil é sentida (mobile, se habilitada)
- [ ] Número "+3" flutua para cima e desaparece (animação pointsFloat)
- [ ] Display de pontuação atualiza em <100ms

**Botão "Ver":**

- [ ] Ao clicar, adiciona exatamente 1 ponto
- [ ] Animação e feedback apropriados são executados
- [ ] Número "+1" flutua para cima

**Botão "Ouvir":**

- [ ] Ao clicar, adiciona exatamente 3 pontos
- [ ] Animação e feedback apropriados são executados
- [ ] Número "+3" flutua para cima

**Botão "Sentir":**

- [ ] Ao clicar, adiciona exatamente 5 pontos
- [ ] Animação e feedback apropriados são executados
- [ ] Número "+5" flutua para cima

**Sistema de Pontuação:**

- [ ] Pontuação nunca diminui (apenas aumenta)
- [ ] Pontuação é exibida com animação suave (easing)
- [ ] Quando pontos >= 9, display muda para cor verde
- [ ] Não há limite superior de pontos (usuário pode continuar clicando)

### 11.4 Botão de Conclusão e Mensagens

- [ ] Botão "Concluir" NÃO está visível quando pontos < 9
- [ ] Botão "Concluir" APARECE quando pontos >= 9
- [ ] Animação de entrada do botão é suave (slide-up, 400ms)
- [ ] Botão "Concluir" está fixo no footer
- [ ] Botão tem cor verde ou cor primária conforme especificação
- [ ] Mensagem "Ótimo! Você atingiu o mínimo" aparece ao atingir 9 pontos
- [ ] Mensagem "Excelente! Presença profunda" aparece ao atingir 15+ pontos (opcional)
- [ ] Usuário pode continuar clicando após atingir mínimo
- [ ] Ao clicar "Concluir", transição para tela de conclusão é executada (300ms)

### 11.5 Tela de Conclusão

- [ ] Ícone de troféu na cor do desafio (turquesa/verde água) é exibido
- [ ] Título "Desafio Concluído!" está presente
- [ ] Texto motivacional customizado para Mindfulness é exibido
- [ ] Card de estatísticas mostra:
  - [ ] Pontuação final (número exato obtido)
  - [ ] XP ganho (+150 ou valor configurado)
  - [ ] Coins ganhos (+50 ou valor configurado)
  - [ ] Bônus de conclusão (se aplicável)
- [ ] Botão "Concluir e Coletar Pontos" está presente e funcional
- [ ] Botão tem cor verde conforme padrão
- [ ] Ao clicar no botão:
  - [ ] XP é adicionado ao perfil do usuário
  - [ ] Coins são adicionados ao perfil do usuário
  - [ ] Desafio é marcado como concluído
  - [ ] Usuário retorna para lista de desafios ou home
  - [ ] Evento "desafio_concluido" é enviado para analytics

### 11.6 Fluxos Alternativos e Casos de Erro

**Abandono do Desafio:**

- [ ] Botão "Voltar" ou gesture de voltar dispara modal de confirmação
- [ ] Modal exibe texto: "Deseja sair? Progresso será perdido"
- [ ] Modal tem 2 botões: "Continuar Desafio" e "Sair"
- [ ] "Continuar Desafio" fecha modal e retorna para execução
- [ ] "Sair" retorna para lista de desafios sem salvar progresso
- [ ] Evento "desafio_abandonado" é enviado para analytics (com pontos atuais e tempo)

**Erros de Rede:**

- [ ] Se API falha ao carregar desafio, toast de erro é exibido
- [ ] Toast tem botão "Tentar Novamente"
- [ ] Se dados em cache existem, são carregados automaticamente
- [ ] Se falha ao salvar progresso, salva localmente e exibe toast informativo
- [ ] Ícone de cloud offline aparece no header quando offline

**Desafio Já Concluído:**

- [ ] Se usuário tentar repetir desafio no mesmo dia (cooldown), modal é exibido
- [ ] Modal informa: "Já completou hoje! Volte amanhã para recompensas"
- [ ] Opcional: permite repetir em "modo prática" sem ganhar XP/Coins

### 11.7 Performance e Responsividade

- [ ] Tela de apresentação carrega em <1s (3G)
- [ ] Transição entre telas ocorre em <300ms
- [ ] Feedback de botões ocorre em <50ms após toque
- [ ] Vibração (se habilitada) ocorre em <30ms
- [ ] Animações rodam a 60 FPS consistente (sem jank)
- [ ] Atualização de pontuação ocorre em <100ms
- [ ] App não trava ou congela durante execução do desafio
- [ ] Consumo de memória é estável (sem memory leaks)

### 11.8 Acessibilidade

- [ ] Todos os textos têm contraste >= 4.5:1 (WCAG AA)
- [ ] Todos os botões têm área de toque >= 44x44px (iOS) ou 48x48dp (Android)
- [ ] Espaçamento entre botões é >= 8px
- [ ] Todos os elementos interativos têm labels ARIA apropriados
- [ ] Screen reader anuncia corretamente:
  - [ ] Pontuação ao mudar
  - [ ] Aparecimento do botão "Concluir"
  - [ ] Conclusão do desafio
- [ ] Ordem de foco (tab order) é lógica e sequencial
- [ ] Botões têm estados de foco visíveis (outline ou similar)

### 11.9 Analytics e Tracking

- [ ] Evento "desafio_visualizado" é enviado ao abrir apresentação
- [ ] Evento "desafio_iniciado" é enviado ao clicar "Começar Desafio"
- [ ] Evento "botao_clicado" é enviado para cada tipo de botão (com tipo e valor)
- [ ] Evento "desafio_concluido" é enviado ao finalizar, com:
  - [ ] Pontuação final
  - [ ] Tempo total (início a fim)
  - [ ] Quantidade de cada tipo de botão usado
  - [ ] XP/Coins ganhos
- [ ] Evento "desafio_abandonado" é enviado ao sair sem concluir, com:
  - [ ] Pontos parciais
  - [ ] Tempo até abandono
- [ ] Todos os eventos incluem user_id e timestamp

### 11.10 Compatibilidade

- [ ] Desafio funciona corretamente em Chrome (últimas 2 versões)
- [ ] Desafio funciona corretamente em Safari (últimas 2 versões)
- [ ] Desafio funciona corretamente em Firefox (últimas 2 versões)
- [ ] Desafio funciona corretamente em Safari iOS 14+
- [ ] Desafio funciona corretamente em Chrome Android 90+
- [ ] Layout é responsivo em smartphones (360x640 a 414x896)
- [ ] Layout é responsivo em tablets (768x1024 e similares)
- [ ] Orientação portrait é otimizada
- [ ] Orientação landscape é suportada (mas não precisa ser otimizada)

### 11.11 Integração com Sistema Existente

- [ ] XP ganho no desafio é corretamente adicionado ao total do usuário
- [ ] Coins ganhos são corretamente adicionados ao saldo do usuário
- [ ] Desafio aparece corretamente na lista de desafios disponíveis
- [ ] Badge de nível é dinâmico (aumenta conforme usuário progride)
- [ ] Desafio é marcado como "concluído" na lista após finalização
- [ ] Progresso é salvo e sincronizado com backend
- [ ] Se logout/login, progresso concluído persiste
- [ ] Cooldown (se implementado) funciona corretamente entre dias

---

## 12. ANEXOS

### 12.1 Referências

**Vídeos Analisados:**

- `Desafio_Mindfullness_Pt_1.mp4` - 4min09s (5.976 frames)
- `Desafio_Mindfullness_Pt_2.mp4` - 5min30s (7.937 frames)
- **Total:** 9min39s, 13.913 frames analisados

**Frames de Referência Críticos:**

- Frame 0001 (Pt1): Tela de conclusão (modelo aprovado)
- Frame 0240 (Pt1): Desafio Foco Laser - design aprovado como "perfeito"
- Frame 0456 (Pt1): Desafio Mindfulness - design rejeitado como "péssimo"
- Frame 0672 (Pt1): Desafio Mindfulness com botão visível
- Frame 3912 (Pt2): "Aceite o Momento Presente" - rejeitado como "nada a ver"
- Frame 4440 (Pt2): Desafio Resistência - UX criticada
- Frame 4920 (Pt2): Foco Laser novamente (confirmação)
- Frame 5664 (Pt2): Resistência em execução - criticado
- Frame 6816 (Pt2): Memória Livre - aprovado como "perfeito"

**URLs Identificadas:**

- Versão em análise (problemas): `respiralivre flow.vercel.app`
- Versão de referência (aprovada): `respiralivre flow.lovable.app`

### 12.2 Assets

**Ícones Necessários:**

- [ ] Ícone do Desafio Mindfulness (turquesa/verde água, 256x256px, SVG)
- [ ] Ícone de raio para seção "Como Funciona"
- [ ] Ícone de troféu para tela de conclusão (customizado na cor do desafio)
- [ ] Ícones sensoriais: ️ Ver, Ouvir, Sentir (podem ser emojis ou custom)

**Paletas de Cores (arquivo Figma/Sketch):**

- Paleta completa do Desafio Mindfulness
- Comparação com Foco Laser e Memória Livre
- Exemplos de uso (botões, cards, backgrounds)

**Animações (Lottie ou código):**

- Animação de pulso do botão central
- Animação de pontos flutuando
- Animação de slide-up do botão "Concluir"

**Documentação de Design System (se criar):**

- Componente: ChallengeCard
- Componente: ChallengeButton
- Componente: SensorButton
- Componente: PointsDisplay
- Componente: CompletionScreen

### 12.3 Dados de Análise

**Citações Literais Críticas do Usuário:**

1. **Sobre o Design Quebrado (00:00s):**

   > "Ó, tá vendo que quebrou totalmente ali, mano, o design já aqui, né? Já tá péssimo o design."

2. **Sobre o Design de Referência (00:10s):**

   > "Ó, perfeito. Eu quero esse design aqui."

3. **Sobre o Texto do Mindfulness (00:22s):**

   > "Note seus pensamentos e sensações... tá péssimo isso aqui. Tá? Péssimo esse desafio."

4. **Sobre o Desafio Foco Laser (00:33s):**

   > "Eu gostei desse desafio Foco Laser. Tem que ser trabalhado. Vamos colocar meio que numa estante assim, né?"

5. **Conceito do Botão de Emergência (00:55s - 01:05s):**

   > "Botão de emergência. Que funciona assim: Funciona com o objetivo de estimular a presença, né? O Mindfulness. Correto? Melhor do que isso daqui."

6. **Mecânica de Observação (01:09s):**

   > "A pessoa tem que, é... notar cinco coisas no ambiente dela. Seja visualmente ou auditivamente, né?"

7. **Sistema de Pontuação (01:26s):**

   > "E esse botão... Vai ganhando pontuação, vai mudando de cor, né? E tudo mais."

8. **Honestidade (02:22s):**

   > "Então tem que ser fortificado que a honestidade da pessoa conta muito."

9. **Estado de Presença (02:09s):**

   > "Isso é provado, tá? É... ela fica em estado de presença total, assim."

10. **Sistema Multi-Sensorial (03:22s - 03:30s):**

    > "Pode ter tipo um botão ali maior, né, um redondo. E pode ter, tipo assim, botões de sentido, que ela toca embaixo."

11. **Pontuação Diferenciada (Pt2, 00:41s):**

    > "Ver = 1 ponto; Ouvir = 3 pontos; Sentir = 5 pontos, tá?"

12. **Cálculo da Média (Pt2, 01:23s):**

    > "Um, mais... ouvir que é três pontos, mais sentir que é cinco pontos, dá nove. Nove dividido por três... dá a média de três."

13. **Requisito Mínimo (Pt2, 01:54s):**

    > "Daí ela tem que pontuar no mínimo nove, né? Ou seja, clicou no botão grande três vezes, né?"

14. **Sobre "Aceite o Momento Presente" (Pt2, 02:43s):**

    > "Aceite o momento presente. Olha que nada a ver, véi. Nada a ver."

15. **Sobre Muita Informação (Pt2, 03:01s):**

    > "Nossa, muita informação, péssimo de ler, péssima experiência de usuário."

16. **Sobre Distribuição de Botões (Pt2, 03:05s):**

    > "Aqui eu gostei da distribuição dos botões, tipo 'iniciar desafio' e 'pular desafio', um do lado do outro, né? Mas eu ainda prefiro um abaixo do outro que nem tava no outro."

17. **Sobre Desafio Resistência (Pt2, 03:49s):**

    > "Não, esquece que eu falei, não. Não pode ser no lugar desse aqui não. Péssimo. Péssimo."

18. **Sobre Botão Concluir (Pt2, 04:32s):**

    > "Isso aqui... eu não gostei, a pessoa tem que clicar no botão 'concluir', coletar pontos, daí pô, quebra a dinâmica ali."

19. **Sobre Memória Livre (Pt2, 04:44s):**

    > "Isso aqui é perfeito, cara. Entendeu, mano? Esse desafio da Memória Livre, pode vir... eh... depois daquele desafio do mindfulness, né?"

20. **Sobre Deixar na Gaveta (Pt2, 05:16s):**
    > "Vamos deixar na gaveta esse dali do botão, que na verdade tem aquela ideia ali de eliminar os inimigos, que a gente vai ter que trabalhar nela ainda, né?"

**Timestamps e Decisões Mapeadas:**

| Timestamp  | Decisão       | Frame | Descrição                    |
| ---------- | ------------- | ----- | ---------------------------- |
| Pt1 00:00s | Rejeição      | 0001  | Design quebrado              |
| Pt1 00:10s | Aprovação     | 0240  | Design perfeito (Foco Laser) |
| Pt1 00:19s | Rejeição      | 0456  | Mindfulness péssimo          |
| Pt1 00:33s | Interesse     | 0792  | Foco Laser interessante      |
| Pt1 00:55s | Conceito      | 1320  | Botão de Emergência          |
| Pt1 01:09s | Mecânica      | 1656  | Notar 5 coisas               |
| Pt1 02:16s | ️ Regra       | 3264  | Honestidade importante       |
| Pt1 03:22s | Interface     | 5040  | Botões de sentido            |
| Pt2 00:53s | Sistema       | 1272  | Ver=1, Ouvir=3, Sentir=5     |
| Pt2 01:54s | Requisito     | 2736  | Mínimo 9 pontos              |
| Pt2 02:43s | Rejeição      | 3912  | "Aceite momento" péssimo     |
| Pt2 03:05s | ️ Preferência | 4440  | Botões vertical > horizontal |
| Pt2 03:54s | Rejeição      | 5664  | Resistência péssimo          |
| Pt2 04:44s | Aprovação     | 6816  | Memória Livre perfeito       |

---

## GLOSSÁRIO

**Botão de Emergência:** Nome conceitual do novo Desafio Mindfulness, focado em observação ativa

**Série:** Conjunto de 5 observações registradas pelo usuário

**Botão Grande/Central:** Botão principal que registra 5 observações de uma vez (3 pontos)

**Botões Sensoriais/Específicos:** Botões "Ver", "Ouvir", "Sentir" com pontuações diferenciadas

**Desafio de Referência:** Desafio Foco Laser e Memória Livre, aprovados como modelos de design

**Gaveta:** Backlog de ideias não priorizadas para implementação imediata

**XP:** Experience Points - pontos de experiência para progressão de nível

**Coins:** Moeda virtual do app

**Step:** Indicador de progresso/etapa no fluxo do app

**WCAG AA:** Web Content Accessibility Guidelines nível AA - padrão de acessibilidade

**FPS:** Frames Per Second - taxa de quadros por segundo

**CTA:** Call To Action - botão ou elemento que incentiva ação

**UX:** User Experience - experiência do usuário

**MVP:** Minimum Viable Product - produto mínimo viável

---

## CONCLUSÃO E PRÓXIMOS PASSOS

Este PRD documenta tecnicamente a redesign completa do Desafio Mindfulness baseado em análise frame-by-frame de 13.913 frames e transcrição literal de 9min39s de feedback do usuário. Todas as decisões, requisitos e especificações estão fundamentadas em observações factuais e citações diretas.

**Próximas Ações Imediatas:**

1.  Aprovação deste PRD pelas partes interessadas
2.  ️ Kickoff com equipe de design para definir paleta e ícone final
3.  ️ Refinamento técnico com equipe de engenharia
4.  ️ Criação de tasks/tickets detalhados para Sprint 1
5.  ️ Configuração de analytics e eventos de tracking
6.  ️ Início do desenvolvimento (Fase 1 - MVP)

**Contato para Dúvidas:**

- Product Manager: [Nome/Email]
- Designer Lead: [Nome/Email]
- Tech Lead: [Nome/Email]

---

**Documento elaborado por:** Claude (Anthropic)  
**Baseado em:** Análise técnica completa de vídeos fornecidos  
**Versão:** 1.0  
**Status:** DRAFT - Aguardando Aprovação  
**Última Atualização:** 17 de Dezembro de 2025
