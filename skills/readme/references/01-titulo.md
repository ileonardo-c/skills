# Referência — Seção 1: Título e Apresentação

A primeira seção deve apresentar o projeto de forma objetiva e visual.

Use um único H1 com o nome humanizado do projeto. Logo, banner e badges são bem-vindos quando forem úteis, mas não substituem uma descrição curta do problema que o projeto resolve.

## Modelo

```markdown
# Nome Humanizado do Projeto

Plataforma full stack de gestão financeira pessoal para controle de receitas, despesas, categorias e visualização analítica por período.

[Imagem, logo ou banner opcional]

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-10.5%2B-F69220?logo=pnpm&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-24%2B-2496ED?logo=docker&logoColor=white)
```

## Prioridade de badges

1. Licença.
2. Runtime principal.
3. Gerenciador de pacotes.
4. Framework principal.
5. Docker/CI.
6. Status de build, se houver workflow real.

### Badge de licença

Inclua o badge/link de licença **somente se existir um arquivo `LICENSE` ou `LICENSE.md`** no repositório, usando o tipo de licença real encontrado nesse arquivo. Se não houver `LICENSE`, omita o badge e a seção de licença — não assuma MIT por padrão.

## Regras para badges de tecnologia

- Use badges com versão quando a versão for detectável no projeto.
- Não invente versões.
- Quando a versão exata não estiver clara, use badge sem versão ou tabela textual com "não identificado".
- Para badges de runtime, prefira versões vindas de `.nvmrc`, `.node-version`, `.tool-versions`, `mise.toml`, `engines` em `package.json`, `Dockerfile` ou documentação existente.

### Exemplo com versão detectada

```markdown
![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?style=flat-square&logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-10.5%2B-F69220?style=flat-square&logo=pnpm&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
```

### Exemplo sem versão detectada

```markdown
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
```
