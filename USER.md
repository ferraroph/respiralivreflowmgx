# PROMPT TEMPLATE 1

LEIA O ARQUIVO `STATUS.md` e depois leia o arquivo `PRD.md` para entender melhor.

VOCÊ SEMPRE VAI COLOCAR A PORRA DAS ALTERAÇÕES QUE VOCÊ FEZ EM CADA TASK do arquivo de STATUS E FAZER BACKUPS (VAI CITAR AONDE TA ESSES BACKUPS TAMBÉM, AO FAZER ISSO. OS BKPS FICAM NA PASTA `bkps`)

# EXECUTAR (EXECUTE APENAS O QUE EU DEIXEI ABAIXO... SEMPRE ATUALIZANDO O ARQUIVO DE STATUS)

## 1. VISÃO GERAL E PRIORIDADES

**PRIORIDADE 1 (CRÍTICO - CONSERTAR AGORA):**

- [ ] Corrigir sistema de roteamento do botão "Voltar" (Evitar retorno para Home).
- [ ] Implementar scroll automático para o topo da página (window.scrollTo) em todas as transições.

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