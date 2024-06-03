CREATE DATABASE bandpauto;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(250) UNIQUE NOT NULL,
  password VARCHAR(250) NOT NULL
);

CREATE TABLE maintenance (
  maintenance_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  car_make VARCHAR(50) NOT NULL,
  car_model VARCHAR(50) NOT NULL
);