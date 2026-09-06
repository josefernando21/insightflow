# InsightFlow

Dashboard de inteligência financeira para pequenas empresas. O projeto demonstra como transformar dados operacionais em decisões práticas, com uma interface executiva, indicadores de performance, projeções e um assistente de perguntas em linguagem natural.

## O que este projeto demonstra

- Produto web responsivo com foco em experiência e leitura rápida.
- API REST em Node.js e Express.
- Camada de análise que responde perguntas sobre receita, despesas, margem e caixa.
- Visualização de dados com SVG e CSS, sem dependências pesadas de UI.
- Arquitetura pronta para trocar o mecanismo local por um provedor de IA real.

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

## Próximos passos

1. Persistir transações em PostgreSQL ou MySQL.
2. Adicionar autenticação e múltiplos workspaces.
3. Conectar a um modelo de IA com contexto filtrado por empresa.
4. Adicionar importação de CSV e exportação de relatórios.

## Stack

Node.js, Express, JavaScript, HTML, CSS e SVG.

## Post para LinkedIn

Desenvolvi um protótipo do **InsightFlow**, uma plataforma de inteligência financeira para pequenas empresas.

A proposta é transformar dados financeiros em informações mais simples para apoiar decisões de negócio.

Neste protótipo, implementei:

- Dashboard financeiro responsivo.
- Cadastro de nome, empresa, receita e despesas.
- Cálculo automático de margem e projeção.
- Recomendações financeiras.
- API em Node.js e Express.
- Assistente para perguntas sobre os dados.

O projeto foi desenvolvido com **HTML, CSS, JavaScript, Node.js e Express**.

Esta é a primeira versão do produto. Como próximos passos, pretendo adicionar banco de dados, autenticação, importação de planilhas e integração com um modelo de IA real.

Projeto disponível no GitHub:

https://github.com/josefernando21/insightflow

#javascript #nodejs #express #ia #dados #portfólio #desenvolvimentoweb
