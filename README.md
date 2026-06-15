# Skills — Coleção de Agent Skills

Coleção de skills para agentes de IA seguindo o padrão [Agent Skills](https://agentskills.io/), publicada para uso com o CLI do [skills.sh](https://www.skills.sh/) mantido pela Vercel em [`vercel-labs/skills`](https://github.com/vercel-labs/skills#readme).

[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Agent Skills](https://img.shields.io/badge/Agent_Skills-spec-8A2BE2?style=flat-square)](https://agentskills.io/specification)
[![Quality](https://github.com/ileonardo-c/skills/actions/workflows/quality.yml/badge.svg?style=flat-square)](https://github.com/ileonardo-c/skills/actions/workflows/quality.yml)

## ✨ Skills disponíveis

| Skill | Descrição | Compatibilidade |
|-------|-----------|-----------------|
| [`readme`](./skills/readme/SKILL.md) | Gera README.md técnico completo em Português-Brasil para qualquer projeto | Kiro, Claude Code, Codex, Gemini CLI, Cursor, Windsurf |

## 🚀 Instalação

Instale com o CLI oficial do [skills.sh](https://skills.sh):

```bash
# Instalar uma skill específica
npx skills add ileonardo-c/skills --skill readme

# Instalar duas ou mais skills específicas do mesmo repositório
npx skills add ileonardo-c/skills --skill readme --skill outra-skill

# Instalar todas as skills
npx skills add ileonardo-c/skills --skill '*'
```

Cada skill deve ficar em sua própria pasta `skills/<nome-da-skill>/SKILL.md`.
O valor de `--skill` deve ser igual ao campo `name` do frontmatter e ao nome da pasta.

## 📐 Padrão skills.sh / Vercel

Este repositório segue as regras de descoberta e instalação documentadas no
[README oficial do CLI da Vercel](https://github.com/vercel-labs/skills#readme)
e deve permanecer compatível com o diretório público [skills.sh](https://www.skills.sh/).

- Cada skill deve ser um diretório independente em `skills/<name>/`.
- Cada diretório de skill deve conter um `SKILL.md` válido.
- O frontmatter do `SKILL.md` deve conter `name` e `description`.
- O campo `name` deve ser o mesmo nome usado na pasta e no comando `--skill`.
- Para instalar múltiplas skills do mesmo repositório, repita `--skill`.
- Para instalar todas as skills descobertas, use `--skill '*'`.
- Antes de publicar ou abrir PR, valide com `npm run check` e `npx skills add . --list`.

## 🤖 Como usar após instalar

No Kiro, Claude Code, Codex, Gemini CLI, Cursor e outros agentes compatíveis, basta pedir:

```text
criar README para este projeto
```

ou invocar diretamente:

```text
/readme
```

A skill vai explorar o codebase automaticamente (estrutura, dependências, scripts, infraestrutura, testes e governança) antes de gerar a documentação.

## 🏗️ Estrutura do repositório

```text
skills/
├── skills/                   # Catálogo de skills instaláveis pelo skills.sh
│   └── <nome-da-skill>/
│       ├── SKILL.md          # Frontmatter + instruções da skill
│       ├── references/       # Documentação carregada sob demanda
│       ├── scripts/          # Scripts auxiliares opcionais
│       └── assets/           # Templates e recursos opcionais
├── .github/                  # CI, CODEOWNERS, políticas e templates
├── scripts/                  # Validações locais do repositório
├── .editorconfig             # EditorConfig com LF
├── .gitattributes            # Normalização Git para LF
├── .markdownlint.json        # Configuração única do markdownlint-cli2
├── package.json
├── skills.sh.json            # Configuração da página no skills.sh
├── CONTRIBUTING.md
└── LICENSE
```

A árvore acima mostra o contrato de organização, não a lista completa de arquivos.
As skills específicas ficam na tabela de skills disponíveis para manter esta seção curta
mesmo quando o catálogo crescer.

## 🛠️ Qualidade

Este repositório usa [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) para garantir formatação consistente em todos os arquivos `.md` e a [GitHub Action Validate Skill](https://github.com/marketplace/actions/validate-skill) para validar o `SKILL.md` contra a especificação oficial do [agentskills.io](https://agentskills.io/specification).

### Executar lint localmente

```bash
npm install
npm run check
```

Para corrigir automaticamente os problemas que têm fix automático:

```bash
npm run lint:md:fix
```

## 🧭 Governança

| Item | Referência |
|------|-----------|
| Licença | [MIT](./LICENSE) |
| Guia de contribuição | [CONTRIBUTING.md](./CONTRIBUTING.md) |
| Template de Pull Request | [.github/pull_request_template.md](./.github/pull_request_template.md) |
| Code Owners | [.github/CODEOWNERS](./.github/CODEOWNERS) |
| Política de branch | [.github/policies/branch-protection-main.json](./.github/policies/branch-protection-main.json) |
| CI | [GitHub Actions](./.github/workflows/quality.yml) — lint de Markdown e validação do SKILL.md |
| Especificação das skills | [agentskills.io/specification](https://agentskills.io/specification) |
| CLI oficial da Vercel | [vercel-labs/skills](https://github.com/vercel-labs/skills#readme) |
| Página no skills.sh | [skills.sh/ileonardo-c/skills](https://skills.sh/ileonardo-c/skills) |

## 🤝 Contribuindo

1. Crie a pasta `skills/<nome-da-skill>/` com um `SKILL.md` válido (ver [especificação](https://agentskills.io/specification))
2. Adicione a skill ao grupo correspondente em `skills.sh.json`
3. Rode `npm run check` antes de abrir o PR
4. O CI valida o `SKILL.md` automaticamente via `Flash-Brew-Digital/validate-skill`

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para o guia completo.
