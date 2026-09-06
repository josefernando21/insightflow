const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

const baseData = {
  company: 'Norte Studio',
  period: 'Agosto 2026',
  metrics: {
    revenue: 128400,
    expenses: 76420,
    margin: 51980,
    marginRate: 40.5,
    forecast: 142800,
    forecastRate: 11.2
  },
  cashFlow: [
    { label: 'Mar', revenue: 84500, expenses: 53200 },
    { label: 'Abr', revenue: 91200, expenses: 58400 },
    { label: 'Mai', revenue: 103800, expenses: 61700 },
    { label: 'Jun', revenue: 116400, expenses: 68800 },
    { label: 'Jul', revenue: 121900, expenses: 72900 },
    { label: 'Ago', revenue: 128400, expenses: 76420 }
  ],
  categories: [
    { name: 'Operação', value: 34, color: '#d96b3a' },
    { name: 'Pessoas', value: 28, color: '#1e6d69' },
    { name: 'Marketing', value: 18, color: '#e5b94f' },
    { name: 'Ferramentas', value: 12, color: '#8b9a91' },
    { name: 'Outros', value: 8, color: '#d6d0c5' }
  ],
  recommendations: [
    { priority: 'Alta', title: 'Renegociar contrato de mídia', detail: 'O custo subiu 23% em 60 dias e está 8 p.p. acima do benchmark do setor.', impact: 'R$ 4.800/mês', tone: 'high' },
    { priority: 'Média', title: 'Acelerar recebíveis da conta Orion', detail: 'Antecipar o próximo ciclo melhora o caixa projetado sem comprometer a margem.', impact: '+R$ 12.400 no caixa', tone: 'medium' },
    { priority: 'Baixa', title: 'Consolidar ferramentas duplicadas', detail: 'Três assinaturas têm uso semelhante e podem ser unificadas no próximo ciclo.', impact: 'R$ 1.260/mês', tone: 'low' }
  ]
};

function buildOverview({ name, company, revenue, expenses }) {
  const normalizedRevenue = Math.max(0, Number(revenue) || 0);
  const normalizedExpenses = Math.max(0, Number(expenses) || 0);
  const margin = normalizedRevenue - normalizedExpenses;
  const marginRate = normalizedRevenue ? (margin / normalizedRevenue) * 100 : 0;
  const forecast = normalizedRevenue * 1.112;
  return {
    ...baseData,
    name: String(name || 'você').trim(),
    company: String(company || 'Seu workspace').trim(),
    metrics: {
      revenue: normalizedRevenue,
      expenses: normalizedExpenses,
      margin,
      marginRate: Number(marginRate.toFixed(1)),
      forecast: Math.round(forecast),
      forecastRate: 11.2
    }
  };
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/overview', (_request, response) => {
  response.json(baseData);
});

app.post('/api/overview', (request, response) => {
  const { name, company, revenue, expenses } = request.body || {};
  if (!name || !company || Number(revenue) <= 0 || Number(expenses) < 0) {
    return response.status(400).json({ error: 'Informe nome, empresa, receita e despesas válidos.' });
  }
  response.json(buildOverview({ name, company, revenue, expenses }));
});

app.post('/api/ask', (request, response) => {
  const question = String(request.body?.question || '').toLowerCase();
  const revenue = Number(request.body?.revenue) || baseData.metrics.revenue;
  const expenses = Number(request.body?.expenses) || baseData.metrics.expenses;
  const marginRate = revenue ? (((revenue - expenses) / revenue) * 100).toFixed(1).replace('.', ',') : '0,0';
  let answer = `A margem atual é de ${marginRate}%. O cenário projetado mantém crescimento de receita e recomenda revisar os custos antes do próximo ciclo.`;
  if (question.includes('custo') || question.includes('despesa')) {
    answer = `Suas despesas representam ${revenue ? ((expenses / revenue) * 100).toFixed(1).replace('.', ',') : '0,0'}% da receita. Comece pelos maiores custos recorrentes e revise contratos antes do próximo ciclo.`;
  } else if (question.includes('receita') || question.includes('venda')) {
    answer = `A receita informada é de R$ ${revenue.toLocaleString('pt-BR')}. A projeção para o próximo período é de R$ ${(revenue * 1.112).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}.`;
  } else if (question.includes('caixa') || question.includes('futuro')) {
    answer = `O resultado mensal estimado é de R$ ${(revenue - expenses).toLocaleString('pt-BR')}. Preserve uma reserva para manter o caixa saudável nos próximos ciclos.`;
  }
  response.json({ answer, source: 'InsightFlow Analysis Engine' });
});

app.get('/health', (_request, response) => response.json({ status: 'ok', service: 'insightflow' }));

app.listen(PORT, () => {
  console.log(`InsightFlow running at http://localhost:${PORT}`);
});
