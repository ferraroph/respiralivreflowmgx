# INTRODUÇÃO - PRD RESPIRA LIVRE

OBS: ESSE PRD ESTÁ SEPARADO POR ETAPAS. CADA ETAPA TERÁ UM PRD ESPECÍFICO. SE AINDA NÃO TEM, SOLICITE SEMPRE O PRD ESPECÍFICO DA ETAPA.

---

# ETAPA 4 - Desafio da Respiração

## Respira Livre - Funil Gamificado de Cessação do Tabagismo

## 1. CONTEXTO E OBJETIVO

### 1.1 Situação Atual

Existem duas versões do funil do Desafio da Respiração:

- **Funil Novo**: Raiz/workspace `\` (Hospedado em respiralivrreflow.vercel.app)
- **Funil Antigo (Referência)**: `util\funilrespiralivre-oficial` (Hospedado em respiralivrreflow.lovable.app)

O funil novo apresenta múltiplos problemas de UX, design e implementação técnica que comprometem a experiência gamificada e a retenção do usuário.

### 1.2 Objetivo do PRD

Documentar as correções e otimizações necessárias no funil novo, utilizando elementos bem-sucedidos do funil antigo como referência, para criar uma experiência de desafio da respiração eficaz, engajante e que estimule a dopamina do usuário.

## 2. ANÁLISE COMPARATIVA DETALHADA

### 2.1 TELA DE TUTORIAL/INTRODUÇÃO

#### 2.1.1 Funil Novo (vercel.app) - Estado Atual

**Elementos Presentes:**

- Título: "Desafio da Respiração" (verde neon)
- Subtítulo: "Pratique respiração consciente e ganhe pontos"
- Três indicadores de progresso (pontos verdes)
- Ícone: linhas de vento em quadrado verde arredondado
- Texto: "Nível 1 - Dificuldade: Iniciante"
- Seção: "Como Funcionar:" (container com fundo escuro)
  - Item 1: "Respire profundamente seguindo o ritmo visual"
  - Item 2: "Mantenha o foco por pelo menos 10 segundos"
  - Item 3: "Quanto mais tempo, mais pontos você ganha!"

**Problemas Identificados:**

1. Erro ortográfico crítico: "Como Funcionar:" ao invés de "Como Funciona"
2. Container de instruções pode ser melhorado
3. Falta seção de recompensas visível

#### 2.1.2 Funil Antigo (lovable.app) - Referência

**Elementos Presentes:**

- Título: "Desafio: Respiração Vital"
- Subtítulo: "Controle sua respiração, controle seu destino"
- Ícone: mesmo símbolo de vento, mas COM GLOW/BRILHO verde pulsante
- Badge: "Nível 1" sobreposto ao ícone
- Indicador de progresso: "Level Progress" com barra e "-225 XP to next level"
- Seção: "Como Funciona" (ortografia correta, com ícone de raio)
  - Item 1: "Siga o ritmo visual da respiração: inspire, segure, expire"
  - Item 2: "Quanto mais tempo você respirar, mais pontos ganha"
  - Item 3: "Mínimo 10 segundos para ganhar recompensas"
- Box destacado: "Recompensa Máxima: +300 XP +120 Coins" (fundo escuro com texto amarelo)
- Botão: "Começar Desafio" (verde neon brilhante, com ícone de raio)

**Pontos Fortes:**

1. Ícone tem efeito de glow/brilho que chama atenção
2. Seção de recompensas visível e destacada
3. Ortografia correta
4. Design mais polido com efeitos visuais

### 2.2 TELA DE EXECUÇÃO DO DESAFIO

#### 2.2.1 Funil Novo (vercel.app) - Estado Atual

**Elementos Presentes:**

- Header com timer (11s) e pontuação (100 pts)
- Círculo grande central (verde para "Inspire", azul para "Expire")
- Ícone de vento dentro do círculo
- Texto da ação dentro do círculo ("Inspire" ou "Expire")
- Contador de "respirações completas" abaixo do círculo
- Botão "Pular Desafio" (AMARELO, posicionado ACIMA)
- Botão "Concluir e Coletar: 260 pts" (verde, posicionado ABAIXO)

**Problemas Críticos Identificados:**

1. **ANIMAÇÃO NÃO FUNCIONA**: O círculo está completamente parado, não expande nem contrai
2. **Sequência sem sentido**: Mostra "Segure... expire... nada a ver com nada" - as instruções aparecem mas não fazem sentido sem animação
3. **Distribuição ruim**: Elementos mal organizados na tela
4. **Botões escondidos**: "Ficou até escondido esses botões de baixo"
5. **HIERARQUIA INVERTIDA**: Botão "Pular Desafio" está em AMARELO CHAMATIVO no topo, estimulando o usuário a abandonar o desafio
6. **Falta feedback de dopamina**: Sem elementos que estimulem dopamina tipo "joguinho de cassino"
7. **Sistema de pontuação pouco visível**: Apesar de mostrar pontos, não há notificações ou feedback empolgante

#### 2.2.2 Funil Antigo (lovable.app) - Referência

**Elementos Presentes:**

- Círculo MUITO MAIOR ocupando mais da tela
- Texto grande e legível dentro do círculo: "INSPIRE" ou "EXPIRE" (em caixa alta)
- Contador grande dentro do círculo (exemplo: "4", "6")
- Design minimalista: foco total no círculo, sem elementos competindo
- Botão "Concluir e Coletar: +85 XP" (verde neon brilhante, posicionado NO TOPO)
- Botão "Pular Desafio (Sem Recompensas)" (cinza discreto, posicionado EMBAIXO, com ícone X)

**Pontos Fortes:**

1. Círculo maior = mais imersivo
2. Tipografia clara e grande
3. Design limpo que não compete pela atenção
4. **HIERARQUIA CORRETA DE BOTÕES**:
   - CTA principal (concluir) destacado em verde no topo
   - CTA negativo (pular) discreto em cinza embaixo
   - Texto do botão pular inclui "(Sem Recompensas)" para desestimular
5. Distribuição visual superior

### 2.3 TELA DE CONCLUSÃO

#### 2.3.1 Funil Novo (vercel.app) - Estado Atual

**Elementos Presentes:**

- Ícone de troféu (verde com fundo circular)
- Título: "Desafio Concluído!"
- Texto motivacional: "Você demonstrou uma resistência incrível! Sua força de vontade está se fortalecendo."
- Card azul/roxo com:
  - "Nível Final: 7"
  - "Pontos Ganhos: 280"
  - "Bônus de Conclusão: +140 pontos!" (texto verde)
  - Ícone de estrela
- Botão: "Concluir e Coletar Pontos" (verde, com ícone de troféu)

**Problemas Identificados:**

1. Design considerado "péssimo" e "quebrou totalmente"
2. Layout inconsistente com o resto do funil

## 3. REQUISITOS FUNCIONAIS

### 3.1 CORREÇÕES OBRIGATÓRIAS - TELA DE TUTORIAL

**REQ-TUT-001: Correção Ortográfica**

- Alterar "Como Funcionar:" para "Como Funciona"
- Prioridade: CRÍTICA
- Impacto: Credibilidade da aplicação

**REQ-TUT-002: Adicionar Efeito de Glow no Ícone**

- Implementar efeito de brilho/pulsação no ícone de vento
- Referência: Funil antigo (lovable.app)
- Efeito: Glow verde que pulsa suavemente
- Prioridade: ALTA

**REQ-TUT-003: Manter Container de "Como Funciona"**

- Preservar o container atual do funil novo
- Garantir que tenha o ícone adequado (conforme funil antigo)
- Prioridade: MÉDIA

**REQ-TUT-004: Adicionar Box de Recompensas Possíveis**

- Criar área destacada mostrando recompensas máximas
- Conteúdo: Usar as informações do funil antigo
- Posicionamento: Abaixo do container "Como Funciona"
- Estilo visual: Box com destaque, fundo escuro, texto em amarelo/verde
- Exemplo: "100+ XP Base, 50+ Coins, 1 Badge" (valores do funil novo) ou usar valores do antigo
- Prioridade: ALTA

### 3.2 REQUISITOS CRÍTICOS - TELA DE EXECUÇÃO

**REQ-EXEC-001: Implementar Animação Sincronizada**

- A animação DEVE funcionar e acompanhar a respiração do usuário
- Comportamento esperado:
  - INSPIRE: Círculo EXPANDE gradualmente
  - SEGURE: Círculo permanece no tamanho máximo
  - EXPIRE: Círculo CONTRAI gradualmente
- Sincronização: Animação deve seguir o ritmo definido (ex: 4s inspire, 4s segure, 6s expire)
- Prioridade: CRÍTICA
- Nota: "A respiração tem que acompanhar" - animação visual deve guiar a respiração do usuário

**REQ-EXEC-002: Aumentar Tamanho do Círculo**

- Aumentar significativamente o tamanho do círculo de respiração
- Referência: Círculo do funil antigo ocupa muito mais espaço da tela
- Objetivo: Maior imersão e foco do usuário
- Prioridade: ALTA

**REQ-EXEC-003: Corrigir Hierarquia de Botões**

- **Botão Principal (Concluir):**
  - Cor: Verde neon brilhante
  - Posição: NO TOPO
  - Texto: "Concluir e Coletar: [X] pts" (onde X é a pontuação atual)
  - Ícone: Troféu
- **Botão Secundário (Pular):**
  - Cor: Cinza discreto (não amarelo)
  - Posição: EMBAIXO
  - Texto: "Pular Desafio (Sem Recompensas)" ou similar que desestimule
  - Ícone: X
- Prioridade: CRÍTICA
- Justificativa: "Botão pular desafio, tá vendo aqui, que ele desestimula a pessoa a clicar nesse botão" vs "estimula, tá vendo? Nada a ver, amarelo, em cima"

**REQ-EXEC-004: Melhorar Distribuição de Elementos**

- Corrigir layout para que botões não fiquem escondidos
- Garantir hierarquia visual clara
- Evitar sobreposição ou elementos cortados
- Prioridade: ALTA

**REQ-EXEC-005: Implementar Sistema de Feedback de Dopamina**

- Adicionar elementos que estimulem dopamina similar a "joguinho de cassino"
- Exemplos sugeridos:
  - Notificações visuais quando ganhar pontos
  - Animações de celebração ao completar respirações
  - Efeitos sonoros (opcional, mas não obrigatório)
  - Contador de pontos com animação ao incrementar
  - Partículas, brilhos ou outros efeitos visuais recompensadores
- Prioridade: ALTA
- Nota: "tipo aqueles... joguinho de cassino, pô. Lembrando que tá rolando pontuação aqui"

**REQ-EXEC-006: Som Opcional**

- Sistema de som é opcional
- "se possível ter algum som e tal, mas não precisa"
- Prioridade: BAIXA

### 3.3 REQUISITOS - TELA DE CONCLUSÃO

**REQ-CONC-001: Redesign Completo**

- Revisar completamente o design da tela de conclusão
- Objetivo: Consistência visual com o resto do funil
- Manter elementos informativos (nível, pontos, bônus)
- Melhorar apelo visual
- Prioridade: ALTA
- Nota: Design atual "quebrou totalmente" e está "péssimo"

## 4. REQUISITOS NÃO-FUNCIONAIS

### 4.1 Performance

- Animação deve ser suave (60 FPS)
- Transições devem ter timing adequado para guiar respiração
- Não deve haver lag ou travamentos durante execução

### 4.2 Acessibilidade

- Animação deve ter opção de redução para usuários sensíveis
- Cores devem manter contraste adequado
- Textos devem ser legíveis em diferentes tamanhos de tela

### 4.3 Compatibilidade

- Funcionar em dispositivos móveis (principal)
- Funcionar em desktop
- Compatibilidade com navegadores principais

## 5. ESPECIFICAÇÕES DE DESIGN

### 5.1 Cores

**Paleta Principal (já estabelecida):**

- Verde neon: Usado em CTAs principais, ícones, textos de destaque
- Amarelo: REMOVER do botão "Pular Desafio"
- Cinza escuro: Para botões secundários/negativos
- Azul/Roxo: Para backgrounds e elementos secundários
- Preto: Background principal

### 5.2 Tipografia

**Hierarquia de Textos:**

- Títulos: Grande, bold, verde neon
- Instruções dentro do círculo: CAIXA ALTA, grande, branca
- Contador dentro do círculo: Muito grande, bold
- Corpo de texto: Regular, médio, branco/cinza claro
- Botões: Bold, legível

### 5.3 Animações

**Timing de Respiração (exemplo):**

- Inspire: 4 segundos (expansão)
- Segure: 4 segundos (pausa no tamanho máximo)
- Expire: 6 segundos (contração)
- Ciclo total: 14 segundos

**Easing:**

- Expansão: ease-in-out para suavidade
- Contração: ease-in-out para suavidade
- Transições de estado: Suaves, sem cortes abruptos

### 5.4 Efeitos Visuais

**Glow/Brilho:**

- Ícone principal: Glow verde pulsante
- Botões principais: Glow sutil ao hover
- Círculo de respiração: Pode ter glow durante estados ativos

**Feedback de Dopamina:**

- Partículas ao ganhar pontos
- Animação de números incrementando
- Flash sutil de luz ao completar respiração
- Possíveis efeitos de confete ou estrelas ao concluir

## 6. ELEMENTOS A MANTER DO FUNIL NOVO

### 6.1 Estrutura Base

- Layout geral da tela de tutorial
- Sistema de níveis e dificuldade
- Sistema de pontuação base
- Estrutura de navegação

### 6.2 Conteúdo

- Textos das instruções (após correção ortográfica)
- Sistema de níveis
- Valores de recompensas

## 7. ELEMENTOS A ADOTAR DO FUNIL ANTIGO

### 7.1 Design

- Efeito de glow no ícone
- Tamanho maior do círculo de respiração
- Hierarquia correta de botões
- Box de recompensas destacado

### 7.2 UX

- Posicionamento de botões (CTA principal em cima)
- Design de botão secundário discreto
- Texto desestimulante em botão de pular
- Layout limpo durante execução

## 8. FLUXO DE USUÁRIO OTIMIZADO

### 8.1 Fluxo Principal

1. **Entrada no Desafio**

   - Usuário visualiza tela de tutorial
   - Lê instruções em "Como Funciona"
   - Visualiza recompensas possíveis
   - É atraído pelo ícone com glow
   - Clica em "Iniciar Desafio"

2. **Durante o Desafio**

   - Tela mostra círculo grande e imersivo
   - Animação inicia automaticamente
   - Usuário segue ritmo visual da respiração
   - Recebe feedback constante (pontos, notificações)
   - Vê progresso em tempo real (timer, contador de respirações)
   - Botão principal (concluir) está sempre visível e destacado
   - Botão secundário (pular) está discreto e desestimulado

3. **Conclusão**
   - Ao atingir objetivo ou clicar em "Concluir"
   - Tela de conclusão mostra:
     - Celebração visual
     - Total de pontos ganhos
     - Bônus aplicados
     - Novo nível (se aplicável)
   - CTA para coletar pontos
   - Possível redirecionamento para próximo desafio ou dashboard

### 8.2 Fluxo Alternativo (Pular)

1. Usuário clica em "Pular Desafio (Sem Recompensas)"
2. Sistema pode mostrar confirmação (opcional)
3. Redireciona sem conceder recompensas
4. Registra que desafio foi pulado

## 9. MÉTRICAS DE SUCESSO

### 9.1 Métricas de Engajamento

- Taxa de conclusão de desafios (objetivo: >70%)
- Taxa de abandono/pulo (objetivo: <20%)
- Tempo médio de permanência no desafio
- Número de respirações completas por sessão

### 9.2 Métricas de Qualidade

- Taxa de erro zero (animação funcionando 100%)
- Feedback positivo sobre experiência gamificada
- Redução de reclamações sobre UX

### 9.3 Métricas de Retenção

- Retorno ao desafio (usuários que fazem múltiplos desafios)
- Progressão de níveis
- Engajamento com sistema de recompensas

## 10. IMPLEMENTAÇÃO

### 10.1 Priorização

**Fase 1 - Crítico (MVP Corrigido):**

- REQ-TUT-001: Correção ortográfica
- REQ-EXEC-001: Implementar animação sincronizada
- REQ-EXEC-003: Corrigir hierarquia de botões
- REQ-EXEC-004: Melhorar distribuição de elementos

**Fase 2 - Essencial (Otimizações de UX):**

- REQ-TUT-002: Adicionar efeito de glow
- REQ-TUT-004: Adicionar box de recompensas
- REQ-EXEC-002: Aumentar tamanho do círculo
- REQ-EXEC-005: Implementar feedback de dopamina

**Fase 3 - Melhorias (Polish):**

- REQ-CONC-001: Redesign da tela de conclusão
- REQ-EXEC-006: Som opcional
- Testes A/B de elementos visuais
- Ajustes finos de animação

### 10.2 Dependências Técnicas

- Framework de animação (CSS animations, Framer Motion, etc.)
- Sistema de pontuação e recompensas
- Sistema de níveis e progressão
- Analytics para tracking de métricas

## 11. OBSERVAÇÕES IMPORTANTES

### 11.1 Diretrizes Gerais

- "Não inventa de colocar coisas que eu não falei"
- "Não inventa de querer tirar ideias nem dar sugestão"
- Foco total em implementar exatamente o que foi especificado
- Manter factualidade e precisão

### 11.2 Conteúdo a Ser Híbrido

- Usar estrutura do funil novo (vercel.app)
- Incorporar elementos bem-sucedidos do funil antigo (lovable.app)
- Manter conteúdo textual do novo (após correções)
- Adotar princípios de design e UX do antigo

### 11.3 Foco em Gamificação

- Sistema deve estimular dopamina
- Feedback constante e recompensador
- Hierarquia visual que incentiva conclusão
- Elementos visuais que mantêm engajamento

## 12. CRITÉRIOS DE ACEITAÇÃO

### 12.1 Tela de Tutorial

- [ ] Ortografia correta: "Como Funciona"
- [ ] Ícone com efeito de glow verde pulsante
- [ ] Box de recompensas possíveis visível
- [ ] Layout limpo e organizado
- [ ] Botão "Iniciar Desafio" destacado

### 12.2 Tela de Execução

- [ ] Animação funciona: círculo expande e contrai
- [ ] Animação sincronizada com instruções de respiração
- [ ] Círculo tem tamanho significativamente maior
- [ ] Botão "Concluir" em verde, no topo
- [ ] Botão "Pular" em cinza, embaixo, com texto desestimulante
- [ ] Elementos não ficam escondidos ou cortados
- [ ] Sistema de pontuação visível
- [ ] Feedback visual ao ganhar pontos (dopamina)
- [ ] Timer funcionando corretamente
- [ ] Contador de respirações funcional

### 12.3 Tela de Conclusão

- [ ] Design consistente com resto do funil
- [ ] Informações claras (nível, pontos, bônus)
- [ ] Celebração visual apropriada
- [ ] CTA claro para coletar recompensas

### 12.4 Geral

- [ ] Performance adequada (60 FPS)
- [ ] Funciona em mobile
- [ ] Funciona em desktop
- [ ] Sem erros de console
- [ ] Compatível com navegadores principais

## 13. ANEXOS

### 13.1 Referências Visuais

- Funil Novo: respiralivrreflow.vercel.app
- Funil Antigo: respiralivrreflow.lovable.app

### 13.2 Assets Necessários

- Ícone de vento (já existente)
- Ícone de troféu (já existente)
- Possíveis assets para efeitos de partículas
- Sons de feedback (opcional)

### 13.3 Comparação Frame-by-Frame

Análise detalhada dos 5.530 frames extraídos do vídeo de demonstração identificou:

- Frames 0-650: Tutorial do funil novo
- Frames 672-1296: Tutorial do funil antigo
- Frames 2784-3200: Execução do desafio no funil novo (com problemas)
- Frames 4300-4728: Execução do desafio no funil antigo (referência)
- Frame 5376: Tela de conclusão do funil novo

## VERSÃO DO DOCUMENTO

- Versão: 1.0
- Data: 09/12/2024
- Baseado em: Análise de vídeo comparativo + transcrição de áudio
- Total de frames analisados: 5.530 frames (3m50s de vídeo a 24 FPS)

---
