create database project;

use project;

create table user(
    userid integer primary key auto_increment,
    firstname varchar(100),
    lastname varchar(100),
    email varchar(100) unique,
    mobile bigint unique,
    password varchar(600),
    role varchar(50)
);


create table address(
    addressid integer primary key auto_increment,
    userid integer,
    foreign key(userid) references user(userid),
    addressa varchar(600),
    addressb varchar(600),
    city varchar(100),
    pincode integer,
    state varchar(100)
);

CREATE TABLE menu (
    menuid integer primary key auto_increment,
    menuName varchar(255),
    price integer,
    description varchar(600),
    menuImage varchar(255) 
);

create table cart(
    cartid integer primary key auto_increment,
    menuid integer,
    foreign key(menuid) references menu(menuid),
    userid integer,
    foreign key(userid) references user(userid),
    quantity integer,
    price integer,
    createdTimeStamp timestamp default CURRENT_TIMESTAMP
);

create table orders(
    orderid integer primary key auto_increment,
    cartid integer,
    foreign key(cartid) references cart(cartid),
    status varchar(100),
    orderDate date
);
insert into orders values(1, 1, 'waiting','2022-02-02');

create table orderDetails (
  detailsid integer primary key auto_increment,
  orderid integer,
  foreign key(orderid) references orders(orderid),
  menuid integer,
  foreign key(menuid) references menu(menuid),
  price integer,
  quantity integer,
  totalamount integer,
  createdTimeStamp timestamp default CURRENT_TIMESTAMP
);
create table payment(
    userid integer,
    foreign key(userid) references user(userid),
    cartid integer,
    foreign key(cartid) references cart(cartid),
    totalamount integer
);


DELETE FROM menu WHERE menuid=1;






create database medicines_db;
use medicines_db;

create table user (
  id integer primary key auto_increment,
  firstName varchar(1000),
  lastName varchar(1000),
  email varchar(1000) UNIQUE,
  password varchar(100),
  createdTimeStamp timestamp default CURRENT_TIMESTAMP
);

create table medicines (
  id integer primary key auto_increment,
  title varchar(1000),
  company varchar(1000),
  mrp float,
  price float,
  unit varchar(1000),
  expiryDate varchar(1000),
  thumbnail varchar(1000),
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
  medicineId integer,
  price float,
  quantity integer,
  total float,
  createdTimeStamp timestamp default CURRENT_TIMESTAMP
);


create table reminders (
  id integer primary key auto_increment,
  userId integer,
  medicineId integer,
  alarmDate TIMESTAMP,
  quantity integer,
  status integer default 0,
  note varchar(200),
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

CREATE table stores (
  id INTEGER PRIMARY KEY auto_increment,
  name varchar(100),
  phone VARCHAR(15),
  email VARCHAR(50),
  addressLine1 varchar(50),
  addressLine2 varchar(50),
  addressLine3 varchar(50),
  city varchar(50),
  state varchar(50),
  country varchar(50),
  zipCode varchar(50),
  latitude float,
  longitude float,
  createdTimeStamp timestamp default CURRENT_TIMESTAMP

);