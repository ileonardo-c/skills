# Referência — Seção 7: Boas Práticas

A seção de boas práticas deve funcionar como um **modelo orientativo para o time de desenvolvimento**.

Não preencha esta seção como se todas as práticas fossem regras oficiais do projeto. O objetivo é entregar um ponto de partida para que a pessoa desenvolvedora ou o time adaptem conforme as decisões técnicas reais do repositório.

**Quando o projeto já tiver convenções documentadas**, use-as como base.
**Quando não houver evidência suficiente**, gere apenas um modelo editável com exemplos e instruções de preenchimento.

## Onde procurar convenções

- `README.md`, `CONTRIBUTING.md`, `AGENTS.md` / `CLAUDE.md`
- `.github/pull_request_template.md`, `.github/workflows/`
- `.editorconfig`, `biome.json`, `eslint.config.*`, `prettier.config.*`
- `tsconfig.json`, `vite.config.*`, `tailwind.config.*`
- `playwright.config.*`, `vitest.config.*`, `jest.config.*`, `phpunit.xml`, `pint.json`
- `docker-compose.yml`
- diretórios `src/`, `app/`, `backend/`, `frontend/`, `tests/`, `docs/`

## Regras para escrever a seção

- Não gere uma lista extensa de regras obrigatórias sem evidência no projeto.
- Use a seção como template de referência quando o projeto não tiver boas práticas documentadas.
- Diferencie claramente o que é prática detectada e o que é sugestão de preenchimento.
- Se uma prática for inferida pela estrutura do projeto, escreva como inferência.
- Não invente padrões de commit, branch, PR, testes, design system ou deploy.
- Evite repetir comandos que já aparecem em "Como Executar" ou "Testes".
- Evite repetir listas de secrets, variáveis de ambiente ou workflows já documentados em outras seções.
- Prefira regras operacionais curtas e comprovadas pela estrutura real do repositório.
- Quando o README for final para produção/open source, prefira remover comentários internos e deixar apenas as práticas realmente adotadas.

## Modelo genérico (use apenas os blocos aplicáveis ao stack detectado)

````markdown
## 🛠️ Boas Práticas

> [!NOTE]
> As práticas abaixo são um guia inicial. Remova, ajuste ou complemente os itens conforme a arquitetura real do projeto.

- Configuração central deve ser feita em `config.yaml` em formato tree structure para a informação ficar "taggeada" (exemplo: **PROJECT:NAME** | **AWS:S3:BUCKET**).
- Crie scripts para o projeto em vez de comandos manuais (principalmente para monorepo).

### Backend

- Centralize regras de negócio nos módulos/domínios existentes.
- Preserve validações próximas das entradas da API.
- Use o ORM ou query builder configurado no projeto.
- **Tratamento de Erros:** Evite blocos try/catch vazios ou genéricos. Use um Global Error Handler (Middleware) para capturar exceções não tratadas e formatar as respostas de erro padrão da API.
- **Segurança de IDs:** Nunca exponha IDs sequenciais do banco de dados nas URLs ou payloads públicos. Use UUIDs ou ULIDs para identificadores externos.

### Frontend

- **Consumo de API:** Nunca faça chamadas HTTP diretamente dentro dos componentes. Centralize-as em uma camada de Services ou use hooks customizados.
- **Combate ao Prop Drilling:** Se um dado precisa atravessar mais de 3 níveis de componentes filhos que não usam essa informação diretamente, mude a estratégia.

### Em Componentes (UI)

- **Atomic Design:** Divida a interface em componentes reutilizáveis baseados em hierarquia:
  - *Átomos:* Componentes indivisíveis (Botão, Input, Label).
  - *Moléculas:* Junção de átomos (Barra de busca = Input + Botão).
  - *Organismos:* Interfaces mais complexas e funcionais (Header, Sidebar, Card de Produto).
  - *Templates/Pages:* Onde os organismos são injetados para formar a tela.
- **Componentes Burros vs. Componentes Inteligentes:** Separe a lógica da interface. Componentes de UI (*burros*) apenas recebem dados via props e renderizam. Componentes de lógica (*inteligentes/containers*) buscam dados e gerenciam estados complexos.
- **Responsabilidade Única:** Se um componente passou de 200~300 linhas ou está fazendo mais de uma coisa, quebre-o em subcomponentes menores.

### Estrutura de Pastas (Colocation)

O princípio do *Colocation* dita que arquivos que mudam juntos devem morar juntos.

- **Componentes de Escopo Único:** Se um componente pertence apenas a uma página específica, ele deve ficar dentro da pasta dessa página, e não na pasta global de componentes.

```text
src/
├── components/         # Componentes globais (Botão, Modal genérico, Navbar)
└── pages/
    └── Home/
        ├── components/ # Componentes exclusivos da Home (HomeBanner, HomeGrid)
        ├── Home.tsx
        └── Home.styles.ts
```

- **Arquivos Satélites:** Mantenha testes, estilos e tipagens na mesma pasta do componente:

```text
components/
└── Button/
    ├── Button.tsx
    ├── Button.styles.ts
    ├── Button.test.tsx
    └── types.ts
```
````
