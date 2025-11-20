# 📄 DOCUMENTO DE ANÁLISE DE USUÁRIO: ADIEL

**Analista (Usuário):** Adiel
**Versão do Projeto (Consulte o Readme da Raiz desse Workspace para se orientar):** Versão 2 - Workspace/Raiz (https://respiralivreflowmgx.vercel.app/)
**Dispositivo:** Mobile (iOS - interface Safari/WebView).
**Contexto:** Teste de usabilidade do funil gamificado "Respira Livre" (versão web app via Vercel) e Navegação completa do funil, desde o link no WhatsApp até o Checkout.

---

## 1. CRONOLOGIA E FLUXO DE NAVEGAÇÃO (Frame a Frame)

### **A. Entrada e Onboarding (00:00 - 00:38)**

- **Ação:** Usuário clica no link `funnel-respiralivre.vercel.app` via WhatsApp.
- **Tela Inicial:** Carregamento rápido. Logo "Respira Livre" no topo com subtítulo "O primeiro jogo que te vicia em NÃO FUMAR".
- **Input:** Campo "Como quer ser chamado?".
  - _Interação:_ Usuário digita "Lindao".
  - _Fricção (UX Crítico):_ Ao terminar de digitar, o usuário clica repetidamente no botão de seta "Avançar" (verde à direita do input), mas nada acontece visualmente ou funcionalmente de imediato.
  - _Comentário do Usuário:_ "Achei meio travado... fiquei clicando e falei 'e agora?'. Aí depois rolei pra baixo e apareceu."
  - _Diagnóstico:_ O layout parece não ser responsivo para o teclado aberto ou resolução do dispositivo dele. O botão real de ação ou o conteúdo seguinte estava "escondido" abaixo da dobra (scroll), causando confusão de que o app tinha travado.
- **Seleção de Arquétipo:** O usuário rola para baixo. Visualiza "Guerreiro" (Vermelho) e "Estrategista" (Verde).
  - _Escolha:_ Seleciona "Estrategista" (foco em: Analítico, Paciente, Calculista). O card fica iluminado em verde neon.
  - _Botão:_ "Começar Jornada" pulsa/animação de brilho.

### **B. Calculadora de Perfil e Dor (00:38 - 01:23)**

- **Input de Consumo:**
  - Slider de "Quantos cigarros por dia?". Padrão em 20. Usuário ajusta para 12. Animação fluida do círculo verde.
  - Slider de "Preço do maço". Ajusta para R$ 15.
  - _Visual:_ Feedback imediato de "Gasto Mensal" (R$ 270) e projeção de 20 anos (R$ 65k).
- **Análise:** Tela de "Analisando seu perfil..." com loader circular verde. Exibe cards de "Consumo Diário", "Gasto Mensal" e "Impacto na Saúde: Alto Risco" (vermelho piscando).
  - _Valor Percebido:_ Mostra "Potencial de Economia: R$ 3.240".
- **Seleção de Missão:** Três opções: "Parar Imediatamente" (Difícil), "Redução Gradual" (Moderado/Recomendado), "Redução de Danos" (Fácil).
  - _Ação:_ Usuário escolhe "Redução Gradual". Feedback visual: "Meta Definida! Ativando modo Estratégico".
- **Calculadora de Impacto (Aprofundamento):**
  - Toggle Switch: "Por Cigarro" vs "Por Maço".
  - _Feedback Positivo:_ Usuário elogia muito a visualização "Por Maço" (ex: 2 maços = 40 cigarros). Ele acha a conversão monetária clara e impactante.
  - _Sensorial:_ Tela "O Que Você Poderia Ter". Lista itens tangíveis (iPhone 15, Viagem, Notebook).
  - _Comentário:_ "Essa partinha aqui... ficou muito foda." (Gatilho de desejo/materialização da economia).

### **C. Desafios Gamificados (Core Loop)**

#### **1. Desafio da Respiração (01:29 - 02:04)**

- **Interface:** Círculo central grande com instruções de texto.
- **Mecânica:**
  1.  Verde (Inspire) - Círculo expande.
  2.  Amarelo (Segure) - Círculo estático.
  3.  Roxo/Azul (Expire) - Círculo contrai.
- **Feedback do Usuário (UI):** Questiona se a fonte da instrução "respirações completas" (texto pequeno abaixo da instrução principal) deveria ser maior. Ele conclui que "não muda nada", mas notou o tamanho reduzido.
- **Gamificação:** Usuário pula o desafio ("Pular Desafio") pois já tinha testado antes. Tela de "Desafio Concluído" exibe Nível Final: 2 e Pontos Ganhos: 110.

#### **2. Desafio Mindfulness (02:05 - 02:54)**

- **Instrução:** "Técnica dos 3 Passos" (Observar, Aceitar, Liberar).
- **Bug Técnico (Visualizado e Comentado):** Durante a execução do ciclo (Observar, Aceitar, Liberar), o contador de pontos no rodapé ou no feedback final apresenta comportamento errático.
  - _Observação:_ O usuário diz: "A questão dos pontos tá dando umas bugada, ele sobe e abaixa do nada".
  - _Análise do Frame:_ O contador numérico parece oscilar ou resetar visualmente antes de consolidar o valor final.
- **Visual:** Círculos concêntricos pulsando em azul, roxo e verde.

#### **3. Desafio de Resistência (Tap Game) (02:55 - 03:30)**

- **Mecânica:** Botão central com ícone de escudo. O usuário deve clicar repetidamente ("mash button") para encher uma barra de progresso em 30 segundos.
- **Feedback Visual:** A barra roxa/rosa enche conforme os cliques. O fundo muda levemente de cor. Contador de "Nível de Resistência" sobe.
- **Reação:** O usuário não tinha visto esse ainda. Parece engajado pela mecânica física de clicar rápido.
- **Resultado:** Nível Final 10. Pontos: 100. Badge de "Concluído".

#### **4. Desafio de Foco (Targeting) (03:31 - 04:19)**

- **Mecânica:** Tela roxa. Alvos vermelhos (círculos) aparecem em posições aleatórias. O usuário deve clicar neles antes que sumam.
- **Feedback Sonoro/Visual:** Círculos somem ao toque. Contador de "Acertos" e "Pts" no topo.
- **Comentário Emocional:** "Gostei desse aqui, cara. Esse aqui você se sente mais desafiado."
- **Engajamento:** O usuário joga até o final (45s), acertando 47 alvos. Ele verbaliza satisfação ("Nossa!"). É o pico de engajamento de habilidade até agora.

#### **5. Boss Fight: Sr. Ansiedade (04:20 - 04:58)**

- **Contexto:** "O chefe final dos seus gatilhos está aqui."
- **Visual:** Estética dark/neon. Ícone de caveira vermelha pulsante no centro. Barra de HP (Vida) do Boss vs Usuário.
- **Mecânica:** Eventos de tempo rápido (QTE).
  - Aparece botão "ATACAR!" (Espada).
  - Aparece botão "DEFENDER!" (Escudo).
- **Sensorial:** A tela pisca em vermelho nas bordas. Animações de "shake" (tremor) na caveira. Texto "Ansiedade está forte..." e "Ansiedade enfraquecendo!".
- **Reação Emocional (Pico de Dopamine/Adrenalina):**
  - Adiel: "Dá um desespero... 'Carai o que é esse bagulho piscando caveira?'"
  - Adiel: "Te deixa um pouco ansioso. Dá um friozinho na barriga. Achei muito legal."
  - _Análise:_ O jogo cumpre o papel de simular a ansiedade para depois derrotá-la, gerando catarse.

### **D. Conversão / Checkout (04:59 - 05:28)**

- **Tela de Venda:** Resumo das conquistas (XP, Badges).
- **Oferta:** "Respira Livre Premium".
  - Preço âncora: R$ 197 (riscado).
  - Oferta Especial: Timer de contagem regressiva (14:58).
- **Página de Pagamento (Cakto):**
  - Inputs padrão (Nome, Email, CPF, Celular).
  - Preço Final: R$ 29,90 / mês.
  - Opção de Pix Automático selecionada.
- **Feedback Final:** Adiel nota a transição de valor (de 197 para a assinatura mensal) mas acha o fluxo "Muito daora" (muito legal). Ele encerra o vídeo com impressão geral extremamente positiva.

---

## 2. ANÁLISE TÉCNICA (Para Desenvolvedores)

### **Bugs e Problemas Identificados**

1.  **Responsividade na Primeira Dobra (Blocker):** Na tela de input de nome, o botão de avançar (seta verde) não respondeu imediatamente ou exigiu scroll para ser ativado. Isso é uma barreira de entrada crítica.
    - _Sugestão:_ Garantir que o botão de CTA esteja fixo acima do teclado ou visível na primeira dobra em todos os viewports móveis.
2.  **Contador de Pontos Instável (Glitch):** No desafio Mindfulness (e possivelmente no Respiração), a contagem de pontos flutua (sobe e desce) erraticamente antes de finalizar.
    - _Sugestão:_ Revisar a lógica de _increment_ do state dos pontos no frontend.
3.  **Legibilidade de Texto:** O texto secundário "respirações completas" no desafio de respiração tem baixo contraste/tamanho para alguns usuários.

### **Performance**

- **Carregamento:** As transições entre telas (calculadora -> missão -> jogos) são rápidas e fluidas.
- **Animações:** As animações de pulso (boss fight) e movimento (foco) rodaram lisas no dispositivo do usuário (Android), sem _frame drops_ perceptíveis.

---

## 3. ANÁLISE SENSORIAL E DE UX (Experiência do Usuário)

### **Gamificação e Retenção**

- **Identidade:** A escolha do arquétipo ("Estrategista") cria um compromisso inicial (Commitment & Consistency). A cor do app muda para verde neon, reforçando a personalização.
- **Tangibilização da Recompensa:** A seção que mostra o iPhone e a Viagem converte uma economia abstrata em desejo concreto. Foi o ponto alto da parte "racional" do funil.
- **Progressão de Intensidade:** O funil começa calmo (respiração/mindfulness) e escala para agitado (cliques/foco) e termina tenso (Boss Fight). Essa curva de emoção é excelente para manter o usuário acordado e engajado até o checkout.

### **Resposta Emocional do Usuário (Adiel)**

- **Confusão Inicial:** "Fiquei clicando e falei 'e agora?'" (Tela do Nome).
- **Satisfação Racional:** "Isso aqui ficou muito massa" (Calculadora por maço).
- **Desafio/Competência:** "Você se sente mais desafiado" (Jogo de Foco).
- **Ansiedade/Excitação:** "Dá um desespero... friozinho na barriga" (Boss Fight). A estética agressiva do chefe funcionou para simular o inimigo real (o vício/ansiedade).

---

## 4. CONCLUSÃO PARA O PRD

O funil está funcionalmente muito forte na criação de engajamento e variabilidade de experiências. O usuário Adiel validou positivamente a estética e a mecânica dos jogos, especialmente os de ação (Foco e Boss).

**Pontos de Ação Imediata:**

1.  **Corrigir o bug de "falso travamento" na tela inicial (input de nome).**
2.  **Estabilizar a animação de contagem de pontos.**
3.  **Manter a lógica do "Boss Fight" e "Foco"**, pois foram os diferenciais que transformaram a experiência de um "app chato de saúde" para um "jogo envolvente".

Este vídeo confirma que a abordagem não é apenas sobre "dopamina" barata, mas sobre criar uma narrativa emocional (calma -> foco -> luta -> vitória/compra).
