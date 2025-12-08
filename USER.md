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