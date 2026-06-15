# Referência — Seção 8: Governança

A seção de governança deve explicar como o projeto é mantido, revisado e evoluído.

Diferente de "Boas Práticas", esta seção deve **priorizar evidências reais do repositório**. Não invente políticas de branch, commit, versionamento, segurança ou contribuição.

Use esta seção como índice operacional de manutenção. Referencie documentos e workflows existentes; não copie o conteúdo completo de `AGENTS.md`, `CONTRIBUTING.md`, templates de PR ou documentação em `docs/`.

## Onde procurar evidências

- `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`
- `.github/CODEOWNERS`, `.github/pull_request_template.md`, `.github/ISSUE_TEMPLATE/`
- `.github/workflows/`
- `AGENTS.md` / `CLAUDE.md` (convenções para agentes de IA, se existirem)
- documentação em `docs/`

## Modelo

```markdown
## 🧭 Governança

| Item                     | Status          | Referência                                                                  |
|--------------------------|-----------------|-----------------------------------------------------------------------------|
| Guia de contribuição     | Disponível      | [`CONTRIBUTING.md`](./CONTRIBUTING.md)                                      |
| Template de Pull Request | Disponível      | [`.github/pull_request_template.md`](./.github/pull_request_template.md)    |
| Code Owners              | Disponível      | [`.github/CODEOWNERS`](./.github/CODEOWNERS)                                |
| CI                       | GitHub Actions  | [`.github/workflows`](./.github/workflows)                                  |
```

## Regras

- Se algum item não existir, omita-o ou marque como "não identificado".
- Para projetos pessoais, mantenha esta seção simples.
- Para projetos de equipe ou open source, detalhe fluxo de contribuição, revisão, CI, padrões de branch e versionamento quando houver evidência.
- Se existir `AGENTS.md` ou `CLAUDE.md`, adicione uma linha na tabela referenciando-o: "Convenções para agentes de IA".
