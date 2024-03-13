CREATE DATABASE socialnetwork;

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(40),
    email TEXT,
    post TEXT
);

INSERT INTO users (name, email, post) VALUES 
    ('Zhaira', 'zhaira@correo.com', 'Holaa soy Zhaira y este es mi primer post'),
    ('Lysset', 'lysset@correo.com', 'Holaa soy Lysset y este es mi primer post');

