-- Nombre de la base de datos: iglesia_digital
CREATE IF NO EXISTS DATABASE iglesia_digital;

-- Sequence

-- sequence organizacion_seq ---> start value: 0001 AND increment: 1
CREATE SEQUENCE organizacion_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;



-- Tables


-- table organizacion
CREATE TABLE organizacion (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  resolucion VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255) NOT NULL
)


-- Table subdivision
CREATE TABLE subdivision (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  organizacion_id INTEGER NOT NULL,
  FOREIGN KEY (organizacion_id) REFERENCES organizacion(id)
)

-- Table church
CREATE TABLE church (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  dir VARCHAR(255) NOT NULL,
  latitud NUMERIC(10,8),
  longitud NUMERIC(10,8),
  tel1 VARCHAR(30),
  tel2 VARCHAR(30),
  date_init DATE NOT NULL,
  subdivision_id INTEGER,
  FOREIGN KEY (subdivision_id) REFERENCES subdivision(id)
)

-- Table social_church
CREATE TABLE social_church (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  social VARCHAR(255) NOT NULL,
  social_url VARCHAR(255) NOT NULL,
  church_id INTEGER NOT NULL,
  user VARCHAR(50) NOT NULL UNIQUE CHECK (length(passwd) > 5),
  passwd VARCHAR(35) NOT NULL CHECK (length(passwd) > 8),
  FOREIGN KEY (church_id) REFERENCES church(id)
)

--  Table shepherd
CREATE TABLE shepherd (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  date_init DATE NOT NULL,
  date_end DATE NOT NULL
)

-- Table person
CREATE TABLE person (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  doc VARCHAR(20) NOT NULL UNIQUE,
  doc_type VARCHAR(2) NOT NULL CHECK (doc_type = 'CC' OR doc_type = 'CE' OR doc_type = 'TI' OR doc_type = 'PS' OR doc_type = 'RC'),
  doc_from VARCHAR(155),
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL
)

-- Table person_espiritual
CREATE TABLE person_espiritual (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  person_id INTEGER NOT NULL,
  baptism_date DATE,
  baptism_place VARCHAR(255),
  holy_spirit_date DATE,
  date_init_church DATE,
  FOREIGN KEY (person_id) REFERENCES person(id)
)

-- Table kinship
CREATE TABLE kinship (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255),
  description VARCHAR(255) 
)

-- Table person_kinship
CREATE TABLE person_kinship (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  person_1_id INTEGER NOT NULL,
  person_2_id INTEGER NOT NULL,
  kinship_id INTEGER NOT NULL,
  date_init DATE NOT NULL,
  CHECK (person_1_id <> person_2_id),
  FOREIGN KEY (person_1_id) REFERENCES person(id),
  FOREIGN KEY (person_2_id) REFERENCES person(id),
  FOREIGN KEY (kinship_id) REFERENCES kinship(id)
)

-- Table country
CREATE TABLE country (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL
)

-- Table region
CREATE TABLE region (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  country_id INTEGER NOT NULL,
  FOREIGN KEY (country_id) REFERENCES country(id)
)

-- Table city
CREATE TABLE city (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  region_id INTEGER NOT NULL,
  FOREIGN KEY (region_id) REFERENCES region(id)
)

-- Table position
CREATE TABLE position (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255) 
)

-- Table groups
CREATE TABLE groups (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255),
  status VARCHAR(2) NOT NULL CHECK (status = 'A' OR status = 'I') 
)

-- Table period
CREATE TABLE period (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  date_init DATE NOT NULL,
  date_end DATE NOT NULL,
  status VARCHAR(2) NOT NULL CHECK (status = 'A' OR status = 'I')
)

-- Table person_group
CREATE TABLE person_group (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  person_id INTEGER NOT NULL,
  groups_id INTEGER NOT NULL,
  position_id INTEGER NOT NULL,
  status VARCHAR(2) NOT NULL CHECK (status = 'A' OR status = 'I'),
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (groups_id) REFERENCES groups(id),
  FOREIGN KEY (position_id) REFERENCES position(id)
)

-- Table knowledge_area
CREATE TABLE knowledge_area (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255) 
)

-- Table scholarship
CREATE TABLE scholarship (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255) 
)

-- Table occupation
CREATE TABLE occupation (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255) 
)

-- Table person_occupation_scolarship
CREATE TABLE person_occupation_scolarship (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  occupation_id INTEGER NOT NULL,
  knowledge_area_id INTEGER NOT NULL,
  scholarship_id INTEGER NOT NULL,
  date_init DATE NOT NULL,
  date_end DATE NOT NULL,
  FOREIGN KEY  (knowledge_area_id) REFERENCES knowledge_area(id),
  FOREIGN KEY (occupation_id) REFERENCES occupation(id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarship(id)
)





-- Inserts




-- function




-- triggers, constraints and other objects

