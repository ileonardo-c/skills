# Contributing

## Objetivo

Padronizar contribuições de novas skills, garantir qualidade das instruções e manter rastreabilidade por PR e checklist.

## Padrão de referência

Este repositório segue o padrão do [skills.sh](https://www.skills.sh/) e do
[CLI oficial mantido pela Vercel](https://github.com/vercel-labs/skills#readme).
Antes de alterar estrutura, comandos de instalação ou formato de `SKILL.md`,
confirme compatibilidade com essa documentação.

Regras operacionais deste repositório:

- Use a estrutura descoberta pelo CLI: `skills/<nome-da-skill>/SKILL.md`.
- Mantenha `name` e `description` como campos obrigatórios do frontmatter.
- Faça o valor de `name` corresponder ao nome da pasta.
- Use `npx skills add <repo> --skill <nome>` para instalar uma skill específica.
- Repita `--skill` para instalar múltiplas skills do mesmo repositório.
- Use `--skill '*'` para instalar todas as skills descobertas.
- Em `skills.sh.json`, use o schema canônico `https://www.skills.sh/schemas/skills.sh.schema.json`.

## O que é uma skill?

Uma skill é uma pasta dentro de `skills/` contendo, no mínimo, um `SKILL.md` com frontmatter YAML válido e instruções em Markdown para agentes de IA. Veja a [especificação oficial](https://agentskills.io/specification) e a [documentação do CLI da Vercel](https://github.com/vercel-labs/skills#readme) antes de criar uma nova.

```text
skills/
└── nome-da-skill/
    ├── SKILL.md          # Obrigatório: frontmatter + instruções
    ├── references/       # Opcional: documentação de referência
    ├── scripts/          # Opcional: scripts executáveis
    └── assets/           # Opcional: templates e recursos estáticos
```

## Convenções de branch

- Use `feat/<nome-da-skill>` para adicionar uma nova skill.
- Use `fix/<escopo-curto>` para corrigir instrução ou frontmatter existente.
- Use `docs/<escopo-curto>` para atualizar documentação do repositório.
- Use `chore/<escopo-curto>` para ajustes de infraestrutura, CI ou configuração.
- Não agrupe múltiplas skills em um único PR sem justificativa explícita.

## Convenção de commit

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/) com escopo e verbo em minúsculas:

```text
feat(readme): adiciona seção de monorepos
fix(readme): corrige referência quebrada no frontmatter
docs(contributing): atualiza fluxo de validação
chore(ci): adiciona skill ao matrix de validação
```

- Uma intenção por commit; sem mensagens genéricas como `update` ou `fix stuff`.
- Use diacríticos normalmente nos commits em português.

## Criando uma nova skill

1. Crie a pasta `skills/<nome-da-skill>/` — o nome deve ser lowercase, alfanumérico com hífens, sem hífens consecutivos, e corresponder ao campo `name` no frontmatter.
2. Crie o `SKILL.md` com frontmatter YAML contendo apenas `name` e `description`:

   ```yaml
   ---
   name: nome-da-skill
   description: Descrição clara do que a skill faz e quando usá-la. Inclua palavras-chave relevantes.
   ---
   ```

3. Adicione o nome da skill ao grupo correspondente em `skills.sh.json`. Se não existir grupo adequado, crie um novo.
4. Rode o lint antes de abrir o PR:

   ```bash
   npm install
   npm run check
   ```

5. O CI valida o `SKILL.md` automaticamente via `Flash-Brew-Digital/validate-skill@v1`.
6. Valide a descoberta local com:

   ```bash
   npx skills add . --list
   ```

## Antes de abrir o PR

- [ ] O nome da pasta e o campo `name` no frontmatter são idênticos.
- [ ] A `description` tem entre 50 e 1024 caracteres e inclui palavras-chave de quando usar a skill.
- [ ] `npm run check` passou sem erros.
- [ ] A skill foi adicionada ao `skills.sh.json`.
- [ ] O PR segue o template em [.github/pull_request_template.md](./.github/pull_request_template.md).

## Idioma e documentação

- Instruções das skills (`SKILL.md` e `references/`): português do Brasil com acento completo.
- Código, frontmatter YAML, nomes de arquivos e caminhos: inglês / formato técnico original.
- Documentação do repositório (`README.md`, `CONTRIBUTING.md`): português do Brasil.
- Nomes de arquivos referenciados em `*.md`: use crase (ex.: `skills/readme/SKILL.md`).

## Instalação local para testes

Após criar a skill, você pode testá-la instalando direto do seu fork:

```bash
npx skills add <seu-usuario>/<seu-repositorio> --skill <nome-da-skill>
```

Para instalar múltiplas skills do mesmo repositório, repita `--skill`:

```bash
npx skills add <seu-usuario>/<seu-repositorio> --skill <skill-a> --skill <skill-b>
```

Para instalar todas as skills descobertas no repositório, use:

```bash
npx skills add <seu-usuario>/<seu-repositorio> --skill '*'
```

Veja a [documentação da CLI](https://github.com/vercel-labs/skills#readme) para mais opções.

## CI e qualidade mínima

- PRs devem passar no workflow `quality` sem erros.
- O job `markdown-lint` valida finais de linha, ausência de BOM e todos os arquivos `.md` do repositório.
- O job `validate-skill` valida cada `SKILL.md` contra a especificação do [agentskills.io](https://agentskills.io/specification).
- PRs com erros de lint ou frontmatter inválido não serão mergeados.

## Segurança

- Não inclua segredos, tokens, chaves ou credenciais em nenhum arquivo da skill.
- Não referencie endpoints internos ou privados nas instruções.
- Skills com scripts executáveis em `scripts/` devem documentar claramente as dependências e o comportamento esperado.
