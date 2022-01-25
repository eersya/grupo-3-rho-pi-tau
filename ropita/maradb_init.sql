

create database ropita;

create table ropita
  (
    id int auto_increment primary key,
    name varchar(20),
    price decimal(12, 2),
    in_discount boolean default false,
    discount tinyint
  );

CREATE USER 'ropita_user'@'localhost' IDENTIFIED BY '89911992';
GRANT ALL PRIVILEGES ON ropita.* TO 'ropita_user'@'localhost';
