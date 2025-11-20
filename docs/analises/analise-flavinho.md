# 📄 DOCUMENTO DE ANÁLISE DE USUÁRIO: FLAVINHO

**Analista (Usuário):** Flavinho
**Versão do Projeto (Consulte o Readme da Raiz desse Workspace para se orientar):** Versão 2 - Workspace/Raiz (https://respiralivreflowmgx.vercel.app/)
**Dispositivo:** Mobile (iOS - interface Safari/WebView).
**Contexto:** Teste de usabilidade do funil gamificado "Respira Livre" (versão web app via Vercel) e Navegação completa do funil, desde o link no WhatsApp até o Checkout.

## 1. FLUXO DE ONBOARDING E CRIAÇÃO DE PERSONAGEM
**Frame 02:00 - 02:23**

*   **Tela Inicial:**
    *   **Logo/Header:** "Respira Livre" em gradiente verde. Slogan: "O primeiro jogo que te vicia em NÃO FUMAR" (NÃO FUMAR em verde destaque).
    *   **Input de Nome:** Campo de texto com borda arredondada cinza escura, placeholder "Seu apelido de guerreiro...".
    *   **Interação:** Flavinho digita "rech". O botão de "Avançar" (seta verde) fica na mesma linha do input, economizando espaço vertical.

*   **Seleção de Arquétipo:**
    *   **Cards de Seleção:** Lista vertical de cards grandes com ícone à esquerda, título e descrição.
    *   **Opções Visíveis:**
        *   **Guerreiro (Vermelho):** Foco em disciplina/coragem. Bônus: +20% XP em desafios.
        *   **Estrategista (Verde):** Foco em sabedoria/análise. Bônus: +15% Coins por dia.
        *   **Inspirador (Amarelo):** Foco em comunidade. +25% XP em Squad.
        *   **Resiliente (Roxo - Parcialmente visível):** Foco em superar recaídas.
    *   **Feedback de Seleção:** Ao clicar em "Estrategista", o card ganha uma borda verde neon brilhante, confirmando a seleção instantaneamente.

*   **Modal de Recompensa (Pop-up):**
    *   **Animação:** Um modal overlay escuro aparece com um troféu verde brilhante.
    *   **Texto:** "Personagem Criado! Sua jornada começa agora".
    *   **Loot:** Mostra claramente "+50 XP" (Verde) e "+50 Coins" (Amarelo).
    *   **Botão:** "Primeiro Passo" (Verde).
    *   **Comentário do Flavinho:** "Caralho, esse bagulho ficou foda hein mano. Bem melhor, bem mais interativo." (Validação forte da gamificação visual).

---

## 2. CALCULADORA DE IMPACTO (DOR E CONSCIÊNCIA)
**Frame 02:24 - 02:43 e 01:00 - 01:46**

*   **Configuração:**
    *   **Toggle Switch:** Opção de calcular "Por Cigarro" ou "Por Maço". Design de botões grandes, fáceis de tocar (fat finger friendly). Flavinho alterna e o visual responde instantaneamente (o botão ativo fica verde cheio, o inativo transparente com borda).
    *   **Input de Quantidade:**
        *   Visual: Um círculo verde brilhante com o número dentro.
        *   Feedback Dinâmico: Abaixo do número, converte automaticamente (ex: "20 cigarros ≈ 1.0 maços").
    *   **Input de Preço:** Flavinho ajusta o valor. O sistema calcula em tempo real.

*   **Tela de Resultado Financeiro:**
    *   **Grid de Cards:** 4 cards mostrando o prejuízo financeiro progressivo.
        *   Gasto Mensal e Anual (Verde/Vermelho).
        *   Em 5 anos e Em 10 anos (Texto Amarelo e Vermelho, respectivamente).
    *   **Análise de Cores:** Uso inteligente do Vermelho para valores de longo prazo (R$ 8.760), criando alerta/perigo.

*   **Tela de Impacto na Saúde (Scroll Down):**
    *   **Seção:** "Impactos que Você Não Sabia".
    *   **Cards de Medo:** Ícones vermelhos com estatísticas alarmantes.
        *   "40% maior risco de ansiedade".
        *   "3x mais chances de disfunção erétil" (Gatilho forte para público masculino).
        *   "-14 anos expectativa de vida".
        *   "60% menos produtividade".
    *   **Comentário do Flavinho:** "Conscientizando bem pra caralho aqui também, muito foda."

---

## 3. SELEÇÃO DE MISSÃO E MINIGAMES
**Frame 01:47 - 02:19**

*   **Seleção de Missão (Dificuldade):**
    *   **Parar Imediatamente (Extremo):** Card com ícone de foguete/raio. Recompensa alta (3x XP, 500 coins).
    *   **Redução Gradual (Recomendado):** Card com ícone de gráfico descendente. Tag verde "Recomendado". Recompensa média (2x XP, 200 coins).
    *   **Redução de Danos (Fácil):** Ícone de alvo. Recompensa baixa (1.5x XP).
    *   **Interação:** Flavinho seleciona "Redução Gradual". Feedback imediato: Modal "Meta Definida!" com checkmark.

---

## 4. MINIGAME 1: RESPIRAÇÃO (Foco e Controle)
**Frame 02:20 - 02:50**

*   **Onboarding do Desafio:**
    *   **Tela de Instruções:** Explica "Como Funcionar" em 3 passos simples.
    *   **Metas de Recompensa:** Mostra badges e XP possíveis na parte inferior.
*   **Execução (Gameplay):**
    *   **Visual:** Um círculo central pulsante sobre fundo preto.
    *   **Ciclo de Cores e Texto:**
        *   **Verde:** "Inspire" (Círculo expande).
        *   **Amarelo:** "Segure" (Círculo estático, contagem regressiva numérica visível).
        *   **Roxo/Azul:** "Expire" (Círculo contrai).
    *   **Feedback de Áudio:** (Não audível no vídeo, mas visualmente rítmico).
    *   **Conclusão:** Tela de "Desafio Concluído!". Mostra "Nível Final: 1", "Pontos Ganhos: 100" e "Bônus: +50". Botão para coletar pontos.

---

## 5. MINIGAME 2: MINDFULNESS (Técnica dos 3 Passos)
**Frame 02:51 - 03:24**

*   **Instruções:** "Técnica dos 3 Passos: Observar, Aceitar, Liberar".
*   **Gameplay:**
    *   **Barra de Foco:** No topo da tela, uma barra "100% Foco" que parece diminuir ou oscilar se o usuário não interagir (embora no vídeo permaneça estática ou controlada pelo tempo).
    *   **Ciclos:**
        *   **Ciclo 1 (Azul):** "Observe Seus Pensamentos". Timer circular ao redor do ícone de cérebro.
        *   **Ciclo 2 (Roxo):** "Aceite o Momento Presente".
        *   **Ciclo 3 (Verde):** "Libere e Deixe Fluir".
    *   **Interação:** O usuário parece apenas assistir (passivo) ou segurar (ativo - não fica claro se precisa tocar, mas há um botão "Pular Desafio" visível).

---

## 6. MINIGAME 3: DESAFIO DE RESISTÊNCIA E BOSS FIGHT (Ponto Crítico)
**Frame 03:25 - 04:18**

*   **Desafio de Foco:** Tela azul rápida. Instrução "Clique nos alvos".
*   **Boss Fight: Sr. Ansiedade:**
    *   **Introdução:** Tela vermelha de alerta "BOSS FIGHT! Sr. Ansiedade Apareceu!". Ícone de caveira. Botão "Aceitar Desafio".
    *   **Instruções de Combate:** "Resista aos ataques mantendo o foco", "Eventos de tempo rápido (QTE) aparecem - clique rápido!".
    *   **Gameplay (A Confusão):**
        *   **Interface de Batalha:** Barra de HP do Jogador (Verde - 100 HP) vs Sr. Ansiedade (Vermelho - 90 HP).
        *   **Ação Passiva:** O centro da tela mostra "Sr. Ansiedade está forte... Resista por mais X segundos". O timer conta regressivamente no topo.
        *   **Ação Ativa (QTE):** De repente, um botão amarelo brilhante "EVENTO RÁPIDO! ATACAR!" aparece. O usuário clica e ganha +100 pts.
        *   **Feedback de Dano:** O HP da Ansiedade cai. Texto muda para "Ansiedade enfraquecendo!".
        *   **Crítica do Flavinho:** Ele **não entendeu** intuitivamente que deveria esperar. A instrução "Resista" x "Ataque" causou fricção. Ele sugere que o usuário deveria ter que interagir mais (clicar no boss) ou que a instrução de "Aguardar" fosse mais explícita/intencional.
    *   **Vitória:** Tela "Desafio Concluído!". Pontuação alta (562 pts).

---

## 7. Etapa Final - PÁGINA DE VENDAS

### TELA DE RESULTADOS (GAMIFICAÇÃO)

*   **Elementos Visuais:**
    *   **Header:** "Parabéns pela Jornada!". Subtítulo reforçando que os resultados são personalizados.
    *   **Avatar/Badge Central:** Um ícone alado (tipo patente militar/aviador) brilhante, sugerindo ascensão/liberdade.
    *   **Grid de Status:** Três colunas com ícones e números grandes:
        *   **XP Total:** 1102 (Amarelo).
        *   **Coins:** 702 (Verde).
        *   **Badges:** 6 (Branco/Cinza).
    *   **Barra de Progresso:** "Nível de Prontidão" em 100% (barra totalmente verde).
    *   **Diagnóstico:** Card com fundo verde escuro translúcido. Texto: "Você está totalmente pronto para sua jornada de liberdade definitiva".
    *   **Lista de Benefícios (Premium):** Lista com checkmarks verdes (ícone de verificado) detalhando o produto: "Sistema gamificado", "Coach IA 24/7", "Comunidade exclusiva", "Garantia de 30 dias".

*   **Análise Sensorial:** A tela é rica em dopamina visual. Números altos (1102 XP) e barra cheia (100%) dão sensação de competência e completude, preparando o usuário para a compra.


### VISÃO GERAL E PRIMEIRAS IMPRESSÕES (ÁUDIO E TELA FINAL)

*   **Interface Visual:**
    *   **Estética:** "Dark Mode" predominante. Fundo preto/cinza muito escuro com acentos em **Verde Neon** (cor de ação/sucesso) e **Amarelo/Dourado** (escassez/premium).
    *   **Elemento de Preço:** Preço de âncora "De R$ 497" (riscado, cinza) para "R$ 197" (grande, amarelo, destaque). Tag "60% OFF - Oferta Especial".
    *   **Elemento de Urgência:** Card com borda vermelha fraca e fundo escuro contendo "Oferta expira em: 13:39" (contagem regressiva ativa em vermelho).
    *   **Prova Social:** Ícone de usuários (verde) com texto "1.847 pessoas conquistaram a liberdade esta semana".
    *   **CTA (Call to Action):** Botão massivo, largura total, cor Verde Neon vibrante. Texto: "Garantir Minha Liberdade Agora" com ícone de escudo (segurança).
    *   **Trust Badges:** Abaixo do botão, ícones de segurança (cadeado, estrela) indicando "Pagamento 100% Seguro", "Garantia de 30 dias", processamento via Cakto.

*   **Feedback Verbal do Flavinho (Crítico):**
    *   **Design:** Elogiou muito a estética ("bagulho da hora", "bonita"). O visual passa credibilidade.
    *   **Gap de Experiência:** O usuário sentiu falta de uma "conclusão" ou transição entre o fim dos minigames e a oferta de venda.
    *   **Sugestão Sensorial:** Ele sugere uma tela intermediária que "separe as atividades" e explique a **intenção** e o **benefício** do que acabou de acontecer antes de pedir o dinheiro. Isso aumentaria a clareza da proposta de valor.
    *   **Ponto de Confusão (Boss Fight):** Menciona antecipadamente que no "Boss da Ansiedade" ele não entendeu o que era para fazer (se era passivo/esperar ou ativo/clicar).

---

## 8. OBSERVAÇÕES TÉCNICAS E DE PERFORMANCE

*   **Transições:** As transições entre telas são suaves (fade in/out), sem loadings perceptíveis, o que mantém a imersão ("App-like feel", mesmo sendo web).
*   **Responsividade:** Elementos perfeitamente alinhados para a tela vertical do iPhone (zonas de toque confortáveis).
*   **URL:** `respiralivre...vercel.app` indica um ambiente de staging/desenvolvimento em React/Next.js provavelmente.

---

## 9. RESUMO DAS SUGESTÕES DO FLAVINHO (PARA O PRD)

1.  **Conclusão Pós-Game:** Criar uma tela dedicada após o Boss Fight e antes da Venda. Esta tela deve:
    *   Resumir o que o usuário acabou de sentir (vitória sobre a ansiedade).
    *   Conectar a experiência do jogo com a vida real.
    *   Servir de "ponte" emocional para a oferta.
2.  **Melhoria no Boss Fight:**
    *   Clarificar a mecânica: Se é para esperar, colocar um texto tipo "Segure firme..." ou uma barra de "Resistência" enchendo.
    *   Aumentar a interatividade: Talvez exigir toques repetidos para "quebrar" a ansiedade, em vez de apenas esperar o timer.
3.  **Prova Social em Vídeo:** Adicionar um vídeo curto de depoimento/experiência real na página de vendas para tangibilizar o produto.