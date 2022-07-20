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
  logical_erase BOOL NOT NULL DEFAULT false
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
  user_account VARCHAR(50) NOT NULL UNIQUE CHECK (length(passwd) > 5),
  passwd VARCHAR(35) NOT NULL CHECK (length(passwd) > 8),
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (church_id) REFERENCES church(id)
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

-- Table user
CREATE TABLE user_account (
  id INTEGER PRIMARY KEY NOT NULL,
  doc VARCHAR(15) NOT NULL UNIQUE CHECK (length(doc) > 5),
  passwd VARCHAR(35) NOT NULL CHECK (length(passwd) > 8),
  logical_erase BOOL NOT NULL DEFAULT false
)

-- Table person
CREATE TABLE person (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  doc VARCHAR(20) NOT NULL UNIQUE,
  doc_type VARCHAR(2) NOT NULL CHECK (doc_type = 'CC' OR doc_type = 'CE' OR doc_type = 'TI' OR doc_type = 'PS' OR doc_type = 'RC'),
  doc_from VARCHAR(155),
  first_name VARCHAR(50) NOT NULL,
  second_name VARCHAR(50),
  first_last_name VARCHAR(50) NOT NULL,
  second_last_name VARCHAR(50),
  birth_date DATE NOT NULL,
  email VARCHAR(255),
  phone_1 VARCHAR(50),
  phone_2 VARCHAR(50),
  gender VARCHAR(2) NOT NULL CHECK (gender = 'M' OR gender = 'F'),
  diretion VARCHAR(255),
  type_person VARCHAR(70) NOT NULL,
  id_user INTEGER,
  place_birth INTEGER,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (id_user) REFERENCES user_account(id),
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
  --baptism_city_id INTEGER,
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



-- Table position
CREATE TABLE position_librarian (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255),
  logical_erase BOOL NOT NULL DEFAULT false 
)


-- Table groups
CREATE TABLE groups_eclesial (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  description VARCHAR(255),
  status VARCHAR(80) NOT NULL,
  url_img VARCHAR(255),
  logical_erase BOOL NOT NULL DEFAULT false 
)
-- id grupo superior a la tabla groups_eclesial

-- Table period
CREATE TABLE periodo (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(155) NOT NULL,
  date_init DATE NOT NULL,
  date_end DATE NOT NULL,
  status VARCHAR(2) NOT NULL CHECK (status = 'A' OR status = 'I'),
  logical_erase BOOL NOT NULL DEFAULT false
)
-- id congregation_id INTEGER NOT NULL,
-- colocar campo url en la tabla person-groups


