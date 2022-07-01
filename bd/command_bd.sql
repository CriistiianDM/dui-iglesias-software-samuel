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

CREATE SEQUENCE subdivision_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE church_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


CREATE SEQUENCE social_church_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE user_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE person_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE shepherd_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE person_eclesial_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE kinship_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE person_kinship_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE country_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE region_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE city_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE position_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE groups_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE periodo_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE person_position_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE person_group_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE knowledge_area_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE scholarship_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE occupation_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


CREATE SEQUENCE person_occupation_scolarship_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE attendence_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE img_url_profile_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE img_url_notice_seq
    START WITH 0001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


-- Tables


-- table organizacion
CREATE TABLE organizacion (
  id INTEGER PRIMARY KEY NOT NULL,
  name VARCHAR(155) NOT NULL,
  resolucion VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255),
  logical_erase BOOL NOT NULL DEFAULT false,
)


-- Table subdivision
CREATE TABLE subdivision (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  organizacion_id INTEGER NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
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
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (subdivision_id) REFERENCES subdivision(id)
)

-- Table social_church
CREATE TABLE social_church (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  social VARCHAR(255) NOT NULL,
  social_url VARCHAR(255),
  church_id INTEGER NOT NULL,
  user VARCHAR(50) NOT NULL UNIQUE CHECK (length(passwd) > 5),
  passwd VARCHAR(35) NOT NULL CHECK (length(passwd) > 8),
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (church_id) REFERENCES church(id)
)

-- Table user
CREATE TABLE user (
  id INTEGER PRIMARY KEY NOT NULL,
  doc VARCHAR(15) NOT NULL UNIQUE CHECK (length(doc) > 5),
  passwd VARCHAR(35) NOT NULL CHECK (length(passwd) > 8)
  logical_erase BOOL NOT NULL DEFAULT false
)

-- Table person
CREATE TABLE person (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  doc VARCHAR(20) NOT NULL UNIQUE,
  doc_type VARCHAR(2) NOT NULL CHECK (doc_type = 'CC' OR doc_type = 'CE' OR doc_type = 'TI' OR doc_type = 'PS' OR doc_type = 'RC'),
  doc_from VARCHAR(155),
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  birth_date DATE NOT NULL,
  email VARCHAR(255),
  phone_1 VARCHAR(50),
  phone_2 VARCHAR(50),
  gender VARCHAR(2) NOT NULL CHECK (gender = 'M' , gender = 'F'),
  type_person VARCHAR(70) NOT NULL,
  id_user INTEGER,
  id_city_direction INTEGER,
  place_birth INTEGER,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (id_user) REFERENCES user(id),
  FOREIGN KEY (id_city_direction) REFERENCES city(id),
  FOREIGN KEY (place_birth) REFERENCES city(id)
)


--  Table shepherd
CREATE TABLE shepherd (
  id INTEGER NOT NULL UNIQUE,
  person_id INTEGER NOT NULL,
  church_id INTEGER NOT NULL,
  date_init DATE NOT NULL,
  date_end DATE NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
  PRIMARY KEY (id, person_id, church_id),
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (church_id) REFERENCES church(id)
)


-- Table person_eclesial
CREATE TABLE person_eclesial (
  id INTEGER PRIMARY KEY NOT NULL,
  person_id INTEGER NOT NULL,
  baptism_date DATE,
  baptism_place_id INTEGER,
  baptism_city_id INTEGER,
  holy_spirit_date DATE,
  date_init_church DATE,
  experience_json JSON,
  id_church_now INTEGER,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (baptism_place_id) REFERENCES city(id),
  FOREIGN KEY (baptism_city_id) REFERENCES city(id),
  FOREIGN KEY (id_church_now) REFERENCES church(id)
)

-- tener en cuenta siempre para cosntruir las diferentes consultas
-- dado que usamos el borrado logico solo los datos de ese campo que el false
-- seran los datos que se muestran en la base de datos
-- AND logical_erase = false

