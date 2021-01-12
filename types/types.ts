enum TYPE {
  'Erro',
  'Novidade',
  'Implementação'
}

enum PRIORITY {
  'Alta',
  'Média',
  'Baixa'
};

enum COMPLEXITY {
  'Muito pequena',
  'Pequena',
  'Média',
  'Grande',
  'Muito grande'
};

enum STATE {
  'Atribuído',
  'Em desenvolvimento',
  'Em code review',
  'Em teste',
  'Retorno',
  'Fechado'
};

export type Users = {
  id: number;
  name: string;
  email: string;
  avatar: string; // No banco fake criado por Luiz e Walter está como: (avatarUrl: string) no banco postgres está como: (avatar BYTEA)
  role: string;
  permissions: string;
};

export type Versions = {
  id: number;
  version: string;
  last_version: boolean;
};

export type Projects = {
  id: number;
  version: Versions;
  name: string;
};

export type Modules = {
  id: number;
  project: Projects;
  name: string;
};

export type Tickets = {
  id: number;
  project: Projects; /* Ver atributos a serem inseridos na tabela (FK) */
  module: Modules; /* Propor criação da tabela para facilitar introdução de novos módulos (FK) */
  user: Users; /* (FK) */
  destiny_user: Users; /* (FK) */
  product_version: Versions;
  expected_version: Versions;
  id_client_code: number;
  code: number;
  created_date: Date;
  type: TYPE;  /* (ENUM) */
  priority: PRIORITY;  /* (ENUM) */
  state: STATE;  /* (ENUM) */
  subject: string;
  description: string;
  complexity: COMPLEXITY;  /* (ENUM) */
};
	
export type Comments_tickets ={
	id: number;
	user: Users;
	tickets: Tickets;
	text: string;
};

export type Attachaments = {
	id: number;
  tickets: Tickets;
	name: string;
	path: string;
	size: number;
	insert_date: Date;
};
