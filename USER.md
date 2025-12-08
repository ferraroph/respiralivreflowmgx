# PROMPT TEMPLATE 1

LEIA O ARQUIVO `STATUS.md` e depois leia o arquivo `PRD.md` para entender melhor.

VOCÊ SEMPRE VAI COLOCAR A PORRA DAS ALTERAÇÕES QUE VOCÊ FEZ EM CADA TASK do arquivo de STATUS E FAZER BACKUPS (VAI CITAR AONDE TA ESSES BACKUPS TAMBÉM, AO FAZER ISSO. OS BKPS FICAM NA PASTA `bkps`)

# EXECUTAR (EXECUTE APENAS O QUE EU DEIXEI ABAIXO... SEMPRE ATUALIZANDO O ARQUIVO DE STATUS)

---

# 🧪 DEV NAVIGATION - Navegação de Desenvolvimento

## O que é?
Um botão flutuante no canto inferior direito que permite **pular diretamente para qualquer etapa ou sub-etapa** do funil durante o desenvolvimento ou testes.

**Total de telas navegáveis: 23** (9 etapas principais com sub-etapas internas)

## ⚠️ ATENÇÃO: ATIVO EM PRODUÇÃO!
Este recurso está habilitado por padrão, **inclusive em produção**.

## Como desativar?

### Opção 1: Desativar via constante (RECOMENDADO)
No arquivo `src/components/FunnelContainer.tsx`, localize a linha:

```tsx
const DEV_NAVIGATION_ENABLED = true;
```

E mude para:

```tsx
const DEV_NAVIGATION_ENABLED = false;
```

### Opção 2: Desativar via ambiente (alternativa avançada)
Você pode modificar a constante para usar variável de ambiente:

```tsx
const DEV_NAVIGATION_ENABLED = import.meta.env.DEV; // Só ativo em desenvolvimento
```

## Como usar?

1. **Clique no botão "DEV"** no canto inferior direito da tela
2. **Ative o Modo Dev** usando o toggle switch no painel (verde = ativo)
3. **Clique em "⚡ Injetar Dados Mock"** para preencher dados necessários (evita erros!)
4. **Escolha o modo de visualização:** Simples (grid) ou Detalhado (lista)
5. **Clique no número** da etapa/sub-etapa para a qual deseja ir (ex: 4.2)

## 🔴🟢 Toggle do Modo Dev

O botão flutuante muda de cor para indicar o estado:

| Cor | Estado | Comportamento |
|-----|--------|---------------|
| 🟢 Verde | **ATIVO** | Checkpoint Modal desabilitado, navegação livre |
| 🔴 Vermelho | **DESATIVADO** | Checkpoint Modal funciona normalmente |

### Como funciona:

- **Por padrão:** Modo dev está **DESATIVADO** (vermelho)
- **Ao ativar:** A preferência é salva no `localStorage` e persiste entre sessões
- **Efeito:** Quando ativado, o popup de "Bem-vindo de volta" (CheckpointModal) não aparece

### Onde fica salvo:

```
localStorage.getItem('respiraLivre_devModeActive')
```

Para limpar manualmente (console do navegador):

```js
localStorage.removeItem('respiraLivre_devModeActive')
```

## Mapa Completo de Etapas

