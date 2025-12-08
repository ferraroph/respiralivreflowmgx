Pesquisar contexto para Mindfulness

Leitura [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/PRD.md#1-1), linhas 1 para 300

Leitura [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/src/components/steps/Step7MindfulnessChallenge.tsx#1-1), linhas 1 para 300

Leitura [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/src/components/steps/Step6BreathingChallenge.tsx#1-1), linhas 1 para 300

Leia [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/src/types/funnel.ts)

Leia [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/src/hooks/useFunnelState.ts)

Leia [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/src/components/StepWrapper.tsx)

Leitura [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/PRD.md#300-300), linhas 300 para 600

Leitura [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/src/components/steps/Step7MindfulnessChallenge.tsx#300-300), linhas 300 para 363

Leitura [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/src/components/steps/Step6BreathingChallenge.tsx#270-270), linhas 270 para 319

Leitura [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/PRD.md#600-600), linhas 600 para 900

Leia [](file:///c%3A/Users/phell/Desktop/IDE%27s/3.%20Funnels/respiralivreflow-mgx4/src/components/ui)

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