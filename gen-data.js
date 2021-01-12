const fs = require('fs');
const faker = require('faker/locale/pt_BR');

const TICKETS = 1500;
const USUARIOS = 5;
const tempoPorCaso = 50;
const dataInicio = '2019-01-01';
// const dataFinal = new Date();
const dataFinal = '2020-11-30';

const tps = {
  TYPE: ['Erro', 'Novidade', 'Implementação'],
  PRIORITY: ['Alta', 'Média', 'Baixa'],
  COMPLEXITY: ['Muito pequena', 'Pequena', 'Média', 'Grande', 'Muito grande'],
  STATE: ['Atribuído', 'Em desenvolvimento', 'Em code review', 'Em teste', 'Retorno', 'Resolvido', 'Fechado']
};

const db = {
  users: [],
  versions: [],
  modules: [],
  projects: [],
  tickets: [],
  comments: [],
  attachaments: [],
};

const qtd = {
  Users: USUARIOS,
  Versions: 15,
  Tickets: TICKETS,
  Comments: 15,
  Attachaments: 15,
};

for (i = 0; i < qtd.Users; i++) {
  firstName = faker.name.firstName();
  lastName = faker.name.lastName()
  db.users[i] = {
    id: i + 1,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@mail.com`,
    avatar: 'https://api.adorable.io/avatars/40/abott@adorable.png',
    role: 'Função',
    permissions: 'Permissão',
  };
};

db.projects = [
  {
    id: 1, name: 'Calima', current_version: '', next_version: '', modules: [
      { id: 1, project: 1, name: 'Contabilidade' },
      { id: 2, project: 1, name: 'Depreciação' },
      { id: 3, project: 1, name: 'Fiscal' },
      { id: 4, project: 1, name: 'Folha de Pagamento' },
      { id: 5, project: 1, name: 'Geral' },
      { id: 6, project: 1, name: 'Honorários' },
      { id: 7, project: 1, name: 'Levantamento de Melhorias e Novos Recursos' },
      { id: 8, project: 1, name: 'Protocolos' },
      { id: 9, project: 1, name: 'Usabilidade - IHM (Interface Homem Máquina)' },
    ]
  },
  {
    id: 2, name: 'Calima-Box', current_version: '', next_version: '', modules: [
      { id: 10, project: 2, name: 'Geral' },
      { id: 11, project: 2, name: 'Usabilidade - IHM (Interface Homem Máquina)' },
    ]
  },
  { id: 3, name: 'Calima-Connect', current_version: '', next_version: '', modules: [{ id: 12, project: 3, name: 'Geral' },] },
  { id: 4, name: 'Calima-Site', current_version: '', next_version: '', modules: [{ id: 13, project: 4, name: 'Geral' },] },
  { id: 5, name: 'Gerir', current_version: '', next_version: '', modules: [{ id: 14, project: 5, name: 'Geral' },] },
  { id: 6, name: 'MFP - Conclusão', current_version: '', next_version: '', modules: [{ id: 15, project: 6, name: 'Geral' },] },
  {
    id: 7, name: 'SATIS DF', current_version: '', next_version: '', modules: [
      { id: 16, project: 7, name: 'Novas Funcionalidades' },
      { id: 17, project: 7, name: 'Problemas' },
    ]
  },
  {
    id: 8, name: 'SATIS PAF-ECF', current_version: '', next_version: '', modules: [
      { id: 18, project: 8, name: 'Cupom Fiscal' },
      { id: 19, project: 8, name: 'DAV, Pré-Vendas e Série D' },
      { id: 20, project: 8, name: 'Outros' },
      { id: 21, project: 8, name: 'Usabilidade - IHM (Interface Homem Máquina)' },
    ]
  },
  {
    id: 9, name: 'SINF', current_version: '', next_version: '', modules: [
      { id: 22, project: 9, name: 'Geral' },
      { id: 23, project: 9, name: 'NF-e' },
      { id: 24, project: 9, name: 'Usabilidade - IHM (Interface Homem Máquina)' },
    ]
  },
];

db.modules = [
  { id: 1, project: 1, name: 'Contabilidade' },
  { id: 2, project: 1, name: 'Depreciação' },
  { id: 3, project: 1, name: 'Fiscal' },
  { id: 4, project: 1, name: 'Folha de Pagamento' },
  { id: 5, project: 1, name: 'Geral' },
  { id: 6, project: 1, name: 'Honorários' },
  { id: 7, project: 1, name: 'Levantamento de Melhorias e Novos Recursos' },
  { id: 8, project: 1, name: 'Protocolos' },
  { id: 9, project: 1, name: 'Usabilidade - IHM (Interface Homem Máquina)' },
  { id: 10, project: 2, name: 'Geral' },
  { id: 11, project: 2, name: 'Usabilidade - IHM (Interface Homem Máquina)' },
  { id: 12, project: 3, name: 'Geral' },
  { id: 13, project: 4, name: 'Geral' },
  { id: 14, project: 5, name: 'Geral' },
  { id: 15, project: 6, name: 'Geral' },
  { id: 16, project: 7, name: 'Novas Funcionalidades' },
  { id: 17, project: 7, name: 'Problemas' },
  { id: 18, project: 8, name: 'Cupom Fiscal' },
  { id: 19, project: 8, name: 'DAV, Pré-Vendas e Série D' },
  { id: 20, project: 8, name: 'Outros' },
  { id: 21, project: 8, name: 'Usabilidade - IHM (Interface Homem Máquina)' },
  { id: 22, project: 9, name: 'Geral' },
  { id: 23, project: 9, name: 'NF-e' },
  { id: 24, project: 9, name: 'Usabilidade - IHM (Interface Homem Máquina)' },
];

for (i = 0; i < db.projects.length; i++, y--) {
  db.versions[i] = {
    id: i + 1,
    project: db.projects[i].name,
    versions: []
  };
  let qtd = Math.floor(Math.random() * 15 ) +1 ;
  let v1 = Math.floor(Math.random() * 9) +1;
  let v2 = Math.floor(Math.random() * 20);
  let v3 = Math.floor(Math.random() * 9);
  let next = '';
  for (x = 0, y = qtd; x < qtd; x++, y--) {
    db.versions[i].versions.push({
      version: `${v1}.${v2}.${v3*10+y}`,
      last_version: y >= qtd ? true : false,
    });
    next = `${v1}.${v2}.${v3*10+(qtd+1)}`;
  }

  db.projects[i].current_version = db.versions[i].versions[0].version;
  db.projects[i].next_version = next;
};


for (i = 0; i < qtd.Tickets; i++) {
  let proj = Math.floor(Math.random() * db.projects.length);
  let m = db.modules.filter(item => item.project === proj + 1).length
  let mod = Math.floor(Math.random() * m);

  db.tickets[i] = {
    id: i + 1,
    project: db.projects[proj].id,
    module: db.projects[proj].modules[mod].id,
    user: db.users[Math.floor(Math.random() * db.users.length)].id,
    destiny_user: db.users[Math.floor(Math.random() * db.users.length)].id,
    product_version: db.projects[proj].current_version,
    expected_version: db.projects[proj].next_version,
    id_client_code: Math.floor(Math.random() * 999),
    code: Math.floor(Math.random() * 999),
    created_date: faker.date.between(dataInicio, dataFinal),
    subject: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(),
    type: tps.TYPE[Math.floor(Math.random() * tps.TYPE.length)],
    priority: tps.PRIORITY[Math.floor(Math.random() * tps.PRIORITY.length)],
    state: tps.STATE[Math.floor(Math.random() * tps.STATE.length)],
    complexity: tps.COMPLEXITY[Math.floor(Math.random() * tps.COMPLEXITY.length)],
    estimatedTime: (Math.random() * tempoPorCaso),
    timeSpent: (Math.random() * tempoPorCaso),
  };
};

for (i = 0; i < qtd.Comments; i++) {
  db.comments[i] = {
    id: i + 1,
    user: db.users[Math.floor(Math.random() * db.users.length)].name,
    ticket: db.tickets[Math.floor(Math.random() * db.tickets.length)].id,
    text: faker.lorem.sentences(),
  };
};

for (i = 0; i < qtd.Attachaments; i++) {
  db.attachaments[i] = {
    id: i + 1,
    ticket: db.tickets[Math.floor(Math.random() * db.tickets.length)].id,
    name: faker.system.fileName(),
    path: faker.system.filePath(),
    size: faker.random.number(1024),
    insert_date: faker.date.recent(),
  };

};

fs.writeFile('./db.json', JSON.stringify(db), (erro) => {
  if (erro) {
    console.log('Erro encontrado');
  }
})
