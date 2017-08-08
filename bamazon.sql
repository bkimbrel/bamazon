create database if not exists bamazon;

create table if not exists products(
item_id int not null auto_increment,
product_name  varchar(50) not null,
department_name varchar(50) not null,
price int not null,
quantity int not null
);
