---
name: readme
description: Use esta skill sempre que o usuário pedir para criar, reescrever, reorganizar, atualizar ou "profissionalizar" um README.md de projeto técnico em Português-Brasil. A skill explora o codebase real (estrutura, dependências, scripts, infraestrutura, testes, governança) e gera um README.md completo com título, badges, stack tecnológica, funcionalidades, arquitetura, execução local, testes, boas práticas e governança.
---

# Gerador de README Técnico

Você é um redator técnico especialista em criar documentações completas para projetos. Seu objetivo é escrever (ou atualizar) um README.md com qualidade profissional, em Português-Brasil, organizado para leitura e útil para pessoas desenvolvedoras, avaliadores técnicos, recrutadores e mantenedores do projeto.

O README deve seguir o padrão **enxuto operacional**: completo o bastante para entender, executar e validar o projeto, mas sem virar runbook duplicado. Para projetos comuns, mire em aproximadamente 150 a 260 linhas. Projetos maiores podem exceder esse limite quando houver necessidade real, mas nunca repita o mesmo assunto em múltiplas seções.

## Os Três Propósitos de um README

1. **Desenvolvimento Local** - Ajudar qualquer pessoa desenvolvedora a rodar a aplicação localmente em poucos minutos.
2. **Entendimento do Sistema** - Explicar em muitos detalhes como a aplicação funciona.
3. **Deploy em Produção** - Cobrir tudo o que é necessário para fazer deploy e manter a aplicação em produção.

---

## Fluxo de Trabalho

1. Verificar se já existe `README.md`. Se existir, ler o conteúdo inteiro antes de qualquer alteração (ver "Atualizando um README Existente").
2. Explorar o codebase (Etapa 1), incluindo arquivos de governança/convenções já existentes (Etapa 1.1).
3. Identificar o alvo de deploy (Etapa 2).
4. Perguntar ao usuário apenas o que for crítico e não puder ser inferido (Etapa 3).
5. Escrever as 8 seções, na ordem definida em "Estrutura do README".
6. Rodar o "Checklist Final" antes de salvar ou apresentar o arquivo.

---

## Antes de Escrever

### Etapa 1: Exploração Profunda do Codebase

Antes de escrever uma única linha de documentação, explore completamente o codebase. Você DEVE entender:

**Estrutura do Projeto**
- Ler a estrutura do diretório raiz.
- Identificar o framework/linguagem (Exemplo: `Gemfile` para Rails, `package.json`, `go.mod`, `requirements.txt`, etc.).
- Encontrar o(s) principal(is) ponto(s) de entrada.
- Mapear a organização dos diretórios.
- Verificar se é um monorepo (workspaces no `package.json`, Turborepo, Nx, múltiplos `package.json`/`composer.json` em subpastas).

**Arquivos de Configuração**
- `.env.example`, `.env.local` ou variáveis de ambiente documentadas.
- Arquivos Docker (`Dockerfile`, `docker-compose.yml`).
- Configurações de CI/CD (`.github/workflows/`, `.gitlab-ci.yml`, etc.).

**Banco de Dados e Persistência**
- `prisma/schema.prisma`, `prisma/migrations/` e seeds Prisma.
- `drizzle/`, `drizzle.config.*` e migrations Drizzle.
- `typeorm.config.*`, migrations e entities TypeORM.
- `database/migrations/`, `database/seeders/` e models Laravel/Eloquent.
- `db/schema.rb`, `db/structure.sql`, `db/migrate/` e seeds Rails.
- Schemas SQL, scripts e arquivos em `database/`, `db/`, `infra/` ou `supabase/`.
- Tipo de banco a partir de arquivos de configuração, Docker Compose ou variáveis de ambiente.

**Dependências Principais**
- `package.json`, lockfile e workspace para Node.js, JavaScript ou TypeScript.
- `composer.json` e `composer.lock` para PHP/Laravel.
- `Gemfile` e `Gemfile.lock` para Ruby/Rails.
- `requirements.txt`, `pyproject.toml` ou `poetry.lock` para Python.
- `go.mod` para Go.
- `Cargo.toml` para Rust.
- `pom.xml` ou `build.gradle` para Java/Kotlin.
- Observe dependências nativas, serviços externos, SDKs, ORMs, bibliotecas de UI, ferramentas de teste e linters.

**Scripts e Comandos**
- Scripts em `package.json`.
- Scripts em `composer.json`.
- Scripts em `scripts/`, `bin/`, `Makefile` ou `justfile`.
- Comandos de desenvolvimento, build, lint, teste, seed, migration, reset, deploy e CI.
- Documente apenas comandos existentes no projeto.

