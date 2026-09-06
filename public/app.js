const form = document.querySelector('#ask-form');
const questionInput = document.querySelector('#question');
const answer = document.querySelector('#answer');
const setupForm = document.querySelector('#setup-form');
const setupBackdrop = document.querySelector('#setup-backdrop');
const editData = document.querySelector('#edit-data');
const storageKey = 'insightflow-profile';
let profile = JSON.parse(localStorage.getItem(storageKey) || 'null');

const currency = (value) => Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

function setInitials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
}

function applyOverview(data) {
  const { metrics } = data;
  document.querySelector('#user-name').textContent = data.name.split(' ')[0];
  document.querySelector('#company-name').textContent = data.company;
  document.querySelector('#sidebar-name').textContent = data.name;
  document.querySelector('#user-initials').textContent = setInitials(data.name);
  document.querySelector('#revenue-value').textContent = currency(metrics.revenue);
  document.querySelector('#expense-value').textContent = currency(metrics.expenses);
  document.querySelector('#margin-rate').textContent = `${metrics.marginRate.toString().replace('.', ',')}%`;
  document.querySelector('#ring-value').textContent = `${metrics.marginRate}%`;
  document.querySelector('#margin-value').textContent = `${currency(metrics.margin)} de resultado`;
  document.querySelector('#forecast-value').textContent = currency(metrics.forecast);
}

async function saveProfile(event) {
  event.preventDefault();
  const nextProfile = {
    name: document.querySelector('#setup-name').value.trim(),
    company: document.querySelector('#setup-company').value.trim(),
    revenue: Number(document.querySelector('#setup-revenue').value),
    expenses: Number(document.querySelector('#setup-expenses').value)
  };
  const button = setupForm.querySelector('.setup-submit');
  button.disabled = true;
  button.textContent = 'Analisando...';
  try {
    const response = await fetch('/api/overview', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(nextProfile) });
    if (!response.ok) throw new Error('Dados inválidos');
    profile = nextProfile;
    localStorage.setItem(storageKey, JSON.stringify(profile));
    applyOverview(await response.json());
    setupBackdrop.classList.remove('visible');
  } catch {
    button.textContent = 'Confira os dados';
    return;
  } finally {
    button.disabled = false;
    if (!setupBackdrop.classList.contains('visible')) button.innerHTML = 'Atualizar meu painel <span>→</span>';
  }
}

function openSetup() {
  if (profile) {
    document.querySelector('#setup-name').value = profile.name;
    document.querySelector('#setup-company').value = profile.company;
    document.querySelector('#setup-revenue').value = profile.revenue;
    document.querySelector('#setup-expenses').value = profile.expenses;
  }
  setupBackdrop.classList.add('visible');
}

setupForm.addEventListener('submit', saveProfile);
editData.addEventListener('click', openSetup);

if (profile) {
  applyOverview({ ...profile, metrics: { revenue: profile.revenue, expenses: profile.expenses, margin: profile.revenue - profile.expenses, marginRate: Number(((profile.revenue - profile.expenses) / profile.revenue * 100).toFixed(1)), forecast: Math.round(profile.revenue * 1.112) } });
} else {
  openSetup();
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (!question) return;
  const button = form.querySelector('button');
  button.disabled = true;
  button.textContent = '...';
  try {
    const response = await fetch('/api/ask', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question, revenue: profile?.revenue, expenses: profile?.expenses }) });
    const data = await response.json();
    answer.textContent = data.answer;
    answer.hidden = false;
  } catch {
    answer.textContent = 'Não foi possível consultar os dados agora.';
    answer.hidden = false;
  } finally {
    button.disabled = false;
    button.textContent = '→';
  }
});
