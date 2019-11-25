DROP TABLE child;
DROP TABLE person;

CREATE TABLE person (
    person_id   SERIAL PRIMARY KEY,
    person_first_name   VARCHAR(30) NOT NULL,   
    person_last_name   VARCHAR(30) NOT NULL,
    birth   DATE NOT NULL
);

CREATE TABLE child (
    child_id   SERIAL PRIMARY KEY,
    child_first   VARCHAR(30) NOT NULL,   
    child_last   VARCHAR(30) NOT NULL,   
    birth   DATE NOT NULL,
    person_id   INT NOT NULL REFERENCES person(person_id)
);
