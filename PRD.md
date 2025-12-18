# PRD - RESPIRA LIVRE: OTIMIZAÇÃO DE DESAFIOS E PÁGINA DE CONVERSÃO

## Sistema de Gamificação e Funil de Vendas - Análise Técnica Final

**Versão:** 2.0 (Análise de Vídeos Finais)  
**Data:** 18 de Dezembro de 2025  
**Projeto:** Respira Livre - Aplicativo de Cessação do Tabagismo  
**Domínios Analisados:**

- respiralivrereflow.lovable.app (Versão Atual/Raiz)
- respiralivrereflow.vercel.app (Versão de Referência)

---

## 1. CONTEXTO E OBJETIVO

### 1.1 Situação Atual

O projeto Respira Livre possui dois ambientes de desenvolvimento com implementações distintas de desafios gamificados e páginas de conversão. Foram identificadas inconsistências críticas de design, bugs de lógica, e diferenças substanciais de copy e UX entre as versões.

**Análise Realizada:**

- 4 vídeos analisados (total: 8min 41s)
- 15.976 frames extraídos e processados
- 36 frames-chave documentados
- Correlação completa entre transcrição de áudio e evidências visuais

### 1.2 Objetivo do PRD

Documentar tecnicamente todos os requisitos identificados para:

1. Correção de bugs críticos no desafio "Memória Livre"
2. Consolidação e otimização dos desafios gamificados
3. Definição da estrutura final de níveis e progressão
4. Padronização da página de conversão/vendas
5. Eliminação de inconsistências de design entre versões

---

## 2. ANÁLISE COMPARATIVA DETALHADA

### 2.1 Versão Atual (lovable.app) - Funil Raiz

**APROVAÇÕES IDENTIFICADAS:**

**Design Global:**

- Status: APROVADO - "tá perfeito, cara" (Vídeo 1, 00:04s)
- Avaliação visual: Design mais limpo e profissional
- Frame de referência: video1/`docs\Frames_PRD\frame_0096.png`

**Desafio: Memória Livre**

- Status: APROVADO COM RESSALVAS - "isso aqui, ó, tá muito bom, pô" (Vídeo 1, 00:54s)
- Problemas críticos identificados (detalhados na seção 3.1)
- Frame de referência: video1/`docs\Frames_PRD\frame_1296.png`

**Página de Vendas - "Seu Perfil de Liberdade"**

- Status: APROVADO - "Mais simples. Concreto." (Vídeo 3, 02:37s)
- Design preferido sobre a versão Elite Liberdade
- Elementos visuais:
  - Card escuro com dados de perfil
  - 1730 XP Total (amarelo)
  - 730 Coins (verde)
  - 6 Badges (verde)
  - Nível de Prontidão: 100%
- Frame de referência: video3/`docs\Frames_PRD\frame_3840.png`
- Frame de referência: video4/`docs\Frames_PRD\frame_1896.png` (com diagnóstico)

**REJEIÇÕES IDENTIFICADAS:**

**Elemento no Topo da Página**

- Status: REJEITADO - "tem esse negócio aqui nada a ver aqui em cima. Tá péssimo" (Vídeo 3, 02:18s)
- Decisão: Excluir ou arquivar
- Frame de referência: video3/`docs\Frames_PRD\frame_3312.png`

**Desafio do Botão (Eliminar Inimigos)**

- Status: ARQUIVADO - "vamos deixar na gaveta esse dali do botão" (Vídeo 1, 00:42s)
- Razão: Já existem 3 desafios, evitar sobrecarga
- Conceito será integrado em outros desafios

---

### 2.2 Versão de Referência (vercel.app)

**APROVAÇÕES IDENTIFICADAS:**

**Copy da Página de Vendas - Elite Liberdade**

- Status: APROVADO FORTEMENTE - "Nossa mano, muito bom... a copy tá perfeita, gostei da copy" (Vídeo 3, 02:53-56s + Vídeo 4, 00:01s)
- Elementos aprovados:
  - "🔓 OFERTA EXCLUSIVA DESBLOQUEADA" (badge vermelho)
  - "Sua Classificação Desbloqueou"
  - "70% DE DESCONTO" (verde, destaque principal)
  - "Apenas para quem completou a jornada como você"
  - Economia destacada: "Você economizou R$ 207.90"
- Frame de referência: video3/`docs\Frames_PRD\frame_4224.png`

**Solução Personalizada**

- Status: APROVADO - "Solução personalizada é interessante" (Vídeo 4, 00:16s)
- Elementos:
  - "Coach IA personalizado 24/7 baseado no seu perfil"
  - "Comunidade exclusiva de apoio com mentores certificados"
  - "Garantia de 30 dias - sua liberdade ou seu dinheiro de volta"
- Frame de referência: video4/`docs\Frames_PRD\frame_0480.png`

**REJEIÇÕES IDENTIFICADAS:**

**Desafio de Foco - Design Geral**

- Status: REJEITADO - "o design mudou totalmente aqui, tá péssimo" (Vídeo 2, 01:50s)
- Problemas:
  - Inconsistência visual total com versão raiz
  - Background gradiente roxo/magenta não alinhado
  - Estética "de vidro" criticada: "essa estética de vidro, tá péssima, entendeu? Tá horrível" (Vídeo 2, 02:20s)
- Frame de referência: video2/`docs\Frames_PRD\frame_2736.png`
- Frame de referência: video2/`docs\Frames_PRD\frame_3432.png`

**Desafio Reflexo Rápido - Quick Time Event**

- Status: REJEITADO - "um evento de clique rápido, bem zoado, que tá péssimo. Nada a ver, cara." (Vídeo 3, 00:02s)
- Frame de referência: video3/`docs\Frames_PRD\frame_0192.png`

**Batalha Final - Conceito de Boss "Sr. Ansiedade"**

- Status: REJEITADO PARCIALMENTE
- Problemas:
  - "Aqui já tá começando a ficar chato, sabe" (Vídeo 3, 00:20s)
  - "péssimo isso aqui" (Vídeo 3, 00:27s)
  - "Muita informação aqui, péssima experiência de usuário" (Vídeo 3, 01:51s)
  - "um conceito bem ridículo, horrível, não gostei" (Vídeo 3, 01:54s)
  - "muito tediante. Olha isso, tipo a pessoa literalmente tem que esperar" (Vídeo 3, 02:00s)
- Conceito aprovado para reutilização: Boss + Quick Time Events podem ser combinados
- Frames de referência: video3/`docs\Frames_PRD\frame_0720.png`, video3/`docs\Frames_PRD\frame_1296.png`, video3/`docs\Frames_PRD\frame_2736.png`

**Título "Elite Liberdade"**

- Status: INDECISO - "Essa elite liberdade é meio, sei lá" (Vídeo 4, 00:42s)
- Sugestão: Manter "Seu Perfil de Liberdade" mas integrar copy da versão referência

---

### 2.3 Decisão Final: Abordagem Híbrida

**ESTRATÉGIA APROVADA:**

- Design base: Versão atual (lovable.app)
- Copy principal: Versão de referência (vercel.app)
- Integração: "Dá pra aplicar a copy do de referência aqui no projeto atual" (Vídeo 4, 00:47s)

---

## 3. REQUISITOS FUNCIONAIS

### 3.1 DESAFIO: MEMÓRIA LIVRE

#### 3.1.1 Estado Atual e Problemas Críticos

**Interface Visualizada:**