-- Table kinship
CREATE TABLE kinship (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255),
  description VARCHAR(255),
  name_inv VARCHAR(255),
  logical_erase BOOL NOT NULL DEFAULT false 
)

-- Table person_kinship
CREATE TABLE person_kinship (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  person_1_id INTEGER NOT NULL,
  person_2_id INTEGER NOT NULL,
  kinship_id INTEGER NOT NULL,
  date_init DATE NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
  CHECK (person_1_id <> person_2_id),
  FOREIGN KEY (person_1_id) REFERENCES person(id),
  FOREIGN KEY (person_2_id) REFERENCES person(id),
  FOREIGN KEY (kinship_id) REFERENCES kinship(id)
)

-- Table country
CREATE TABLE country (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false
)

-- Table region
CREATE TABLE region (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  country_id INTEGER NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (country_id) REFERENCES country(id)
)

-- Table city
CREATE TABLE city (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  region_id INTEGER NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (region_id) REFERENCES region(id)
)

-- Table position
CREATE TABLE position (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255),
  logical_erase BOOL NOT NULL DEFAULT false 
)


-- Table groups
CREATE TABLE groups (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255),
  status VARCHAR(80) NOT NULL,
  url_img VARCHAR(255),
  logical_erase BOOL NOT NULL DEFAULT false 
)


-- Table period
CREATE TABLE periodo (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  date_init DATE NOT NULL,
  date_end DATE NOT NULL,
  status VARCHAR(2) NOT NULL CHECK (status = 'A' OR status = 'I'),
  logical_erase BOOL NOT NULL DEFAULT false
)


-- Table person_position
CREATE TABLE person_position (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  person_id INTEGER NOT NULL,
  position_id INTEGER NOT NULL,
  period_id INTEGER NOT NULL,
  id_group INTEGER NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (position_id) REFERENCES position(id),
  FOREIGN KEY (period_id) REFERENCES periodo(id),
  FOREIGN KEY (id_group) REFERENCES groups(id)
)

-- Table person_group
CREATE TABLE person_group (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  person_id INTEGER NOT NULL,
  groups_id INTEGER NOT NULL,
  position_id INTEGER NOT NULL,
  status VARCHAR(50),
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (groups_id) REFERENCES groups(id),
  FOREIGN KEY (position_id) REFERENCES position(id)
)

-- Table knowledge_area
CREATE TABLE knowledge_area (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255),
  logical_erase BOOL NOT NULL DEFAULT false 
)

-- Table scholarship
CREATE TABLE scholarship (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255),
  logical_erase BOOL NOT NULL DEFAULT false 
)

-- Table occupation
CREATE TABLE occupation (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255),
  logical_erase BOOL NOT NULL DEFAULT false 
)

-- Table person_occupation_scolarship
CREATE TABLE person_occupation_scolarship (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  occupation_id INTEGER NOT NULL,
  knowledge_area_id INTEGER NOT NULL,
  scholarship_id INTEGER NOT NULL,
  date_init DATE NOT NULL,
  date_end DATE NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY  (knowledge_area_id) REFERENCES knowledge_area(id),
  FOREIGN KEY (occupation_id) REFERENCES occupation(id),
  FOREIGN KEY (scholarship_id) REFERENCES scholarship(id)
)

-- Table attendence
CREATE TABLE attendence (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  date_attendence DATE NOT NULL,
  men INTEGER NOT NULL,
  woman INTEGER NOT NULL,
  kid INTEGER NOT NULL,
  vist INTEGER NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (person_id) REFERENCES person(id)
)

-- Table img_url_name
CREATE TABLE img_url_profile (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  id_person INTEGER NOT NULL,
  url_img VARCHAR(255) NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (id_person) REFERENCES person(id) 
)

-- Table img_url_notice
CREATE TABLE img_url_notice (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  url_img VARCHAR(255) NOT NULL,
  logical_erase BOOL NOT NULL DEFAULT false
)

-- Inserts




-- function




-- triggers, constraints and other objects

