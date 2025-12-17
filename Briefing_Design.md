# Briefing de Design - Respira Livre Funnel

> **Versão:** 1.0
> **Data:** 17/12/2025
> **Referência Principal:** `src/index.css` e `src/components/steps/Step1CharacterCreation.tsx`

---

## PROPÓSITO DESTE DOCUMENTO

Este documento serve como **guia de estética** para manter a **consistência visual** do funil Respira Livre. Qualquer desenvolvedor ou IA que trabalhe neste projeto **DEVE** seguir estas diretrizes para garantir uma experiência coesa.

> **IMPORTANTE:** Este NÃO é um limitador criativo. É uma **BASE** sobre a qual inovar. Pode-se adicionar cores, mudar elementos, criar animações novas - MAS sempre mantendo diálogo com a estética base.

---

## ESTÉTICA BASE

### Conceito Principal

**iOS Premium Dark Theme** - App de alta qualidade com:

- Fundo escuro profundo (#080808)
- Elementos com glassmorphism (blur + transparência)
- Glows sutis em verde neon
- Sombras premium que criam profundidade
- Micro-animações suaves

### Tom Visual

- **Premium, não genérico**
- **Sofisticado, não entediante**
- **Gamificado, não infantil**
- **Dinâmico, não estático**

---

## PALETA DE CORES BASE

### Cores Primárias

```css
--background: 0 0% 3%; /* Preto profundo #080808 */
--foreground: 0 0% 98%; /* Branco quase puro */
--primary: 120 100% 50%; /* Verde Neon #00FF00 */
--gold: 48 100% 55%; /* Dourado #FFD700 */
```

### Cores de Sistema

```css
--success: 120 100% 50%; /* Verde = Positivo */
--warning: 48 100% 55%; /* Amarelo = Atenção */
--smoking: 0 100% 60%; /* Vermelho = Negativo/Cigarro */
--dream: 270 100% 60%; /* Roxo = Sonhos/Aspirações */
--muted-foreground: 0 0% 70%; /* Cinza para texto secundário */
```

### Uso das Cores

| Cor                | Quando Usar                                                |
| ------------------ | ---------------------------------------------------------- |
| Primary (Verde)    | CTAs principais, progresso, sucesso, elementos de destaque |
| Gold (Dourado)     | XP, Coins, badges, recompensas, elementos premium          |
| Smoking (Vermelho) | Alertas negativos, referências a cigarro, erros            |
| Dream (Roxo)       | Aspirações, sonhos, elementos motivacionais especiais      |

---

## EFEITOS VISUAIS BASE

### Glassmorphism (Cards)

```css
.premium-card {
  background: var(--gradient-glass);
  backdrop-filter: blur(40px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-premium);
  border-radius: 1.5rem;
}
```

### Glow Effect (Elementos de Destaque)

```css
--shadow-glow-primary: 0 0 40px hsl(120 100% 50% / 0.6);
--shadow-glow-gold: 0 0 40px hsl(48 100% 55% / 0.5);
```

> **ATENÇÃO:** Glow é para **destaques**, não para todos elementos. Usar com moderação.

### Gradientes Base

```css
--gradient-primary: linear-gradient(
  135deg,
  hsl(120 100% 50%) 0%,
  hsl(120 100% 40%) 100%
);
--gradient-gold: linear-gradient(
  135deg,
  hsl(48 100% 55%) 0%,
  hsl(45 100% 45%) 100%
);
--gradient-glass: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.1) 0%,
  rgba(255, 255, 255, 0.05) 100%
);
```

### Sombras Premium

```css
--shadow-premium: 0 32px 64px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05);
--shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
--shadow-depth: 0 40px 80px rgba(0, 0, 0, 0.9);
```

---

## ANIMAÇÕES PADRÃO

### Classes de Animação Disponíveis

```css
.animate-float       /* Flutuação suave (ícones, cards de destaque) */
/* Flutuação suave (ícones, cards de destaque) */
.animate-glow-pulse  /* Pulsação de glow (CTAs, elementos ativos) */
.animate-fade-up     /* Entrada de elementos (fade + slide up) */
.animate-bounce-in   /* Entrada com bounce (sucessos, rewards) */
.animate-shimmer; /* Brilho passando (loading, destaque) */
```

### Timing de Animações

- **Micro-interações:** 150-300ms
- **Transições de tela:** 300-400ms
- **Animações de celebração:** 600-800ms
- **Loops contínuos:** 2-3s

---

## COMPONENTES BASE

### Botões

```tsx
// CTA Principal (sempre usar para ação principal)
<button className="premium-button">
  Texto do Botão
</button>

// Botão Secundário (ações secundárias, pular, cancelar)
<button className="glass-effect p-3 rounded-2xl text-muted-foreground">
  Ação Secundária
</button>
```

### Cards

```tsx
// Card padrão com glassmorphism
<div className="premium-card p-6">
  Conteúdo
</div>

// Card com destaque de cor (recompensas, etc)
<div className="premium-card p-4" style={{
  background: 'linear-gradient(135deg, rgba(120,255,120,0.1) 0%, rgba(255,215,0,0.05) 100%)',
  border: '1px solid rgba(120,255,120,0.2)'
}}>
  Conteúdo de Destaque
</div>
```

### Texto Gradiente

```tsx
// Texto com gradiente primary
<span
  style={{
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Texto Destacado
</span>
```

---

## ️ O QUE NÃO FAZER

### Cores

- Usar cores fora da paleta sem justificativa
- Verde neon em fundos claros (contraste ruim)
- Roxo/azul escuro como cor dominante (ficou "péssimo" no Mindfulness antigo)
- Cores muito saturadas competindo entre si

### Efeitos

- Glow em todos os elementos (perde o impacto)
- Animações muito longas (> 1s para micro-interações)
- Sombras muito claras (quebram o tema dark)
- Blur excessivo que prejudica legibilidade

### Layout

- Inline styles para cores que já existem em variáveis CSS
- Bordas muito grossas ou coloridas demais
- Elementos sem border-radius (mínimo 0.5rem)
- Texto muito pequeno (< 12px para corpo)

---

## LIBERDADE CRIATIVA

### Você PODE:

- Criar novas animações seguindo o timing padrão
- Adicionar cores de destaque pontual (turquesa, verde água, etc) desde que conversem com a paleta
- Inovar em layouts mantendo os componentes base
- Criar novos efeitos visuais que sigam o tema premium dark
- Ajustar opacidades e intensidades dos efeitos
- Combinar cores da paleta de formas criativas

### Sempre Valide:

1. O novo elemento **conversa** com os Step 1-2 do funil?
2. O tema **dark premium** foi mantido?
3. Os **glows e sombras** seguem o padrão?
4. A **hierarquia visual** está clara?
5. Os **CTAs** estão destacados corretamente?

---

## ARQUIVOS DE REFERÊNCIA

| Arquivo                                              | O que consultar                               |
| ---------------------------------------------------- | --------------------------------------------- |
| `src/index.css`                                      | Variáveis CSS, animações, componentes base    |
| `src/components/steps/Step1CharacterCreation.tsx`    | Exemplo de layout premium, cards, botões      |
| `src/components/steps/Step4Calculator.tsx`           | Exemplo de cards de resultados, estatísticas  |
| `src/components/steps/Step6BreathingChallenge.tsx`   | Exemplo de tela de desafio, animações         |
| `src/components/steps/Step7MindfulnessChallenge.tsx` | Exemplo mais recente de implementação correta |

---

## ATUALIZAÇÕES

Este documento deve ser atualizado quando:

- Novas cores forem adicionadas à paleta
- Novos componentes padrão forem criados
- Padrões de animação mudarem
- Erros de design recorrentes forem identificados

---

**Lembre-se:** Consistência visual = Experiência profissional = Confiança do usuário
