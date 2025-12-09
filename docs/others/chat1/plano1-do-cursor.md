# ABAIXO ESTÁ O PRIMEIRO PLANO COMPLETO QUE O CURSOR GEROU APÓS O PROMPT 2

## 1. Setup e Análise Visual

- Configurar Python environment para Playwright
- Criar script para capturar screenshots de todas as etapas do https://respiralivreflow.lovable.app/
- Salvar screenshots em `/docs/reference-screenshots/` para análise
- Documentar diferenças visuais encontradas

## 2. Aplicação do Tema Dark Premium Exato

- Corrigir Step8ResistanceChallenge (ainda tem gradiente roxo/azul)
- Aplicar tema dark premium exato em todas as etapas que não têm
- Usar as mesmas cores, sombras e efeitos do projeto de referência:
- Background: `0 0% 3%` (preto profundo)
- Cards: `0 0% 8%` com glassmorphism real
- Verde neon: `120 100% 50%`
- Sombras profundas e glow effects

## 3. Remoções e Limpeza

- Remover Step4Calculator (segundo calculador duplicado)
- Manter apenas o calculador do Step2
- Remover Step2HealthSimulator e Step5HealthSimulator se duplicados

## 4. Botão de Voltar

- Adicionar botão de voltar consistente em todas as etapas
- Design premium seguindo o padrão do projeto de referência
- Posicionamento no canto superior esquerdo

## 5. Melhorias no Calculador (Step2)

- Slider começando do 0 (não R$8)
- Máximo até R$30-50
- Opção de escolher por maço (1, 1.5, 2, 2.5, 3, 4, 5 maços)
- Cálculo preciso: valor ÷ quantidade de cigarros
- Mostrar estatísticas mensais e anuais
- Adicionar dados de impacto psicológico/social

## 6. Animações Premium na Step1

- Animação de seleção de arquétipo (outras opções se recolhem)
- Fade out gradiente nas opções não selecionadas
- Zoom sutil na opção escolhida com glow
- Validação gamificada para campo nome vazio
- Aparição sequencial dos elementos

## 7. Correção dos Desafios

- Manter estrutura atual mas aplicar design exato do projeto de referência
- Usar cores, tipografia e layout idênticos
- Substituir gradientes coloridos por tema dark premium

Arquivos principais a modificar:

- `src/components/steps/Step8ResistanceChallenge.tsx`
- `src/components/steps/Step1CharacterCreation.tsx`  
- `src/components/steps/Step2RealityCheck.tsx`
- `src/components/FunnelContainer.tsx` (botão voltar)
- `scripts/screenshot-reference.py` (novo)

### To-dos

- [ ] Configurar Python environment e instalar Playwright + dependências
- [ ] Criar script para capturar todas as etapas do projeto de referência
- [ ] Aplicar tema dark premium no Step8ResistanceChallenge
- [ ] Remover Step4Calculator duplicado
- [ ] Implementar botão voltar em todas as etapas
- [ ] Melhorar calculador Step2 com sliders, maços e estatísticas
- [ ] Adicionar animações premium na seleção de arquétipos
- [ ] Aplicar tema dark premium em todos os desafios restantes