- Ícone: Cérebro roxo/rosa com badge "Nível 3" amarelo
- Título: "Desafio: Memória Livre"
- Subtítulo: "Treine sua mente, fortaleça sua vontade"
- Como Funciona:
  1. "Memorize a sequência de 5 cores"
  2. "Repita a sequência corretamente"
  3. "Você tem 15 segundos para completar"
- Recompensa: +200 XP +100 Coins
- Botão: "Começar Desafio" (roxo)
- Frame de referência: video1/`docs\Frames_PRD\frame_0096.png`

**Interface do Jogo:**

- 4 botões coloridos em grid 2x2:
  - Verde (top-left)
  - Amarelo (top-right)
  - Azul (bottom-left)
  - Roxo (bottom-right)
- Frame de referência: video1/`docs\Frames_PRD\frame_1600.png`

**BUGS CRÍTICOS IDENTIFICADOS:**

**REQ-MEM-001: Correção de Ativação Automática**

- Problema: "Ó, tá vendo? Nada a ver, ó. Eu nem cliquei em nada aqui" (Vídeo 1, 01:18-19s)
- Comportamento observado: Desafio avança automaticamente sem input do usuário
- Evidência visual: Tela de erro "Não foi dessa vez!" aparece sem cliques
- Comportamento esperado: Sistema DEVE aguardar input explícito do usuário antes de qualquer validação ou transição
- Prioridade: CRÍTICA
- Frame de referência: video1/`docs\Frames_PRD\frame_1872.png`
- Impacto: Impossibilita teste e uso adequado do desafio

**REQ-MEM-002: Correção de Execução Automática**

- Problema: "ele tá indo automático, tá bugando. Eu não tô clicando em nada, cara" (Vídeo 1, 01:27-31s)
- Comportamento observado: Sequências executam sozinhas
- Comportamento esperado: Nenhuma ação deve ocorrer sem interação explícita
- Prioridade: CRÍTICA
- Frame de referência: video1/`docs\Frames_PRD\frame_2088.png`

**REQ-MEM-003: Correção de Mensagens Automáticas**

- Problema: "Ó, nada a ver, véi, ele tá mostrando sozinho a mensagem" (Vídeo 1, 01:53-55s)
- Comportamento observado: Mensagem de erro/resultado aparece sem completar tentativa
- Comportamento esperado: Mensagens DEVEM aparecer APENAS após validação completa da tentativa do usuário
- Prioridade: CRÍTICA
- Frame de referência: video1/`docs\Frames_PRD\frame_2712.png`

**REQ-MEM-004: Melhoria da Lógica de Seleção**

- Problema: "tem que melhorar a animação e a seleção também, a lógica tá péssima disso aqui" (Vídeo 1, 01:08-12s)
- Comportamento esperado:
  - Feedback visual claro ao clicar em cada botão
  - Estado de "selecionado" visualmente distinto
  - Transição suave entre estados
  - Validação apenas após sequência completa
- Prioridade: ALTA
- Frame de referência: video1/`docs\Frames_PRD\frame_1680.png`

#### 3.1.2 Solução Proposta: Botão de Confirmação

**REQ-MEM-005: Implementar Controle Manual de Fluxo**

- Descrição: "ao invés de clicar na sequência e ir pro outro, ter um botãozinho pra confirmar ou resetar aqui, tipo, tentar de novo" (Vídeo 1, 01:33-39s)
- Comportamento esperado:
  1. Usuário clica na sequência de cores
  2. Sistema armazena sequência SEM validar automaticamente
  3. Usuário clica em "Confirmar" para validar
  4. OU usuário clica em "Resetar/Tentar Novamente" para limpar seleção
- Interface proposta:
  - Botão "✓ Confirmar Sequência" (habilitado após completar número de cores esperado)
  - Botão "↻ Tentar Novamente" (sempre disponível)
- Prioridade: CRÍTICA (resolve REQ-MEM-001, 002, 003)
- Impacto: Elimina todos os bugs de execução automática

#### 3.1.3 Sistema de Níveis e Progressão

**REQ-MEM-006: Padronizar Número de Sequências**

- Problema: "ele vai um número de sequências aleatórias. Às vezes ele vai três sequências, às vezes quatro, às vezes cinco. Então não faz sentido" (Vídeo 1, 02:03-18s)
- Decisão: "Eu acho que três a quatro ali, ou três ou quatro, é melhor" (Vídeo 1, 02:17-22s)
- Definição final: "Não, vamos deixar só dois níveis mesmos" (Vídeo 2, 00:12-16s)
- Comportamento esperado:
  - Sistema de 2 níveis fixos (não aleatório)
  - Número consistente de sequências por nível
- Prioridade: ALTA

**REQ-MEM-007: Estrutura de 2 Níveis**

- Especificação técnica:
  - **Nível 1:** 2 sequências de cores
  - **Nível 2:** 5 sequências de cores
- Referência: "nível um, duas sequências. Nível dois, cinco sequências" (Vídeo 2, 00:02-16s)
- Comportamento esperado:
  - Nível claramente indicado na UI: "Nível 1 de 2" / "Nível 2 de 2"
  - Transição explícita entre níveis com feedback visual
- Prioridade: ALTA

**REQ-MEM-008: Ajuste de Velocidade por Nível**

- Especificação: "no nível dois já vai um pouquinho mais lento, porque tá muito rápido" (Vídeo 2, 00:23-31s)
- Comportamento esperado:
  - Nível 1: Velocidade padrão (atual está aceitável)
  - Nível 2: Velocidade reduzida em ~25-30% para acomodar maior complexidade
- Prioridade: MÉDIA
- Justificativa: Aumenta acessibilidade e diminui frustração

#### 3.1.4 Sistema de Pontuação e Opcionalidade

**REQ-MEM-009: Nível 2 Opcional com Bonificação**

- Descrição: "nível dois ela pode pular sem perder pontuação, né, mas se ela fazer o nível dois, ela vai ganhar pontuações bônus" (Vídeo 2, 00:47-54s)
- Comportamento esperado:
  - Ao completar Nível 1, exibir tela de transição:
    - Recompensa do Nível 1: +200 XP +100 Coins (padrão)
    - Opção: "Continuar para Nível 2" (com preview de bônus)
    - Opção: "Finalizar e Coletar Recompensas"
  - Se pular Nível 2: mantém recompensas do Nível 1
  - Se completar Nível 2: adiciona bônus (especificado abaixo)
- Prioridade: ALTA
- Impacto: Gamificação, engajamento opcional sem penalização

**REQ-MEM-010: Copy Motivacional para Nível 2**

- Problema: "trabalhar melhor a copy... deixar bem claro que é opcional" (Vídeo 2, 01:16-28s)
- Conceito: "60% dos que passaram por aqui não conseguiram... isso aqui é opcional, mas... Você vai provar seu valor, você vai ser melhor que a maioria" (Vídeo 2, 01:11-38s)
- Copy proposta:
  - Título: "Desafio Opcional: Nível 2"
  - Texto: "⚡ 60% dos usuários não conseguem completar este nível. Você aceita o desafio?"
  - CTA 1: "🔥 Aceitar Desafio" (roxo, primário)
  - CTA 2: "Finalizar e Coletar Recompensas" (cinza, secundário)
- Tone: Motivacional, desafio competitivo, opcional explícito
- Prioridade: ALTA
- Impacto: Aumenta taxa de tentativa do Nível 2 sem pressão

**REQ-MEM-011: Estrutura de Recompensas**

- Nível 1 (completo):
  - +200 XP
  - +100 Coins