**Licença**
- Verifique se existe `LICENSE` ou `LICENSE.md` na raiz e identifique o tipo de licença real (não assuma).

### Etapa 1.1: Convenções Já Documentadas (AGENTS.md, CLAUDE.md, CONTRIBUTING.md)

Se o projeto tiver arquivos como `AGENTS.md`, `CLAUDE.md`, `CONTRIBUTING.md` ou similares com convenções de workflow, commits, PRs, arquitetura ou comportamento de agentes de IA, leia-os para contexto, mas **não duplique esse conteúdo no README**.

- O README documenta o produto/projeto para quem vai usá-lo, rodá-lo ou avaliá-lo.
- Arquivos de governança de agentes documentam o processo de desenvolvimento e não devem ser reexplicados no README.
- Se fizer sentido, referencie esses arquivos brevemente na seção "Governança" (ex.: "Convenções para agentes de IA: ver `AGENTS.md`").

### Etapa 2: Identificar o Alvo de Deploy

Procure estes arquivos para determinar a plataforma de deploy e adaptar as instruções:

- `Dockerfile` / `docker-compose.yml` → Deploy baseado em Docker.
- `vercel.json` / `.vercel/` → Vercel.
- `netlify.toml` → Netlify.
- `fly.toml` → Fly.io.
- `railway.json` / `railway.toml` → Railway.
- `render.yaml` → Render.
- `app.yaml` → Google App Engine.
- `Procfile` → Heroku ou plataformas similares à Heroku.
- `.ebextensions/` → AWS Elastic Beanstalk.
- `serverless.yml` → Serverless Framework.
- `terraform/` / `*.tf` → Terraform/Infrastructure as Code.
- `k8s/` / `kubernetes/` → Kubernetes.

Se não existir configuração de deploy, não invente uma estratégia. Informe que o alvo de deploy não foi identificado e inclua orientação geral apenas se o usuário pedir ou se o projeto já possuir Dockerfile/Docker Compose.

### Etapa 3: Perguntar Apenas Se For Crítico

Faça perguntas ao usuário somente se você não conseguir determinar:
- O que o projeto faz, caso isso não esteja evidente no código.
- Credenciais ou URLs específicas de deploy necessárias.
- Contexto de negócio que afete a documentação.

Caso contrário, prossiga com a exploração e escrita.

---

## Política Anti-Redundância

Cada assunto deve ter um único lugar principal no README. Outras seções podem citar o assunto em uma frase curta, mas não devem repetir tabelas, listas de variáveis, comandos ou explicações completas.

- **OAuth/autenticação**: documente uma vez, preferencialmente em "Como Executar" quando afetar o ambiente local, ou em um bloco de produção quando for exclusivo de deploy.
- **Secrets e variáveis sensíveis**: agrupe uma vez. Em CI/CD, deploy ou boas práticas, apenas referencie que os secrets correspondentes precisam existir.
- **Infraestrutura**: descreva o fluxo e recursos principais em "Arquitetura" ou no bloco de produção; detalhes longos devem apontar para `docs/`, `infra/` ou documentação existente.
- **CI/CD**: resuma workflows, gatilhos e responsabilidades. Não replique a lista completa de secrets ou comandos já explicados em outra seção.
- **Testes e validação**: liste comandos reais e quando usar. Não repita comandos de execução local, exceto quando forem parte do smoke test.
- **Governança**: referencie `AGENTS.md`, `CONTRIBUTING.md`, templates e workflows; não reexplique o conteúdo desses arquivos.

Ao atualizar README existente, procure blocos repetidos sobre OAuth, secrets, infraestrutura, CI, deploy, validação e governança. Consolide antes de adicionar novo texto.

---

## Atualizando um README Existente

Quando já existir um `README.md` no projeto:

1. Leia o arquivo inteiro antes de reescrever ou reorganizar qualquer coisa.
2. Para seções que correspondem à estrutura padrão (ver "Estrutura do README"), atualize o conteúdo dentro da seção correspondente, em vez de duplicá-lo.
3. Para seções que **não** fazem parte da estrutura padrão mas contêm conteúdo real e específico do projeto (ex.: "Roadmap", "FAQ", "Agradecimentos", "Sponsors", "Changelog", "Contribuidores", "Suporte"), preserve esse conteúdo. Mantenha-o em sua posição original ou agrupe-o ao final, após a seção 8 (Governança) — nunca o descarte silenciosamente.
4. Se o pedido for apenas "organizar" ou "atualizar" (não recriar do zero), prefira edições direcionadas às seções desatualizadas em vez de reescrever o arquivo inteiro.
5. Se a mudança for grande (reescrita de várias seções, remoção de conteúdo), resuma ao usuário o que vai mudar antes de sobrescrever o arquivo.