| ID | Etapa | Sub-etapa | Descrição |
|----|-------|-----------|-----------|
| 1.1 | 1 - Criação Personagem | 1 | Input do Nickname |
| 1.2 | 1 - Criação Personagem | 2 | Seleção de Arquétipo |
| 2.1 | 2 - Calculadora | 1 | Input de Dados |
| 2.2 | 2 - Calculadora | 2 | Resultados Financeiros |
| 3.1 | 3 - Seleção de Meta | 1 | Escolha da Meta |
| 3.2 | 3 - Seleção de Meta | 2 | Confirmação |
| 4.1 | 4 - Desafio Respiração | 1 | Instruções |
| 4.2 | 4 - Desafio Respiração | 2 | Desafio Ativo |
| 4.3 | 4 - Desafio Respiração | 3 | Conclusão |
| 5.1 | 5 - Desafio Mindfulness | 1 | Instruções |
| 5.2 | 5 - Desafio Mindfulness | 2 | Meditação Ativa |
| 5.3 | 5 - Desafio Mindfulness | 3 | Conclusão |
| 6.1 | 6 - Desafio Resistência | 1 | Instruções |
| 6.2 | 6 - Desafio Resistência | 2 | Cliques Ativos |
| 6.3 | 6 - Desafio Resistência | 3 | Conclusão |
| 7.1 | 7 - Desafio Foco | 1 | Instruções |
| 7.2 | 7 - Desafio Foco | 2 | Alvos Ativos |
| 7.3 | 7 - Desafio Foco | 3 | Conclusão |
| 8.1 | 8 - Boss Challenge | 1 | Intro Boss |
| 8.2 | 8 - Boss Challenge | 2 | Instruções Boss |
| 8.3 | 8 - Boss Challenge | 3 | Batalha Ativa |
| 8.4 | 8 - Boss Challenge | 4 | Vitória |
| 9.1 | 9 - Oferta Final | 1 | Oferta Final |

## Por que usar "Injetar Dados Mock"?

Quando você pula etapas, alguns dados podem não existir (ex: nickname, dailyCigarettes, etc.). 
Isso pode causar erros ou comportamentos estranhos nas etapas posteriores.

O botão **"⚡ Injetar Dados Mock"** preenche:
- Dados do personagem (nickname: 'DevUser', avatar, archetype)
- Dados do fumante (20 cigarros/dia, R$12/maço)
- Metas e motivações completas
- Sonho selecionado (Viagem dos Sonhos)
- Desafios marcados como completados
- Score total (2500 pontos)

## Como adicionar novas etapas/sub-etapas

Edite o arquivo `src/components/DevNavigation.tsx` e adicione ao array `FUNNEL_STEPS_MAP`:

```tsx
{ 
  id: '10.1',           // ID único
  step: 10,             // Número da etapa principal
  subStep: 1,           // Número da sub-etapa
  label: '10.1',        // Label exibido no botão
  description: 'Nova Etapa',  // Descrição
  internalState: { phase: 'instructions' }  // Estado para injetar no componente
}
```

## Arquivos relacionados

| Arquivo | Descrição |
|---------|-----------|
| `src/components/DevNavigation.tsx` | Componente visual + mapa de etapas (`FUNNEL_STEPS_MAP`) |
| `src/components/FunnelContainer.tsx` | Integração, constante `DEV_NAVIGATION_ENABLED`, funções de navegação |
| Todos os `src/components/steps/Step*.tsx` | Recebem `devInitialState` para iniciar em sub-etapa específica |

## 🔧 Detalhes Técnicos

### Por que a navegação entre sub-etapas funciona?

Cada componente de step tem uma prop `key` única que inclui o `currentSubStep`:

```tsx
<Step7MindfulnessChallenge key={`step5-${currentSubStep}`} ... />
```

Isso força o React a **remontar completamente** o componente quando a sub-etapa muda, aplicando o novo `devInitialState`.

**Sem a key:** Navegar de 5.1 → 5.2 não funcionaria porque o React reutilizaria o mesmo componente (já que `currentStep` continua sendo 5).

**Com a key:** O React entende que é um componente "diferente" e remonta do zero com o novo estado inicial.

---

# ALTERAR VELOCIDADE DO SCROLL MANUALMENTE

Alterar parâmetros do `window.scrollTo`:

```tsx
window.scrollTo({ top: 0, behavior: 'instant' });
```

**`behavior`:**
- `'instant'` - imediato
- `'smooth'` - suave (velocidade do navegador)
- `'auto'` - padrão do sistema

**`top`:** posição em pixels (0 = topo)