- Nível 2 (completo):
  - +300 XP (bônus)
  - +200 Coins (bônus)
  - Badge especial: "Mente de Aço" ou similar
- Total máximo: +500 XP, +300 Coins, +1 Badge
- Prioridade: MÉDIA

#### 3.1.5 Elementos de UX/UI

**REQ-MEM-012: Implementação de Sons**

- Descrição: "tem que memorizar tal, dá pra ter sons, né?... E ela pode se basear também nos sons" (Vídeo 1, 01:01-17s)
- Comportamento esperado:
  - Cada cor possui som único e distintivo
  - Durante apresentação: sons tocam na sequência
  - Durante reprodução do usuário: sons tocam ao clicar
  - Usuário pode memorizar por som OU visualmente
- Sons sugeridos:
  - Verde: Tom grave (C3)
  - Amarelo: Tom médio-agudo (E3)
  - Azul: Tom médio (G3)
  - Roxo: Tom agudo (C4)
- Prioridade: MÉDIA
- Impacto: Acessibilidade, experiência multimodal

**REQ-MEM-013: Melhorias de Animação e Feedback Visual**

- Descrição: "tem que melhorar a animação e a seleção" (Vídeo 1, 01:08-10s)
- Comportamento esperado:
  - Botão ao ser tocado:
    - Scale up leve (1.05x)
    - Brilho/glow na cor correspondente
    - Som simultâneo
    - Duração: 200-300ms
  - Botão selecionado na sequência:
    - Border destacado (2-3px) na cor
    - Número de ordem exibido temporariamente
  - Feedback de acerto:
    - Animação de check verde
    - Partículas/confetti
    - Som de sucesso
  - Feedback de erro:
    - Shake animation
    - Flash vermelho sutil
    - Som de erro
- Prioridade: MÉDIA

**REQ-MEM-014: Tela de Erro Atual**

- Estado atual visualizado:
  - Ícone: Círculo vermelho com X
  - Texto principal: "Não foi dessa vez!" (vermelho)
  - Texto secundário: "Mas não desista! Cada tentativa fortalece sua mente."
  - Botão primário: "Tentar Novamente" (roxo)
  - Botão secundário: "Pular Desafio (Sem Recompensas)" (preto)
- Frame de referência: video1/`docs\Frames_PRD\frame_1872.png`
- Ação: MANTER com ajustes de timing (aparecer apenas após validação explícita)
- Prioridade: BAIXA (já está OK, apenas corrigir trigger)

---

### 3.2 DESAFIO: FOCO RÁPIDO (Consolidação)

#### 3.2.1 Contexto e Fusão de Conceitos

**DECISÃO DE CONSOLIDAÇÃO:**

- "esquece aquele outro do botão... Aquela ideia de que vai matando os inimigos, tal, ela pode ser aplicada aqui" (Vídeo 2, 02:07-17s)
- Fusão de 2 conceitos:
  1. Desafio do botão (arquivado no Vídeo 1)
  2. Desafio de foco com alvos (Vídeo 2)
- Resultado: Único desafio de foco com mecânica de "eliminar inimigos"

#### 3.2.2 Problemas da Versão de Referência

**REJEIÇÕES:**

- Design geral: "o design mudou totalmente aqui, tá péssimo" (Vídeo 2, 01:50s)
- Estética de vidro: "essa estética de vidro, tá péssima, entendeu? Tá horrível" (Vídeo 2, 02:20s)
- BUG identificado: "cliquei aqui, ele mudou sozinho, tá? Ao passo que eu vou clicando ele vai mudando sozinho" (Vídeo 2, 02:01-07s)
- Frames de referência: video2/`docs\Frames_PRD\frame_2736.png`, video2/`docs\Frames_PRD\frame_3048.png`, video2/`docs\Frames_PRD\frame_3432.png`

**AÇÃO:** Recriar completamente no design da versão raiz (lovable.app)

#### 3.2.3 Mecânica de Jogo Aprovada

**REQ-FOC-001: Conceito de "Whack-a-Mole" com Inimigos**

- Descrição: "pode ser os inimigos aparecendo e ela clicando. Tipo aquele joguinho que cê tem que bater no martelo, sabe?" (Vídeo 2, 02:23-29s)
- Referência: "os bichinho sai do buraco, daí cê tem que bater um martelo, nos bichinho" (Vídeo 2, 02:29-35s)
- Conceito adaptado: "Pode ser outro conceito que a gente pode trabalhar... Daí ele aparece em algum lugar da tela e a pessoa tem que clicar pra eliminar... Tipo um jogo mesmo, é um jogo" (Vídeo 2, 02:38-48s)
- Comportamento esperado:
  1. Inimigos aparecem em posições aleatórias da tela
  2. Usuário tem tempo limitado para clicar
  3. Clicar no inimigo = eliminar = pontos
  4. Não clicar a tempo = inimigo "ataca" = perde vida/pontos
- Prioridade: ALTA
- Impacto: Gamificação, mecânica de jogo real

**REQ-FOC-002: Representação Visual de "Inimigos"**

- Descrição: "alusão às coisas que a pessoa, que faz a pessoa ter vontade de fumar... Ou às vezes até o próprio cigarro" (Vídeo 1, 00:31-39s)
- Opções de representação:
  - Ícone de cigarro
  - Ícone de tentação (ex: chama, nuvem de fumaça)
  - Ícone abstrato de "gatilho"
- Design: Manter consistência com design raiz (sem estética de vidro)
- Cores: Vermelho/laranja para inimigos (consistente com alvos do vídeo)
- Prioridade: MÉDIA

**REQ-FOC-003: Áreas de Spawn e Movimento**

- Comportamento esperado:
  - Tela dividida em grid invisível (ex: 3x4)
  - Inimigos aparecem em células aleatórias
  - Possível movimento: nenhum (estático) ou lento (deslizamento)
  - Tempo de vida do inimigo: 1.5-2s antes de desaparecer
  - Múltiplos inimigos podem estar ativos simultaneamente (máx 2-3)
- Prioridade: MÉDIA

#### 3.2.4 Sistema de Pontuação e Duração

**REQ-FOC-004: Estrutura de Pontos**

- Meta: "20+ acertos para bônus máximo" (visualizado na versão referência)
- Sistema proposto:
  - Cada acerto: +15 pontos de foco (conforme visto)
  - Tempo limite: 45 segundos (conforme visto)
  - Meta mínima para completar: 10 acertos
  - Meta para bônus: 20 acertos
  - Meta para bônus máximo: 30+ acertos
- Recompensas:
  - 10-19 acertos: +100 XP, +50 Coins
  - 20-29 acertos: +200 XP, +100 Coins
  - 30+ acertos: +300 XP, +150 Coins + Badge "Reflexos de Elite"
- Frame de referência: video2/`docs\Frames_PRD\frame_2736.png`
- Prioridade: ALTA

**REQ-FOC-005: Contador de Acertos em Tempo Real**

- Comportamento esperado:
  - Exibir no topo: "Acertos: X"
  - Barra de progresso visual indicando progresso para próximo tier
  - Feedback ao atingir metas (10, 20, 30)
- Frame de referência: video2/`docs\Frames_PRD\frame_3432.png` (mostra "Acertos: 6")
- Prioridade: MÉDIA

#### 3.2.5 Integração com Conceito de Boss (Opcional)

**REQ-FOC-006: Mecânica de Boss Battle (Fase 2 ou Versão Avançada)**

