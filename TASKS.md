# TASKS - Etapa 5: Desafio Mindfulness (Botão de Emergência)

> **STATUS:** EM EXECUÇÃO
> **PRD de Referência:** [PRD.md](PRD.md) > **Arquivo Alvo:** `src/components/steps/Step7MindfulnessChallenge.tsx`

---

## 📋 VISÃO GERAL

Implementação do novo "Desafio: Observação Consciente" (Botão de Emergência), substituindo completamente a antiga mecânica de "Técnica dos 3 Passos".

**Conceito Principal:** Exercício ativo de observação onde o usuário deve notar 5 coisas no ambiente (Visual, Auditivo, Sensorial) para ganhar pontos e "voltar para o presente".

---

## 🗂️ ESTRUTURA DE BACKUPS

| Arquivo                                  | Backup                   | Localização                                       |
| ---------------------------------------- | ------------------------ | ------------------------------------------------- |
| Step7MindfulnessChallenge.tsx (Original) | [x] Realizado (Terminal) | `bkps/Step7MindfulnessChallenge.tsx.bkp_ORIGINAL` |

---

## 📊 FASES DE IMPLEMENTAÇÃO (Conforme PRD Seção 10.1)

### FASE 1: FUNDAÇÃO E APRESENTAÇÃO (MVP)

- [x] **TASK-501:** Backup do arquivo original
- [x] **TASK-502:** Implementar Tela de Apresentação (Card Padrão)
  - [x] Layout idêntico ao "Foco Laser" (aprovado)
  - [x] Ícone Turquesa/Verde Água + Badge "Nível 2"
  - [x] Seção "Como Funciona" com 3 passos claros
  - [x] Card de Recompensas (+150 XP, +50 Coins)
  - [x] Botão "Começar Desafio" full-width

### FASE 2: MECÂNICA E TELA DE EXECUÇÃO

- **Primária:** Turquesa/Verde Água (`#00CED1` ou similar do Tailwind custom)
- **Fundo:** Dark/Preto
- **Texto:** Branco/Cinza Claro

### Mecânica de Pontuação (REQ-EXEC-003)

- **Botão Central:** +3 pontos (Média)
- **Botão Ver:** +1 ponto
- **Botão Ouvir:** +3 pontos
- **Botão Sentir:** +5 pontos
- **Objetivo:** >= 9 pontos

---

## 📌 REGISTRO DE ALTERAÇÕES

| Data       | Task             | Status       | Backup | Observações        |
| ---------- | ---------------- | ------------ | ------ | ------------------ |
| 17/12/2025 | Criação do Plano | Em Progresso | -      | Inicio da execução |
