# Referência — Seção 3: Funcionalidades Principais

A seção de funcionalidades deve explicar o que o sistema entrega para a pessoa usuária ou para o domínio de negócio.

**Não invente funcionalidades com base apenas no nome do projeto.** Extraia as funcionalidades de:
- rotas;
- telas;
- controllers;
- resolvers;
- services;
- use cases;
- schemas;
- models;
- testes;
- seeds;
- documentação existente.

Não use esta seção para detalhar configuração, secrets, infraestrutura ou CI/CD. Se uma funcionalidade depende de autenticação, deploy ou serviço externo, cite apenas o impacto para a pessoa usuária e deixe os detalhes operacionais para "Como Executar", "Arquitetura" ou "Governança".

## Modelo — lista simples

```markdown
## ✨ Funcionalidades Principais

- Autenticação de usuários.
- Cadastro e gerenciamento de categorias.
- Cadastro de receitas e despesas.
- Dashboard financeiro por período.
- Upload de comprovantes.
- Recuperação de senha.
- Testes E2E para fluxos críticos.
```

## Modelo — agrupada por domínio (use quando houver muitas funcionalidades)

```markdown
## ✨ Funcionalidades Principais

### Conta e Segurança

- Cadastro de usuário.
- Login e logout.
- Recuperação de senha.

### Gestão Financeira

- Cadastro de receitas.
- Cadastro de despesas.
- Organização por categorias.
- Visualização de saldo por período.

### Qualidade e Validação

- Testes automatizados de backend.
- Testes E2E das jornadas principais.
- Evidências visuais da interface.
```