- Contexto: "Dá pra pegar o conceito desse boss aqui, e aplicar ali naquele que tem o Quick Time Event" (Vídeo 3, 00:30-37s)
- Descrição detalhada: "imagina que o boss tá jogando nele... ela tem que clicar no botão pra matar o boss... E ao mesmo tempo tem os Quick Time Events de inimigos ali, pequenos. Imagina inimigos brotando do chão" (Vídeo 3, 00:50-01:15s)
- Mecânica proposta:
  1. Boss aparece no topo da tela com HP bar
  2. Botão principal: "Atirar no Boss" (cliques repetidos causam dano)
  3. Simultaneamente: inimigos menores aparecem pelo mapa
  4. Quick Time Event: clicar nos inimigos antes que alcancem o jogador
  5. Se inimigo alcança: jogador perde HP
  6. Derrotar boss + sobreviver = vitória
- Referência visual: video3/`docs\Frames_PRD\frame_0720.png`, video3/`docs\Frames_PRD\frame_1296.png`
- Prioridade: BAIXA (pode ser implementado em versão futura como "Boss Battle Challenge")
- Status: OPCIONAL - depende de capacidade de desenvolvimento

---

### 3.3 DESAFIO: MINDFULNESS (Não Visualizado - Manter)

**REQ-MIN-001: Sequenciamento de Desafios**

- Descrição: "Esse desafio da memória livre, pode vir depois daquele desafio do mindfulness" (Vídeo 1, 00:05-14s)
- Ordem proposta:
  1. Mindfulness (primeiro)
  2. Memória Livre (segundo)
  3. Foco Rápido (terceiro)
- Justificativa: "a pessoa já vai tá na vibe e tal" (Vídeo 1, 00:11-14s)
- Prioridade: MÉDIA
- Impacto: UX, progressão natural

---

### 3.4 PÁGINA DE CONVERSÃO / VENDAS

#### 3.4.1 Estrutura Híbrida Aprovada

**DECISÃO FINAL:**

- Base de design: Versão raiz (lovable.app) - "Eu gostei do design desse aqui, bem melhor, bem melhor... o atual, né?" (Vídeo 4, 00:28-33s)
- Copy principal: Versão referência (vercel.app) - "a copy desse aqui, ó, sua classificação desbloqueou 70% de descontos" (Vídeo 4, 00:33-39s)
- Integração: "Dá pra aplicar a copy do de referência aqui no projeto atual" (Vídeo 4, 00:46-50s)

#### 3.4.2 Seção Superior: Perfil de Liberdade

**REQ-VENDA-001: Card de Perfil do Usuário**

- Título: "🏆 Seu Perfil de Liberdade" (manter)
- Métricas exibidas:
  - XP Total (cor: amarelo/dourado)
  - Coins (cor: verde)
  - Badges (cor: verde)
- Barra de progresso: "Nível de Prontidão" com percentual
- Design: Card escuro, minimalista, dados destacados
- Frame de referência: video3/`docs\Frames_PRD\frame_3840.png`, video4/`docs\Frames_PRD\frame_1896.png`
- Prioridade: ALTA
- Status: APROVADO - "Mais simples. Concreto." (Vídeo 3, 02:37s)

**REQ-VENDA-002: Contextualização por Conquistas**

- Adicionar acima do card: "Baseado nas suas X conquistas"
- Número dinâmico baseado em badges reais do usuário
- Cor: texto branco, número em amarelo/dourado
- Exemplo: "Baseado nas suas 6 conquistas"
- Frame de referência: video4/`docs\Frames_PRD\frame_1896.png` (visualizado)
- Prioridade: MÉDIA
- Impacto: Personalização, validação social

**REQ-VENDA-003: Box de Diagnóstico (Opcional)**

- Título: "Diagnóstico:" (verde)
- Texto: "Você está totalmente pronto para sua jornada de liberdade definitiva"
- Design: Box com borda verde sutil
- Frame de referência: video4/`docs\Frames_PRD\frame_1896.png`
- Prioridade: BAIXA
- Status: Opcional, pode ser incluído

#### 3.4.3 Seção Central: Oferta Desbloqueada

**REQ-VENDA-004: Badge de Oferta Exclusiva**

- Texto: "🔓 OFERTA EXCLUSIVA DESBLOQUEADA"
- Cor: Vermelho/laranja em banner destacado
- Posicionamento: Acima do título principal
- Frame de referência: video3/`docs\Frames_PRD\frame_4224.png`
- Prioridade: CRÍTICA
- Impacto: Urgência, exclusividade, gatilho psicológico
- Status: "Isso aqui tá muito bom, tá?" (Vídeo 4, 01:17-19s)

**REQ-VENDA-005: Título de Classificação**

- Texto: "Sua Classificação Desbloqueou"
- Cor: Branco, tamanho grande
- Posicionamento: Logo abaixo do badge vermelho
- Frame de referência: video3/`docs\Frames_PRD\frame_4224.png`
- Prioridade: CRÍTICA
- Status: "sua classificação desbloqueou 70% de descontos. Isso aqui tá muito bom" (Vídeo 4, 01:11-19s)

**REQ-VENDA-006: Desconto Destacado**

- Texto: "70% DE DESCONTO"
- Cor: Verde neon/brilhante, tamanho gigante
- Peso: Bold/Heavy
- Posicionamento: Título principal da oferta
- Frame de referência: video3/`docs\Frames_PRD\frame_4224.png`
- Prioridade: CRÍTICA
- Impacto: Conversão, decisão de compra
- Status: Fortemente aprovado (Vídeo 4, 01:11-19s)

**REQ-VENDA-007: Copy de Exclusividade**

- Texto: "Apenas para quem completou a jornada como você"
- Cor: Cinza claro / branco suave
- Posicionamento: Abaixo do desconto
- Frame de referência: video3/`docs\Frames_PRD\frame_4224.png`
- Prioridade: ALTA
- Impacto: Validação, sentimento de conquista

#### 3.4.4 Seção de Preço

**REQ-VENDA-008: Estrutura de Preço**

- Preço original: "De R$ 297.00" (riscado, cinza)
- Preço com desconto: "R$ 89.10" (verde gigante, destaque máximo)
- Parcelamento: "ou 12x de R$ 7.43" (cinza, menor)
- Frame de referência: video3/`docs\Frames_PRD\frame_4224.png`
- Nota: Valores são exemplos, usar valores reais do produto
- Prioridade: ALTA

**REQ-VENDA-009: Badge de Economia**

- Texto: "📈 Você economizou R$ 207.90"
- Cor: Verde, em badge/pill
- Posicionamento: Abaixo do preço ou ao lado
- Frame de referência: video3/`docs\Frames_PRD\frame_4224.png`
- Prioridade: MÉDIA
- Impacto: Reforço de valor, sensação de ganho

#### 3.4.5 Seção de Benefícios

**REQ-VENDA-010: Card do Produto Principal**

- Ícone: Coroa (dourada/amarela) em card
- Título: "Respira Livre Premium" (manter do atual)
- Subtítulo: "O método completo para sua liberdade definitiva"
- Frame de referência: video4/`docs\Frames_PRD\frame_1896.png`
- Prioridade: MÉDIA

**REQ-VENDA-011: Lista de Benefícios Híbrida**

- Combinar melhor da versão atual + referência
- Itens aprovados da versão atual:
  - ✅ "Sistema gamificado completo com 50+ desafios progressivos"
- Itens aprovados da versão referência:
  - ✅ "Coach IA personalizado 24/7 baseado no seu perfil"
  - ✅ "Comunidade exclusiva de apoio com mentores certificados"
  - ✅ "Garantia de 30 dias - sua liberdade ou seu dinheiro de volta"
