# ETAPA 5

## PROMP DO USUÁRIO

```
LEIA O ARQUIVO `STATUS.md` e depois leia o arquivo `PRD.md` para entender melhor.

VOCÊ SEMPRE VAI COLOCAR A PORRA DAS ALTERAÇÕES QUE VOCÊ FEZ EM CADA TASK do arquivo de STATUS E FAZER BACKUPS (VAI CITAR AONDE TA ESSES BACKUPS TAMBÉM, AO FAZER ISSO. OS BKPS FICAM NA PASTA `bkps`)

# EXECUTAR (EXECUTE APENAS O QUE EU DEIXEI ABAIXO... SEMPRE ATUALIZANDO O ARQUIVO DE STATUS)

## INSTRUÇÕES

AGORA VAMOS PLANEJAR, POIS AINDA NÃO ESTÁ CERTO O QUE IRÁ SER FEITO NESSA ETAPA ABAIXO:

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

```

## Plano: Refação do Desafio Mindfulness (Grounding 5-4-3-2-1)

O Desafio Mindfulness atual é uma "meditação passiva" onde o usuário apenas observa animações sem interação real. A nova versão implementará a **Técnica de Grounding 5-4-3-2-1**, exigindo que o usuário **digite ativamente** respostas sobre seus 5 sentidos, com pontuação baseada na qualidade/quantidade de caracteres.

### Steps

1. **Criar backup do arquivo atual** → Salvar `Step7MindfulnessChallenge.tsx` em bkps com timestamp.

2. **Redesenhar fase de instruções** → Manter estrutura do `StepWrapper`, explicar a técnica 5-4-3-2-1 com ícones dos 5 sentidos (👁️ Visão, 👂 Audição, ✋ Tato, 👃 Olfato, 👅 Paladar).

3. **Implementar 5 fases de input interativo** → Criar cards sequenciais com inputs/textareas para cada sentido, usando componentes `Input` ou `Textarea`, com contador de itens requeridos (5→4→3→2→1).

4. **Desenvolver sistema de pontuação anti-trapaça** → Função que conta caracteres válidos ignorando espaços múltiplos, classificando em 3 níveis: Básico (1x), Intermediário (1.5x), Elite (2x) baseado no total de caracteres.

5. **Criar tela de resultados detalhada** → Exibir classificação final (estrelas), XP/Coins calculados, breakdown por fase, e badge condicional seguindo padrão do `Step6BreathingChallenge.tsx`.

6. **Atualizar STATUS.md** → Marcar tarefas como concluídas e documentar alterações/backups na seção correspondente.

### Further Considerations

1. **Inputs múltiplos vs Textarea único por fase?** Recomendo **Textarea único** por fase com instruções claras (ex: "separe por vírgula"), pois é mais rápido e menos repetitivo para o usuário.

2. **Validação em tempo real ou apenas ao avançar?** Sugestão: **Tempo real** mostrando contador de caracteres e indicador de qualidade (cores), incentivando respostas mais reflexivas.

3. **Permitir pular fases individuais?** Opção A: Não permitir (força engajamento) / Opção B: Permitir mas reduz pontuação / **Opção C (recomendada):** Requerer mínimo de 3 caracteres por fase para avançar.

---

# FEEDBACK DO USUÁRIO (NÃO É PRA COLOCAR O FEEDBACK BRUTO, E SIM, PARA FORMATAR COMO FEEDBACK FORMAL)