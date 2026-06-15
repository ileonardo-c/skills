# Repository Guidelines

## Project Structure & Module Organization

This repository is a catalog of Agent Skills compatible with `skills.sh`.
Installable skills live under `skills/<skill-name>/`.
Each skill must include `SKILL.md` with YAML frontmatter containing `name` and
`description`. Optional supporting material belongs beside it:
`references/` for loaded-on-demand docs, `scripts/` for helper scripts, and
`assets/` for templates or static resources.

Repository-level automation and metadata live in `.github/`, `scripts/`,
`skills.sh.json`, `package.json`, and Markdown documentation files.

## Build, Test, and Development Commands

- `npm install`: install local development dependencies.
- `npm run check`: run all repository quality checks.
- `npm run check:text-format`: verify LF line endings and absence of UTF-8 BOM.
- `npm run lint:md`: lint all Markdown files with `markdownlint-cli2`.
- `npm run lint:md:fix`: apply automatic Markdown lint fixes where possible.
- `npx skills add . --list`: verify local skill discovery before publishing.

There is no `npm test` script. Treat `npm run check` as the required local gate.

## Coding Style & Naming Conventions

Use UTF-8, LF line endings, final newlines, and no trailing whitespace.
Markdown, YAML, and JSON use two-space indentation.
Skill directory names must be lowercase, alphanumeric with hyphens, and match the
frontmatter `name`, for example `skills/readme/SKILL.md`.

Write skill instructions and references in Brazilian Portuguese. Keep file
paths, YAML keys, package names, and command examples in their technical form.

## Testing Guidelines

Validation is lint- and specification-driven rather than unit-test-based.
Before opening a PR, run:

```bash
npm run check
npx skills add . --list
```

For new or changed skills, ensure `SKILL.md` frontmatter is valid, the
description is specific and actionable, and the skill appears in `skills.sh.json`.

## Commit & Pull Request Guidelines

Use Conventional Commits with a lowercase type and optional scope:
`feat(readme): adiciona seção de monorepos`,
`fix(readme): corrige frontmatter`, or
`chore(ci): atualiza workflow`.

Branches should follow `feat/<skill-name>`, `fix/<scope>`, `docs/<scope>`, or
`chore/<scope>`. Pull requests should use `.github/pull_request_template.md`,
describe the change clearly, link related issues when applicable, list changed
skills, and confirm `npm run check` passed.

## Security & Configuration Tips

Do not commit secrets, tokens, private endpoints, or credentials. Helper scripts
inside a skill must document dependencies and expected behavior. Keep
`skills.sh.json` aligned with the public catalog structure.