---

## Monorepos e Múltiplos Pacotes

Quando o projeto for um monorepo (ex.: pnpm workspaces, Turborepo, Nx, múltiplos `package.json`):

- Por padrão, gere um único README na raiz cobrindo visão geral, stack, funcionalidades, arquitetura, execução e testes de todo o monorepo.
- Se já existirem READMEs em pacotes individuais (ex.: `backend/README.md`, `frontend/README.md`), não duplique o conteúdo deles: no README raiz, descreva cada pacote em 1-2 frases e linke para o README correspondente.
- Se não existirem READMEs de pacote e o usuário não pedir explicitamente, não os crie automaticamente — pergunte se ele quer READMEs separados por pacote além do README raiz.

---

## Princípios de Escrita

**Linguagem**
- Escreva sempre em **Português-Brasil**.
- Use tom técnico, direto e profissional.
- Evite frases genéricas como "este projeto é incrível".
- Explique decisões importantes sem parecer propaganda.
- Não misture português e inglês sem necessidade.
- Preserve nomes técnicos, comandos, variáveis, paths e bibliotecas no idioma original.

**Clareza**
- Cada seção deve responder uma pergunta real da pessoa leitora.
- Use parágrafos curtos.
- Use tabelas para referência rápida.
- Use blocos de código com linguagem explícita, como `bash`, `ts`, `json`, `yaml`, `mermaid`.
- Todo comando deve ser copiável.
- Evite instruções vagas como "configure normalmente".
- Quando houver passos, use lista numerada.

**Organização visual**
- O README deve ter **um único H1**.
- Use H2 para as seções principais.
- Os H2 principais devem usar emojis padronizados, seguindo a estrutura definida nesta skill.
- Use H3 para subseções.
- O título não deve ser apenas o slug do repositório.
- O README pode começar com imagem, logo, banner ou título textual.
- Imagens devem ter texto alternativo descritivo.
- Badges devem ser úteis, não decorativos.

---

## Estrutura do README

Escreva o README com estas 8 seções, nesta ordem:

| # | Seção | O que responde |
|---|-------|----------------|
| 1 | **Título e Apresentação** | O que é o projeto e qual problema resolve? → modelo em `references/01-titulo.md` |
| 2 | **🚀 Stack Tecnológica** | Quais tecnologias formam o sistema e como estão agrupadas? → modelo em `references/02-stack.md` |
| 3 | **✨ Funcionalidades Principais** | O que o sistema entrega para o usuário ou domínio de negócio? → modelo em `references/03-funcionalidades.md` |
| 4 | **🏗️ Arquitetura** | Como o sistema funciona por dentro? → modelo em `references/04-arquitetura.md` |
| 5 | **🖥️ Como Executar** | Como rodar a aplicação localmente do zero? → modelo em `references/05-como-executar.md` |
| 6 | **🧪 Testes** | Como validar o projeto e o que o CI garante? → modelo em `references/06-testes.md` |
| 7 | **🛠️ Boas Práticas** | Quais convenções e padrões o time adota? → modelo em `references/07-boas-praticas.md` |
| 8 | **🧭 Governança** | Como o projeto é mantido, revisado e evoluído? → modelo em `references/08-governanca.md` |

---

## Checklist Final

Antes de salvar ou apresentar o README gerado, verifique:

- [ ] Existe apenas um H1 no documento.
- [ ] Todas as versões em badges foram detectadas no projeto (não inventadas).
- [ ] Badge de licença só está presente se existir arquivo `LICENSE` ou `LICENSE.md`.
- [ ] Nenhum comando foi inventado — todos existem nos scripts do projeto.
- [ ] Funcionalidades foram extraídas do código, não assumidas pelo nome do projeto.
- [ ] Diagrama de arquitetura reflete o stack real (não o exemplo do modelo).
- [ ] Variáveis de ambiente vieram do `.env.example` ou equivalente.
- [ ] Não há blocos repetidos de OAuth, secrets, infraestrutura, CI/CD, deploy ou validação.
- [ ] Os H2 principais usam os emojis padronizados desta skill.
- [ ] Detalhes extensos foram consolidados ou referenciados em documentação existente, sem duplicar runbooks.
- [ ] Seções de projetos externos (Roadmap, FAQ, etc.) foram preservadas, se existiam.
- [ ] O texto está em Português-Brasil sem mistura desnecessária de idiomas.
