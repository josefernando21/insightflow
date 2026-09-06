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

Construí o InsightFlow, um dashboard de inteligência financeira para transformar números em decisões melhores.

O foco foi criar um produto que uma pequena empresa realmente conseguiria usar: visão executiva, evolução de receita e despesas, composição de custos, projeção e recomendações priorizadas.

Também implementei uma API em Node.js e uma camada de perguntas sobre os dados, deixando a arquitetura preparada para uma integração real com IA.

Projeto: https://github.com/josefernando21/insightflow

#javascript #nodejs #express #ia #dados #portfólio #desenvolvimentoweb
