# Referência — Seção 5: Como Executar

Guia completo de desenvolvimento local: o que precisa estar instalado antes de começar.

Esta seção deve ser o lugar principal para comandos de execução e configuração local. Agrupe variáveis por tema quando a lista for grande; não repita a mesma lista em CI/CD, governança ou boas práticas.

> O conteúdo abaixo (pré-requisitos, comandos, portas, variáveis de ambiente) é um exemplo de formato. Substitua pelos pré-requisitos, scripts e variáveis reais do projeto.

## Modelo

````markdown
## 🖥️ Como Executar

### Pré-requisitos

- [Node.js 22+](https://nodejs.org) + [pnpm 10.5+](https://pnpm.io) — `corepack enable`
- [Docker Desktop 24+](https://www.docker.com/products/docker-desktop/)
- Nenhum `.env` obrigatório; os scripts carregam `.env.example` automaticamente.

### Desenvolvimento

```bash
pnpm dev:check   # valida contratos de env/compose (sem subir serviços)
pnpm dev         # sobe API, frontend, backend, db e o S3
pnpm dev:logs    # acompanha logs da stack
pnpm dev:down    # encerra tudo e limpa volumes
```

| Serviço     | URL                               |
|-------------|-----------------------------------|
| Frontend    | http://localhost:5173             |
| Style Guide | http://localhost:5173/style-guide |
| Backend     | http://localhost:4000             |
| S3          | http://localhost:9001             |

### Variáveis de Ambiente

| Grupo | Variável | Obrigatória | Descrição |
|-------|----------|-------------|-----------|
| Banco de dados | `DATABASE_URL` | Sim | URL de conexão com PostgreSQL. |
| Autenticação | `JWT_SECRET` | Sim | Chave usada para assinatura dos tokens. |
| E-mail | `SMTP_HOST` | Não | Host SMTP usado em desenvolvimento. |
| Storage | `AWS_S3_ENDPOINT_INTERNAL` | Não | Endpoint interno para storage compatível com S3. |
| Storage | `AWS_S3_ENDPOINT_PUBLIC` | Não | Endpoint público para upload assinado. |
````

Se houver OAuth ou outro provedor de autenticação, explique o modo local e linke para documentação dedicada quando existir. Não replique secrets de produção em mais de uma seção.
