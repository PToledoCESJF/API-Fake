CREATE TABLE users ( /* Checar atributos por unificação de sistema de login */
	id BIGINT NOT NULL, /* (PK) */
	name CHARACTER VARYING(100),
	email CHARACTER VARYING(100),
	avatar BYTEA,
	role CHARACTER VARYING(50),  /* (ENUM) */
	permissions CHARACTER VARYING(50),  /* (ENUM) */
	CONSTRAINT user_pk PRIMARY KEY(id)
);

CREATE TABLE versions (
  id BIGINT NOT NULL,
  version CHARACTER VARYING(15) NOT NULL,
  last_version BOOLEAN NOT NULL,
  CONSTRAINT versions_pk PRIMARY KEY(id),
  CONSTRAINT versions_unique UNIQUE(last_version)
);

CREATE TABLE projects (
	id BIGINT NOT NULL,
	id_version BIGINT NOT NULL,
	name CHARACTER VARYING(50),
	CONSTRAINT project_pk PRIMARY KEY(id),
  CONSTRAINT project_1_fk FOREIGN KEY (id_version)
		REFERENCES versions (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET NULL,
);

CREATE TABLE modules (
	id BIGINT NOT NULL,
	id_project BIGINT NOT null,
	name CHARACTER VARYING(50),
	CONSTRAINT module_pk PRIMARY KEY(id),
	CONSTRAINT module_1_fk FOREIGN KEY (id_project)
		REFERENCES projects (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET NULL	
);

CREATE TABLE tickets (
	id BIGINT NOT null, /* (PK) */
	id_project BIGINT NOT null, /* Ver atributos a serem inseridos na tabela (FK) */
	id_module BIGINT NOT null, /* Propor criação da tabela para facilitar introdução de novos módulos (FK) */
	id_user BIGINT NOT NULL, /* (FK) */
	id_destiny_user BIGINT NOT NULL, /* (FK) */
  id_product_version BIGINT NOT NULL,
	id_expected_version BIGINT NOT NULL,
	id_client_code BIGINT NOT null,
	code BIGINT NOT null,
	created_date date NOT null,
	type CHARACTER VARYING(20),  /* (ENUM) */
	priority CHARACTER VARYING(20),  /* Propor como (ENUM) */
	state CHARACTER VARYING(200),  /* (ENUM) */
	subject CHARACTER VARYING(200),
	description CHARACTER VARYING(200),
	complexity CHARACTER VARYING(20),  /* (ENUM) */
	CONSTRAINT tickets_pk PRIMARY KEY(id),
	CONSTRAINT tickets_1_fk FOREIGN KEY (id_user)
		REFERENCES users (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET NULL,
	CONSTRAINT tickets_2_fk FOREIGN KEY (id_project)
		REFERENCES projects (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET NULL,
	CONSTRAINT tickets_3_fk FOREIGN KEY (id_module)
		REFERENCES modules (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET NULL,
	CONSTRAINT tickets_4_fk FOREIGN KEY (id_destiny_user)
		REFERENCES users (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET NULL,
  CONSTRAINT tickets_5_fk FOREIGN KEY (id_product_version)
		REFERENCES versions (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET NULL,
  CONSTRAINT tickets_6_fk FOREIGN KEY (id_expected_version)
		REFERENCES versions (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET NULL,
	CONSTRAINT type_check CHECK(type IN('Erro', 'Novidade', 'Implementação')),
	CONSTRAINT priority_check CHECK(priority IN('Alta', 'Média', 'Baixa')),
	CONSTRAINT state_check CHECK(state IN('Atribuído', 'Em desenvolvimento', 'Em code review', 'Em teste', 'Retorno', 'Fechado')),
	CONSTRAINT complexity_check CHECK(complexity IN('Muito pequena', 'Pequena', 'Média', 'Grande', 'Muito grande'))
);
	
CREATE TABLE comments_tickets (
	id BIGINT NOT NULL,
	id_tickets_user BIGINT NOT NULL,
	text CHARACTER VARYING(5000),
	id_tickets BIGINT NOT NULL,
	CONSTRAINT comments_pk PRIMARY KEY(id),
	CONSTRAINT comments_1_fk FOREIGN KEY (id_tickets)
		REFERENCES tickets (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET null
);

CREATE TABLE attachaments (
	id BIGINT NOT NULL,
  id_tickets BIGINT NOT NULL,
	name CHARACTER VARYING(50),
	path CHARACTER VARYING(300),
	size NUMERIC(15),
	insert_date TIMESTAMP,
	CONSTRAINT attachaments_pk PRIMARY KEY(id),
  CONSTRAINT attachaments_1_fk FOREIGN KEY (id_tickets)
		REFERENCES tickets (id) MATCH SIMPLE
		ON UPDATE CASCADE
		ON DELETE SET null
);
