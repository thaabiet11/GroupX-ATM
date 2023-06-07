create database atmproject
use atmproject

create table signup
(FirstName varchar(50),
LastName varchar(50),
Age int,
ID VARCHAR(25),
Pin int primary key);

create table login
(Pin int foreign key references signup(Pin));

create table deposit
(DepositAmount money);

create table withdrawal
(WithdrawalAmount money);

create table transferfunds
("AccountNumber" varchar(45),
TransferedAmount money);

create table pin
(Pin int foreign key references signup(Pin),
"New Pin" int);

create table balance
(Balance money);

select * from login
select * from deposit
select * from withdrawal
select * from transferfunds
select * from pin
select * from balance
select * from signup

drop table signup
drop table login
drop table deposit
drop table withdrawal
drop table transferfunds
drop table pin
drop table balance