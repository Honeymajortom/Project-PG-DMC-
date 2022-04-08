create database tiffin_db;
use tiffin_db;

create table user (
  id integer primary key auto_increment,
  firstName varchar(500),
  lastName varchar(500),
  email varchar(500) UNIQUE,
  password varchar(500),
  createdTimeStamp timestamp default CURRENT_TIMESTAMP
);

create table menu (
  id integer primary key auto_increment,
  title varchar(500),
  descr varchar(500),
  price float,
  thumbnail varchar(500),
  createdTimeStamp timestamp default CURRENT_TIMESTAMP
);

create table orders (
  id integer primary key auto_increment,
  userId integer,
  datePlaced TIMESTAMP,
  total float,
  status integer,
  paymentMode varchar(1000),
  paymentDate varchar(1000),
  paymentAmount varchar(1000),
  createdTimeStamp timestamp default CURRENT_TIMESTAMP
);

create table orderDetails (
  id integer primary key auto_increment,
  orderId integer,
  menuId integer,
  price float,
  quantity integer,
  total float,
  createdTimeStamp timestamp default CURRENT_TIMESTAMP
);

create table cart (
  id integer primary key auto_increment,
  productId integer,
  userId integer,
  quantity integer,
  price float,
  createdTimeStamp timestamp default CURRENT_TIMESTAMP
);

CREATE TABLE address(
  id INTEGER PRIMARY KEY auto_increment,
  userId integer,
  line1 VARCHAR(100),
  line2 VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  zipCode VARCHAR(100),
  createdTimeStamp timestamp default CURRENT_TIMESTAMP
); 