# Referência — Seção 6: Testes

A seção de testes deve explicar como validar o projeto localmente e, quando houver CI, como a validação acontece no pipeline.

**Antes de escrever, procure scripts e configurações em:**
- `package.json`
- `composer.json`
- `Makefile` / `justfile`
- `.github/workflows/`
- `playwright.config.*`, `vitest.config.*`, `jest.config.*`, `cypress.config.*`, `phpunit.xml`
- `AGENTS.md` / `CLAUDE.md` (convenções para agentes de IA, se existirem)
- diretórios `tests/`, `test/`, `spec/`, `frontend/tests/`, `backend/tests/`

> Os comandos, tags e nomes de suíte no modelo abaixo são exemplos ilustrativos. Liste apenas comandos que existam de fato no projeto analisado — não copie os nomes do exemplo.

## Modelo

```markdown
## 🧪 Testes

### Validação completa

| Comando       | O que faz                                          |
|---------------|----------------------------------------------------|
| `pnpm verify` | Executa lint, typecheck e testes automatizados     |
| `pnpm test`   | Executa a suíte principal de testes                |

### Suítes disponíveis

| Comando                              | Escopo                           |
|--------------------------------------|----------------------------------|
| `pnpm test:backend`                  | Todas as suítes de backend       |
| `pnpm test:backend:docker`           | Todas as suítes de backend (container) |
| `pnpm test:e2e`                      | Testes ponta a ponta             |
| `pnpm test:e2e:docker`               | Testes ponta a ponta (container) |
| `pnpm test:frontend:demo-video`      | Gera vídeo de evidência          |
| `pnpm test:frontend:demo-video:docker` | Gera vídeo de evidência (container) |

### Suítes E2E individuais (CI/CD)

| Comando              | Tag               | Descrição                                 |
|----------------------|-------------------|-------------------------------------------|
| `pnpm e2e:smoke`     | `@smoke-login`    | Login, signup e rotas públicas            |
| `pnpm e2e:contract`  | `@smoke-dashboard`| Dashboard, paginação e modais             |
| `pnpm e2e:journey`   | `@journey-full`   | Jornada completa (com seed)               |
| `pnpm e2e:ownership` | `@ownership`      | Isolamento de dados por usuário           |
| `pnpm e2e:transition`| `@transition`     | Transições de rota animadas               |
| `pnpm e2e:visual`    | `@visual`         | Comparação visual do style guide          |

### Conta seed (QA)

| Campo   | Valor                  |
|---------|------------------------|
| Nome    | `Financy Admin`        |
| E-mail  | `admin@financy.local`  |
| Senha   | `TestAdmin123!`        |
```

## Se não houver testes

```markdown
## 🧪 Testes

Não foram encontrados scripts de teste automatizado neste repositório.
```

## Monorepos

Para monorepos com múltiplos pacotes, agrupe os comandos por pacote ou por escopo (ex.: backend, frontend, e2e) em vez de listar tudo sem contexto.