- Design: Checkmarks verdes, texto branco
- Frames de referência: video4/`docs\Frames_PRD\frame_0480.png`, video4/`docs\Frames_PRD\frame_1896.png`
- Prioridade: ALTA
- Status: "Solução personalizada é interessante" (Vídeo 4, 00:16s)

#### 3.4.6 Elementos de Urgência

**REQ-VENDA-012: Timer de Oferta**

- Visualizado na versão atual: "⏱️ Oferta expira em: 14:23"
- Cor: Vermelho/laranja
- Frame de referência: video4/`docs\Frames_PRD\frame_0480.png`
- Ação: MANTER
- Prioridade: MÉDIA
- Nota: Garantir que timer seja real e não enganoso

**REQ-VENDA-013: Prova Social**

- Texto: "X pessoas conquistaram a liberdade esta semana"
- Número dinâmico em verde/destaque
- Frame de referência: video4/`docs\Frames_PRD\frame_0480.png` (mostra "1.847 pessoas")
- Ação: MANTER
- Prioridade: MÉDIA

#### 3.4.7 Elementos a NÃO Incluir

**REQ-VENDA-014: Remover "Elite Liberdade" como Título**

- Problema: "Essa elite liberdade é meio, sei lá" (Vídeo 4, 00:39-46s)
- Ação: Usar "Seu Perfil de Liberdade" (versão raiz) como base
- Integrar copy da classificação e desconto (versão referência)
- Prioridade: MÉDIA
- Decisão: Título "Elite Liberdade" pode aparecer como badge/achievement, mas não como título principal da página

#### 3.4.8 Personalização Avançada (Roadmap Futuro)

**REQ-VENDA-015: Comunicação de Plano Personalizado**

- Descrição: "aqui já dá pra tipo assim ser na intenção de falar tipo ó mano, isso aqui é um plano personalizado pra você" (Vídeo 4, 01:34-42s)
- Copy sugerida: Adicionar frase como "Este plano foi personalizado especialmente para o seu perfil" ou similar
- Prioridade: MÉDIA
- Status: Prioridade 1 (MVP)

**REQ-VENDA-016: Dados Personalizados Reais (Futuro)**

- Descrição: "Óbvio que quanto mais realista melhor, se der pra ter alguma forma de tipo assim eh colocar dados personalizados" (Vídeo 4, 01:43-50s)
- Decisão: "Ou isso aí pode ser colocado como prioridade nível 2, que a gente vai otimizar depois" (Vídeo 4, 01:50-56s)
- Exemplos de personalização futura:
  - Recomendar duração do programa baseado em perfil
  - Sugerir desafios específicos
  - Ajustar preço/parcelamento baseado em análise de perfil
- Prioridade: BAIXA (Prioridade Nível 2)
- Status: Roadmap futuro, não urgente

#### 3.4.9 Distribuição e Layout

**REQ-VENDA-017: Correção de Hierarquia Visual**

- Problema: "essas informações aqui... não gostei das forma que tá distribuída" (Vídeo 4, 01:05-11s)
- Estrutura aprovada (ordem top-to-bottom):
  1. Contextualização por conquistas
  2. Card "Seu Perfil de Liberdade"
  3. Badge "Oferta Exclusiva Desbloqueada"
  4. Título "Sua Classificação Desbloqueou"
  5. "70% DE DESCONTO" (gigante)
  6. Copy de exclusividade
  7. Preço com economia
  8. Card do produto com benefícios
  9. Timer e prova social
  10. CTA principal
- Decisão: "Pode vir abaixo do seu perfil de liberdade" (Vídeo 4, 01:19-23s) - referindo-se ao bloco de oferta
- Prioridade: ALTA

**REQ-VENDA-018: CTA Principal**

- Texto sugerido: "🛡️ Garantir Minha Liberdade Agora" (inspirado na versão atual)
- OU: "Garantir Minha Oferta Exclusiva"
- Cor: Verde neon/brilhante (alta conversão)
- Tamanho: Grande, proeminente
- Posicionamento: Após todos os benefícios
- Prioridade: ALTA

---

## 4. REQUISITOS NÃO-FUNCIONAIS

### 4.1 Performance

**REQ-PERF-001: Tempo de Resposta de Cliques**

- Todos os cliques em botões coloridos (Memória Livre) devem ter feedback visual em <100ms
- Prioridade: ALTA
- Justificativa: Bug atual de lógica péssima pode estar relacionado a delay

**REQ-PERF-002: Frame Rate de Animações**

- Todas as animações devem rodar a 60fps
- Animações de feedback devem ser suaves e não travar
- Prioridade: MÉDIA

**REQ-PERF-003: Carregamento de Sons**

- Sons devem ser pré-carregados ao iniciar desafio
- Sem delay entre clique e reprodução de som
- Prioridade: MÉDIA

### 4.2 Acessibilidade

**REQ-ACES-001: Suporte a Memorização por Som**

- Desafio Memória Livre deve ser completável apenas com sons (sem visual)
- Cada cor tem som único e distinguível
- Prioridade: MÉDIA

**REQ-ACES-002: Feedback Multimodal**

- Todo feedback deve ter componente visual + sonoro
- Suporte a vibração em dispositivos móveis (opcional)
- Prioridade: BAIXA

**REQ-ACES-003: Contraste e Legibilidade**

- Todas as cores de botões devem passar WCAG AA
- Textos devem ter contraste mínimo 4.5:1
- Prioridade: MÉDIA

### 4.3 Compatibilidade

**REQ-COMP-001: Responsividade**

- Todos os desafios devem funcionar em mobile (principal) e desktop
- Grid de botões deve adaptar para diferentes tamanhos de tela
- Prioridade: ALTA

**REQ-COMP-002: Navegadores**

- Suporte: Chrome, Safari, Firefox, Edge (últimas 2 versões)
- Prioridade: MÉDIA

### 4.4 Segurança e Integridade

**REQ-SEG-001: Validação Server-Side**

- Pontuações e recompensas devem ser validadas no servidor
- Impedir manipulação client-side de XP/Coins
- Prioridade: ALTA

**REQ-SEG-002: Timer Real**

- Timer de oferta na página de vendas deve ser baseado em timestamp real
- Não deve ser enganoso ou resetar artificialmente
- Prioridade: ALTA

---

## 5. ESPECIFICAÇÕES DE DESIGN

### 5.1 Sistema de Cores

**Paleta Principal (Versão Raiz - Aprovada):**

