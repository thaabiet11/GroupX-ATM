create database atmproject
use atmproject

create table signup
(FirstName varchar(50),
LastName varchar(50),
Age int,
ID VARCHAR(25),
Pin int primary key);

create table transactions
(DepositAmount money,
WithdrawalAmount money,
Balance money);

create table transferfunds
("AccountNumber" varchar(45),
TransferedAmount money);


select * from transactions
select * from transferfunds
select * from signup

drop table signup
drop table transactions
drop table transferfunds