-- Table person_position
CREATE TABLE person_position (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  person_id INTEGER NOT NULL,
  position_id INTEGER NOT NULL,
  period_id INTEGER NOT NULL,
  id_group INTEGER NULL,
  logical_erase BOOL NOT NULL DEFAULT false,
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (position_id) REFERENCES position_librarian(id),
  FOREIGN KEY (period_id) REFERENCES periodo(id),
  FOREIGN KEY (id_group) REFERENCES groups_eclesial(id)
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
  FOREIGN KEY (groups_id) REFERENCES groups_eclesial(id),
  FOREIGN KEY (position_id) REFERENCES position_librarian(id)
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
  logical_erase BOOL NOT NULL DEFAULT false
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
-- Nota: los datos la mayoria son fiticios para el desarrollo de la aplicacion


-- insertar datos de nombres de paises minimo 200 mas conocidos a la tabla country
INSER INTO country (id, name,  logical_erase) VALUES
(nextval('country_seq'), 'Afghanistan', false),
(nextval('country_seq'), 'Albania', false),
(nextval('country_seq'), 'Algeria', false),
(nextval('country_seq'), 'Andorra', false),
(nextval('country_seq'), 'Angola', false),
(nextval('country_seq'), 'Antigua and Barbuda', false),
(nextval('country_seq'), 'Argentina', false),
(nextval('country_seq'), 'Armenia', false),
(nextval('country_seq'), 'Australia', false),
(nextval('country_seq'), 'Austria', false),
(nextval('country_seq'), 'Azerbaijan', false),
(nextval('country_seq'), 'Bahamas', false),
(nextval('country_seq'), 'Bahrain', false),
(nextval('country_seq'), 'Bangladesh', false),
(nextval('country_seq'), 'Barbados', false),
(nextval('country_seq'), 'Belarus', false),
(nextval('country_seq'), 'Belgium', false),
(nextval('country_seq'), 'Belize', false),
(nextval('country_seq'), 'Benin', false),
(nextval('country_seq'), 'Bhutan', false),
(nextval('country_seq'), 'Bolivia', false),
(nextval('country_seq'), 'Bosnia and Herzegovina', false),
(nextval('country_seq'), 'Botswana', false),
(nextval('country_seq'), 'Brazil', false),
(nextval('country_seq'), 'Brunei', false),
(nextval('country_seq'), 'Bulgaria', false),
(nextval('country_seq'), 'Burkina Faso', false),
(nextval('country_seq'), 'Burundi', false),
(nextval('country_seq'), 'Cambodia', false),
(nextval('country_seq'), 'Cameroon', false),
(nextval('country_seq'), 'Canada', false),
(nextval('country_seq'), 'Cape Verde', false),
(nextval('country_seq'), 'Central African Republic', false),
(nextval('country_seq'), 'Chad', false),
(nextval('country_seq'), 'Chile', false),
(nextval('country_seq'), 'China', false),
(nextval('country_seq'), 'Colombia', false),
(nextval('country_seq'), 'Comoros', false),
(nextval('country_seq'), 'Congo', false),
(nextval('country_seq'), 'Costa Rica', false),
(nextval('country_seq'), 'Cote d\Ivoire', false),
(nextval('country_seq'), 'Croatia', false),
(nextval('country_seq'), 'Cuba', false),
(nextval('country_seq'), 'Cyprus', false),
(nextval('country_seq'), 'Czech Republic', false),
(nextval('country_seq'), 'Denmark', false),
(nextval('country_seq'), 'Djibouti', false),
(nextval('country_seq'), 'Dominica', false),
(nextval('country_seq'), 'Dominican Republic', false),
(nextval('country_seq'), 'East Timor', false),
(nextval('country_seq'), 'Ecuador', false),
(nextval('country_seq'), 'Egypt', false),
(nextval('country_seq'), 'El Salvador', false),
(nextval('country_seq'), 'Equatorial Guinea', false),
(nextval('country_seq'), 'Eritrea', false),
(nextval('country_seq'), 'Estonia', false),
(nextval('country_seq'), 'Ethiopia', false),
(nextval('country_seq'), 'Fiji', false),
(nextval('country_seq'), 'Finland', false),
(nextval('country_seq'), 'France', false),
(nextval('country_seq'), 'Gabon', false),
(nextval('country_seq'), 'Gambia', false),
(nextval('country_seq'), 'Georgia', false),
(nextval('country_seq'), 'Germany', false),
(nextval('country_seq'), 'Ghana', false),
(nextval('country_seq'), 'Greece', false),
(nextval('country_seq'), 'Grenada', false),
(nextval('country_seq'), 'Guatemala', false),
(nextval('country_seq'), 'Guinea', false),
(nextval('country_seq'), 'Guinea-Bissau', false),
(nextval('country_seq'), 'Guyana', false),
(nextval('country_seq'), 'Haiti', false),
(nextval('country_seq'), 'Honduras', false),
(nextval('country_seq'), 'Hong Kong', false),
(nextval('country_seq'), 'Hungary', false),
(nextval('country_seq'), 'Iceland', false),
(nextval('country_seq'), 'India', false),
(nextval('country_seq'), 'Indonesia', false),
(nextval('country_seq'), 'Iran', false),
(nextval('country_seq'), 'Iraq', false),
(nextval('country_seq'), 'Ireland', false);


-- insertar datos de la region
INSERT INTO region (id, name, country_id, logical_erase) VALUES
(nextval('region_seq'), 'Caribe', 37, false),
(nextval('region_seq'), 'Pacifico', 37, false),
(nextval('region_seq'), 'Orinoquia', 37, false),
(nextval('region_seq'), 'Amazonia', 37, false),
(nextval('region_seq'), 'Zona Andina', 37, false),
(nextval('region_seq'), 'Zona Insular', 37, false)


-- insertar datos de nombres de regiones en la tabla city
INSERT INTO city (id, name, region_id, logical_erase) VALUES
(nextval('city_seq'), 'Cali', 5, false)


-- insert data random in table user_account
INSERT INTO user_account (id, doc, passwd, logical_erase) VALUES
(nextval('user_seq'), '123456789', '123456789', false),
(nextval('user_seq'), '123456729', '123456789', false),
(nextval('user_seq'), '123456349', '123456789', false)


-- insert data random in table person 
INSERT INTO person ( id, doc , doc_type , doc_from , first_name , second_name , 
                     first_last_name , second_last_name, birth_date , email , phone_1 , phone_2 , gender , type_person ,
                     id_user , id_city_direction , place_birth , logical_erase) VALUES 
(nextval('person_seq'), '123456789','CC','Colombia','alma','marcela', 'gozo' , 'lopez', '10/02/2022','aaa','123456789',
'123456789','M','Lector',1,1,1,false),
(nextval('person_seq'), '123456729','CC','Colombia','cesar','camino', 'perez' ,'hoy', '12/02/2022','aaa','123456789',
'123456789','M','Lector',2,1,1,false),
(nextval('person_seq'), '123456349','CC','Colombia','felipe','montez' , 'yae', 'hoy',  '11/02/2022','aaa','123456789',
'123456789','M','Lector',3,1,1,false)

-- insert data to position_librarian
INSERT INTO position_librarian (id, name, description , logical_erase ) VALUES
(nextval('position_seq'), 'persona normal', 'Podran ver los grupos a los que pertenecen y ver su informacion pesonal', false),
(nextval('position_seq'), 'Administrador', 'Podran ver los grupos a los que pertenecen y ver su informacion pesonal', false)

-- insert data to periodo
INSERT INTO periodo (id, name, date_init, date_end, status ,logical_erase) VALUES
(nextval('periodo_seq'), 'periodo 1', '01/01/2022', '01/03/2022', 'A', false)

-- insert data to person_position 
INSERT INTO person_position (id, name , person_id , position_id, period_id , id_group ,logical_erase) VALUES
(nextval('person_position_seq'), 'persona normal', 1, 1, 1,NULL, false),
(nextval('person_position_seq'), 'Administrador', 2, 2, 1,NULL, false),
(nextval('person_position_seq'), 'persona normal', 2, 2, 1,NULL, false),
(nextval('person_position_seq'), 'persona normal', 3, 1, 1,NULL, false)




-- function




-- triggers, constraints and other objects

