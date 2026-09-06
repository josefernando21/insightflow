# InsightFlow

Dashboard de inteligência financeira para pequenas empresas. Criei este projeto para organizar informações financeiras e facilitar a tomada de decisões, com indicadores, projeções e um assistente de perguntas em linguagem natural.

## Funcionalidades

- Dashboard financeiro responsivo.
- Cadastro de nome, empresa, receita e despesas.
- Cálculo de margem, resultado e projeção.
- Recomendações financeiras organizadas por prioridade.
- Perguntas sobre receita, despesas, margem e caixa.
- API REST desenvolvida com Node.js e Express.

## Executar localmente

```bash
cd "C:\Users\nomen\Desktop\Projetos IA\insightflow"
npm install
npm start
```

Depois, acesse `http://localhost:3030`.

## Rotas

- `GET /health` verifica o serviço.
- `GET /api/overview` retorna os dados do dashboard.
- `POST /api/ask` recebe `{ "question": "Como posso melhorar meu caixa?" }`.

## Melhorias planejadas

1. Persistir transações em PostgreSQL ou MySQL.
2. Adicionar autenticação para diferentes usuários.
3. Adicionar histórico financeiro por empresa.
4. Permitir importação de planilhas e exportação de relatórios.

## Stack

Node.js, Express, JavaScript, HTML, CSS e SVG.

## Post para LinkedIn

Desenvolvi o **InsightFlow**, um protótipo de plataforma de inteligência financeira para pequenas empresas.

A proposta é transformar dados financeiros em informações mais simples para apoiar decisões de negócio.

Neste protótipo, implementei:

- Dashboard financeiro responsivo.
- Cadastro de nome, empresa, receita e despesas.
- Cálculo automático de margem e projeção.
- Recomendações financeiras.
- API em Node.js e Express.
- Assistente para perguntas sobre os dados.

O projeto foi desenvolvido com **HTML, CSS, JavaScript, Node.js e Express**.

Esta é a primeira versão do produto. Como próximos passos, pretendo adicionar banco de dados, autenticação, histórico financeiro, importação de planilhas e novos recursos de análise.

Projeto disponível no GitHub:

https://github.com/josefernando21/insightflow

#javascript #nodejs #express #ia #dados #portfólio #desenvolvimentoweb
