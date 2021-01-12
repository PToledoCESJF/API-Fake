CREATE TYPE TYPE_ENUM AS ENUM (
  'Erro',
  'Novidade',
  'Implementação'
);

CREATE TYPE PRIORITY_ENUM AS ENUM (
  'Alta',
  'Média',
  'Baixa'
);

CREATE TYPE COMPLEXITY_ENUM AS ENUM (
  'Muito pequena',
  'Pequena',
  'Média',
  'Grande',
  'Muito grande'
);

CREATE TYPE STATE_ENUM AS ENUM (
  'Atribuído',
  'Em desenvolvimento',
  'Em code review',
  'Em teste',
  'Retorno',
  'Fechado'
);