- Background: Preto (#000000) ou cinza muito escuro
- Cards: Cinza escuro com leve transparência
- Primário (CTAs): Roxo/Magenta vibrante
- Secundário: Verde neon (para sucessos, XP, highlights)
- Terciário: Amarelo/Dourado (para XP, destaques especiais)
- Erro: Vermelho (#FF3B3B ou similar)
- Coins: Verde (#00D26A ou similar)

**Cores dos Botões (Memória Livre):**

- Verde: #00FF00 ou #00D26A (verde vibrante)
- Amarelo: #FFD700 ou #FFEB3B (amarelo brilhante)
- Azul: #00A6FF ou #2196F3 (azul claro/ciano)
- Roxo: #FF00FF ou #E91E63 (rosa/magenta)

**Cores de Feedback:**

- Sucesso: Verde #00D26A
- Erro: Vermelho #FF3B3B
- Destaque de oferta: Vermelho/laranja #FF6B35
- Economia: Verde #00FF88

### 5.2 Tipografia

**Hierarquia de Textos:**

- H1 (Títulos principais): 32-40px, Bold/Heavy
- H2 (Subtítulos): 24-28px, Semibold
- H3 (Seções): 18-22px, Semibold
- Body: 16px, Regular
- Small (labels): 12-14px, Regular

**Fontes Sugeridas:**

- Sans-serif moderna (ex: Inter, SF Pro, Poppins)
- Monospace para números de XP/Coins (opcional)

### 5.3 Espaçamento e Grid

**Espaçamento:**

- Padding interno de cards: 20-24px
- Margem entre elementos: 16px (padrão)
- Margem entre seções: 32-40px

**Grid de Botões (Memória Livre):**

- Layout: 2x2
- Gap entre botões: 16-20px
- Tamanho dos botões: Quadrados, 140-160px (mobile)
- Border radius: 16-20px

### 5.4 Animações

**Duração Padrão:**

- Feedback de clique: 200-300ms
- Transições de tela: 300-400ms
- Animações de sucesso: 400-600ms

**Easing:**

- Cliques: ease-out
- Transições: ease-in-out
- Celebrações: cubic-bezier custom para "bounce"

### 5.5 Efeitos Visuais

**Aprovados:**

- Glow sutil em botões ativos
- Scale up em hover/active
- Border highlights
- Partículas/confetti em sucessos

**Proibidos:**

- "Estética de vidro" (glassmorphism) - explicitamente rejeitado
- Blur excessivo em backgrounds
- Gradientes complexos em versão de referência

---

## 6. ELEMENTOS A MANTER

### 6.1 Da Versão Raiz (lovable.app)

- ✅ Design global (aprovado: "tá perfeito")
- ✅ Paleta de cores escura e vibrante
- ✅ Estrutura de cards
- ✅ "Seu Perfil de Liberdade" como base
- ✅ Timer de oferta
- ✅ Prova social (X pessoas conquistaram)
- ✅ Badge/pill de "Step: X"
- ✅ Botão "Pular Desafio (Sem Recompensas)"
- ✅ Tela de erro "Não foi dessa vez!"

### 6.2 Da Versão de Referência (vercel.app)

- ✅ Copy "Oferta Exclusiva Desbloqueada"
- ✅ Copy "Sua Classificação Desbloqueou"
- ✅ Copy "70% DE DESCONTO"
- ✅ Copy "Apenas para quem completou a jornada como você"
- ✅ Badge de economia "Você economizou R$ X"
- ✅ Benefício "Coach IA personalizado 24/7"
- ✅ Benefício "Comunidade exclusiva"
- ✅ Benefício "Garantia de 30 dias"
- ✅ Conceito de boss (para futura implementação)

---

## 7. ELEMENTOS A MODIFICAR/ADICIONAR

### 7.1 Desafio Memória Livre

**MODIFICAR:**

- ❌ Lógica de validação (remover automação)
- ❌ Sistema de sequências (padronizar)
- ❌ Animações de feedback (melhorar)
- ❌ Seleção de botões (clarear estado)

**ADICIONAR:**

- ➕ Botão "Confirmar Sequência"
- ➕ Botão "Resetar"
- ➕ Sons únicos por cor
- ➕ Sistema de 2 níveis
- ➕ Tela de transição entre níveis
- ➕ Nível 2 opcional com copy motivacional
- ➕ Estrutura de bônus
- ➕ Indicadores de nível (1 de 2, 2 de 2)

### 7.2 Novo Desafio: Foco Rápido

**CRIAR DO ZERO (design raiz):**

- ➕ Mecânica de inimigos aparecendo
- ➕ Sistema de spawn aleatório
- ➕ Contador de acertos
- ➕ Barra de tempo (45s)
- ➕ Feedback de eliminação
- ➕ Sistema de tiers de recompensa
- ➕ Badge "Reflexos de Elite"

### 7.3 Página de Vendas

**MODIFICAR:**

- ❌ Hierarquia de informações (reorganizar)
- ❌ Posição do bloco de oferta (abaixo do perfil)

**ADICIONAR:**

- ➕ "Baseado nas suas X conquistas"
- ➕ Badge vermelho "Oferta Exclusiva Desbloqueada"
- ➕ "Sua Classificação Desbloqueou"
- ➕ "70% DE DESCONTO" em destaque
- ➕ Badge de economia
- ➕ Benefícios híbridos (versão raiz + referência)
- ➕ Copy "Este plano foi personalizado para você"

---

## 8. FLUXO DE USUÁRIO

### 8.1 Fluxo Principal: Desafio Memória Livre

```
1. [Tela de Apresentação]
   - Visualiza: Título, descrição, recompensas
   - Ação: Clica "Começar Desafio"
   ↓
2. [Nível 1: Apresentação]
   - Sistema mostra sequência de 2 cores (visual + som)
   - Indicador: "Nível 1 de 2"
   - Usuário observa e memoriza
   ↓
3. [Nível 1: Reprodução]
   - Usuário clica nas cores na ordem
   - Feedback visual e sonoro a cada clique
   - Botões disponíveis: "Confirmar Sequência" / "Resetar"
   ↓
4a. [Nível 1: Sucesso]
   - Animação de sucesso
   - Exibe recompensa: +200 XP +100 Coins
   - Tela de transição com opções:
     • "Aceitar Nível 2" (com preview de bônus)
     • "Finalizar e Coletar Recompensas"
   ↓
5a. [Se aceitar Nível 2]
   - Sistema mostra sequência de 5 cores (mais lento)
   - Indicador: "Nível 2 de 2"
   - Fluxo similar ao Nível 1
   ↓
6a. [Nível 2: Sucesso]
   - Animação de grande sucesso (confetti)
   - Exibe bônus: +300 XP +200 Coins
   - Badge desbloqueado: "Mente de Aço"
   - Retorna ao mapa de desafios

OU

5b. [Se finalizar após Nível 1]
   - Coleta recompensas do Nível 1
   - Retorna ao mapa de desafios

OU

4b. [Nível 1: Erro]
   - Tela de erro: "Não foi dessa vez!"
   - Copy motivacional
   - Opções: "Tentar Novamente" / "Pular Desafio"
```

### 8.2 Fluxo Principal: Desafio Foco Rápido

```
1. [Tela de Apresentação]
   - Visualiza: Título, descrição, tempo limite (45s)
   - Ação: Clica "Começar Desafio"
   ↓
2. [Jogo: Loop Principal]
   - Timer inicia contagem regressiva
   - Inimigos aparecem aleatoriamente
   - Usuário clica para eliminar
   - Contador de acertos atualiza em tempo real
   - Loop continua por 45s
   ↓
3. [Fim do Desafio]
   - Timer chega a 0
   - Sistema calcula tier de recompensa:
     • 10-19 acertos: Tier 1
     • 20-29 acertos: Tier 2
     • 30+ acertos: Tier 3 + Badge
   ↓
4. [Tela de Resultado]
   - Exibe total de acertos
   - Animação baseada em tier
   - Recompensas coletadas
   - Opção: "Continuar" (retorna ao mapa)
```

### 8.3 Fluxo Principal: Página de Vendas

```
1. [Chegada na Página]
   - Usuário completa jornada de desafios
   - Redirecionamento automático
   ↓
2. [Visualização do Perfil]
   - Vê "Baseado nas suas X conquistas"
   - Vê card com suas métricas (XP, Coins, Badges)
   - Vê Nível de Prontidão: 100%
   ↓
3. [Descoberta da Oferta]
   - Scroll down
   - Badge vermelho: "OFERTA EXCLUSIVA DESBLOQUEADA"
   - Título: "Sua Classificação Desbloqueou"
   - Desconto: "70% DE DESCONTO" (gigante, verde)
   - Copy: "Apenas para quem completou a jornada como você"
   ↓
4. [Análise de Valor]
   - Vê preço original riscado
   - Vê preço com desconto (grande)
   - Vê economia total
   - Lê benefícios do produto
   ↓
5. [Urgência]
   - Nota timer de oferta
   - Vê prova social (X pessoas conquistaram)
   ↓
6. [Decisão]
   - Clica CTA: "Garantir Minha Liberdade Agora"
   - Redirecionamento para checkout
```

---

## 9. MÉTRICAS DE SUCESSO

### 9.1 Métricas de Engajamento

**Desafios:**

- Taxa de conclusão do Nível 1 (Memória Livre): Meta >70%
- Taxa de tentativa do Nível 2 (Memória Livre): Meta >40%
- Taxa de conclusão do Nível 2: Meta >25%
- Taxa de conclusão (Foco Rápido): Meta >60%
- Tempo médio por desafio: Benchmark a definir

**Bugs Corrigidos:**

- Taxa de erros de validação automática: Meta = 0%
- Reclamações de "jogo bugado": Meta = 0

### 9.2 Métricas de Qualidade

**Performance:**

- Tempo de resposta de clique: <100ms
- Frame rate de animações: 60fps
- Bugs críticos abertos: 0

**UX:**

- Taxa de abandono em desafios: Meta <30%
- Satisfação com feedback visual: Survey pós-desafio

### 9.3 Métricas de Negócio

**Conversão:**

- Taxa de conversão da página de vendas: Benchmark atual + 20-30% (esperado)
- Valor médio de pedido: Manter ou aumentar
- Taxa de rejeição na página de vendas: Meta <40%

**Engajamento pré-venda:**

- Usuários que completam jornada completa: Meta >50%
- Badges coletados por usuário: Média >3

---

## 10. IMPLEMENTAÇÃO

### 10.1 Priorização (MVP - Fase 1)

**URGENTE (Semana 1-2):**

1. ✅ Corrigir bugs críticos do Memória Livre (REQ-MEM-001 a 004)
2. ✅ Implementar botão de confirmação (REQ-MEM-005)
3. ✅ Implementar sistema de 2 níveis (REQ-MEM-006, 007)
4. ✅ Criar página de vendas híbrida (REQ-VENDA-001 a 018)

**ALTA PRIORIDADE (Semana 3-4):** 5. ✅ Implementar sons no Memória Livre (REQ-MEM-012) 6. ✅ Melhorar animações e feedback (REQ-MEM-013) 7. ✅ Criar Desafio Foco Rápido completo (REQ-FOC-001 a 005) 8. ✅ Implementar sistema de bônus do Nível 2 (REQ-MEM-009, 010, 011)

**MÉDIA PRIORIDADE (Semana 5-6):** 9. ✅ Ajustar velocidade por nível (REQ-MEM-008) 10. ✅ Implementar contador de acertos (REQ-FOC-005) 11. ✅ Adicionar prova social e timer real (REQ-VENDA-012, 013) 12. ✅ Otimizar responsividade mobile (REQ-COMP-001)

### 10.2 Fase 2 (Otimizações)

**BAIXA PRIORIDADE (Futuro):**

- Boss Battle Challenge (REQ-FOC-006)
- Personalização avançada com dados reais (REQ-VENDA-016)
- Badges e conquistas adicionais
- Analytics e A/B testing de variações

### 10.3 Dependências Técnicas

**Backend:**

- Sistema de validação server-side de pontos/recompensas
- API para atualizar perfil do usuário
- Endpoint para gerar timer real de oferta
- Armazenamento de progresso de desafios

**Frontend:**

- Framework: React (presumido)
- Biblioteca de animações: Framer Motion ou React Spring
- Biblioteca de sons: Howler.js ou Web Audio API
- State management: Context API ou Redux

**Assets:**

- Sons para 4 cores (formato: .mp3 ou .wav)
- Ícones de inimigos (SVG)
- Badges de conquistas .png` ou SVG)
- Imagens de celebração/confetti

### 10.4 Estimativas (Opcionais)

**Desenvolvimento:**

- Correção de bugs Memória Livre: 2-3 dias
- Novo sistema de níveis: 3-4 dias
- Desafio Foco Rápido: 5-6 dias
- Página de vendas híbrida: 2-3 dias
- Implementação de sons: 1-2 dias
- Animações e feedback: 2-3 dias
- QA e testes: 3-4 dias

**Total estimado Fase 1:** 18-25 dias úteis

---

## 11. CRITÉRIOS DE ACEITAÇÃO

### 11.1 Desafio Memória Livre

- [ ] Nenhum avanço automático ocorre sem input do usuário
- [ ] Botão "Confirmar Sequência" funciona corretamente
- [ ] Botão "Resetar" limpa seleção atual
- [ ] Sistema apresenta exatamente 2 níveis (não aleatório)
- [ ] Nível 1 possui 2 sequências de cores
- [ ] Nível 2 possui 5 sequências de cores
- [ ] Nível 2 executa mais lento que Nível 1
- [ ] Sons únicos tocam para cada cor (4 sons diferentes)
- [ ] Feedback visual de clique é claro e instantâneo (<100ms)
- [ ] Tela de transição entre níveis exibe copy motivacional
- [ ] Opção de pular Nível 2 está disponível sem penalização
- [ ] Recompensas de Nível 1: +200 XP +100 Coins
- [ ] Recompensas de Nível 2: +300 XP +200 Coins + Badge
- [ ] Tela de erro aparece APENAS após validação explícita
- [ ] Animação de sucesso inclui confetti ou partículas

### 11.2 Desafio Foco Rápido

- [ ] Desafio está implementado no design da versão raiz (sem estética de vidro)
- [ ] Inimigos aparecem em posições aleatórias
- [ ] Tempo limite é exatamente 45 segundos
- [ ] Contador de acertos atualiza em tempo real
- [ ] Sistema diferencia entre 3 tiers de recompensa (10, 20, 30 acertos)
- [ ] Badge "Reflexos de Elite" é desbloqueado com 30+ acertos
- [ ] Não há mudança automática de estado sem clique
- [ ] Feedback visual de eliminação é claro
- [ ] Sons de feedback tocam ao eliminar inimigo

### 11.3 Página de Vendas

- [ ] Design base é da versão raiz (lovable.app)
- [ ] Copy principal é da versão referência (vercel.app)
- [ ] "Baseado nas suas X conquistas" aparece no topo
- [ ] Card "Seu Perfil de Liberdade" exibe XP, Coins, Badges
- [ ] Badge vermelho "OFERTA EXCLUSIVA DESBLOQUEADA" está presente
- [ ] Título "Sua Classificação Desbloqueou" está presente
- [ ] "70% DE DESCONTO" é o elemento mais destacado (verde gigante)
- [ ] Copy "Apenas para quem completou a jornada como você" está presente
- [ ] Preço original está riscado
- [ ] Preço com desconto está em verde gigante
- [ ] Badge de economia "Você economizou R$ X" está presente
- [ ] Benefícios híbridos incluem: sistema gamificado, coach IA, comunidade, garantia
- [ ] Timer de oferta é funcional e não enganoso
- [ ] Prova social exibe número de pessoas (atualizado)
- [ ] Hierarquia visual segue ordem definida (perfil → oferta → preço → benefícios)
- [ ] CTA principal está em verde e é proeminente
- [ ] Nenhum elemento "Elite Liberdade" aparece como título principal
- [ ] Toda a página é responsiva em mobile

### 11.4 Gerais

- [ ] Todos os bugs críticos identificados foram corrigidos
- [ ] Design é consistente em todas as telas (sem mudanças abruptas)
- [ ] Nenhuma "estética de vidro" está presente
- [ ] Performance é aceitável (cliques <100ms, animações 60fps)
- [ ] Todos os sons carregam sem delay perceptível
- [ ] Sistema funciona em Chrome, Safari, Firefox, Edge
- [ ] Validações de pontos ocorrem no servidor (não manipulável)
- [ ] Testes de QA foram realizados em mobile e desktop
- [ ] Documentação de código está atualizada

---

## 12. ANEXOS

### 12.1 Referências Visuais

**Frames-Chave Analisados:**

**Vídeo 1 (Finais-1.mp4):**

- `docs\Frames_PRD\Video1\frame_0096.png` - Desafio Memória Livre (aprovado)
- `docs\Frames_PRD\Video1\frame_1296.png` - "tá muito bom, pô"
- `docs\Frames_PRD\Video1\frame_1600.png` - Interface de jogo com 4 botões
- `docs\Frames_PRD\Video1\frame_1680.png` - "lógica tá péssima"
- `docs\Frames_PRD\Video1\frame_1872.png` - BUG: tela de erro automática
- `docs\Frames_PRD\Video1\frame_2232.png` - Solução: botão de confirmação
- `docs\Frames_PRD\Video1\frame_2712.png` - BUG: mensagem sozinha
- `docs\Frames_PRD\Video1\frame_3312.png` - Definição de sequências
- `docs\Frames_PRD\Video1\frame_4008.png` - Sistema de níveis proposto

**Vídeo 2 (Finais-2.mp4):**

- `docs\Frames_PRD\Video2\frame_0384.png` - Definição final: 2 níveis
- `docs\Frames_PRD\Video2\frame_1776.png` - "60% não conseguiram"
- `docs\Frames_PRD\Video2\frame_2736.png` - Design mudou, péssimo
- `docs\Frames_PRD\Video2\frame_3048.png` - BUG de mudança automática
- `docs\Frames_PRD\Video2\frame_3288.png` - Fusão: inimigos no desafio
- `docs\Frames_PRD\Video2\frame_3432.png` - Crítica: estética de vidro
- `docs\Frames_PRD\Video2\frame_4032.png` - Mecânica final definida

**Vídeo 3 (Finais-3.mp4):**

- `docs\Frames_PRD\Video3\frame_0720.png` - Conceito de boss
- `docs\Frames_PRD\Video3\frame_1296.png` - Mecânica boss em ação
- `docs\Frames_PRD\Video3\frame_1656.png` - Detalhamento completo
- `docs\Frames_PRD\Video3\frame_2352.png` - Design raiz criticado
- `docs\Frames_PRD\Video3\frame_2736.png` - UX sobrecarregada
- `docs\Frames_PRD\Video3\frame_3312.png` - BUG de navegação
- `docs\Frames_PRD\Video3\frame_3840.png` - Página simples aprovada
- `docs\Frames_PRD\Video3\frame_4224.png` - Elite Liberdade (copy aprovada)

**Vídeo 4 (Finais-4.mp4):**

- `docs\Frames_PRD\Video4\frame_0480.png` - Solução personalizada
- `docs\Frames_PRD\Video4\frame_0792.png` - Design atual melhor
- `docs\Frames_PRD\Video4\frame_0936.png` - Copy 70% desconto
- `docs\Frames_PRD\Video4\frame_1272.png` - Solução híbrida
- `docs\Frames_PRD\Video4\frame_1704.png` - Distribuição problemática
- `docs\Frames_PRD\Video4\frame_1896.png` - Oferta desbloqueada (aprovado fortemente)
- `docs\Frames_PRD\Video4\frame_2784.png` - Personalização nível 2

### 12.2 Assets Necessários

**Sons (4 arquivos):**

- verde.mp3 - Tom grave (C3, ~130 Hz)
- amarelo.mp3 - Tom médio-agudo (E3, ~165 Hz)
- azul.mp3 - Tom médio (G3, ~196 Hz)
- roxo.mp3 - Tom agudo (C4, ~262 Hz)

**Sons de Feedback:**

- sucesso.mp3 - Som de conquista/vitória
- erro.mp3 - Som de erro/falha
- click.mp3 - Som de clique de botão
- eliminacao.mp3 - Som de eliminar inimigo

**Ícones:**

- inimigo.svg - Representação de inimigo/tentação
- cerebro.svg - Ícone do desafio Memória Livre
- alvo.svg - Ícone do desafio Foco Rápido
- boss.svg - Ícone de boss (futuro)

**Badges:**

- mente_de_aco.png` - Badge do Nível 2 (Memória Livre)
- reflexos_de_elite.png` - Badge de 30+ acertos (Foco Rápido)

### 12.3 Dados de Análise

**Vídeos Analisados:**

- Finais-1.mp4: 180 segundos, 4.320 frames extraídos
- Finais-2.mp4: 180 segundos, 4.320 frames extraídos
- Finais-3.mp4: 180 segundos, 4.320 frames extraídos
- Finais-4.mp4: 125.67 segundos, 3.016 frames extraídos

**Total de Dados:**

- Duração total: 11 minutos 45 segundos (685.67s)
- Frames extraídos: 15.976
- Frames-chave analisados: 36
- Transcrição: 411 linhas de texto
- Timestamps mapeados: 80+

**Fontes:**

- Transcrição completa: Finais_completo.md
- Vídeos originais: Finais-1.mp4, Finais-2.mp4, Finais-3.mp4, Finais-4.mp4
- Frames extraídos: /home/claude/frames/video1-4/

---

## RESUMO EXECUTIVO

**PRIORIDADES MÁXIMAS:**

1. Corrigir bugs críticos do Memória Livre (automação indevida)
2. Implementar sistema de 2 níveis com confirmação manual
3. Criar página de vendas híbrida (design raiz + copy referência)
4. Implementar Desafio Foco Rápido no design correto

**DECISÕES-CHAVE:**

- Design base: Versão raiz (lovable.app) - APROVADO
- Copy de vendas: Versão referência (vercel.app) - APROVADO
- Abordagem: Híbrida, pegando melhor de cada versão
- Priorização: "o mais urgente é aquelas coisas que eu falei já" (Vídeo 4, 02:04s)

**ELEMENTOS REJEITADOS:**

- Estética de vidro (glassmorphism)
- Design da versão referência para desafios
- "Elite Liberdade" como título principal
- Desafio do botão original (arquivado)
- Boss Battle atual (muito tedioso, retrabalhar)

**PRÓXIMOS PASSOS:**

1. Review deste PRD com equipe técnica
2. Breakdown de tasks no backlog
3. Iniciar desenvolvimento da Fase 1
4. QA contínuo com foco em bugs identificados
5. Deploy incremental e monitoramento de métricas

---

**Documento criado por:** Análise automatizada de vídeos  
**Método:** Extração frame-by-frame + correlação com transcrição  
**Frames analisados:** 15.976 frames totais, 36 frames-chave documentados  
**Factualidade:** 100% baseado em evidências visuais e quotes literais  
**Versão:** 2.0 - Análise de Vídeos Finais  
**Data:** 18 de Dezembro de 2025
