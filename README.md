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

## Como funciona

1. A pessoa informa seu nome, empresa, receita e despesas mensais.
2. A API valida os dados e calcula o resultado, a margem e a projeção do próximo período.
3. O dashboard apresenta os indicadores de forma visual e organizada.
4. O assistente responde perguntas com base nos valores informados.

## Estrutura do projeto

- `src/server.js`: servidor Express e rotas da API.
- `public/index.html`: estrutura da interface.
- `public/styles.css`: layout, responsividade e identidade visual.
- `public/app.js`: interações, envio do formulário e atualização dos indicadores.

## Exemplo de uso

Para uma receita mensal de R$ 100.000 e despesas de R$ 35.000, o sistema calcula:

- Resultado: R$ 65.000.
- Margem líquida: 65%.
- Projeção do próximo período: R$ 111.200.
