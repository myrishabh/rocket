GET API for certificate list - localhost:4000/user/getUser
POST API to add certificate - localhost:4000/user/postData

//Database queries

create database dashboard;

create table certificate(
certificate_name varchar(255) not null Primary key,
user_enrolled int,
state varchar(255),
certificate_code varchar(255),
issuer varchar(255),
overview varchar(255),
from_date date,
to_date date
);

insert into certificate(certificate_name, user_enrolled, state, certificate_code, issuer, overview, from_date, to_date) values("certificate 1", 10, "active", "IN_REACT_16_BASICS", "http//localhost/300", "some description", '2024-06-01', "2024-11-01");
insert into certificate(certificate_name, user_enrolled, state, certificate_code, issuer, overview, from_date, to_date) values("certificate 2", 5, "published", "IN_REACT_16_BASICS", "http//localhost/300", "some description", '2024-06-01', "2024-11-06");
insert into certificate(certificate_name, user_enrolled, state, certificate_code, issuer, overview, from_date, to_date) values("certificate 3", 6, "expired", "IN_REACT_16_BASICS", "http//localhost/300", "some description", '2024-06-01', "2024-10-01");
insert into certificate(certificate_name, user_enrolled, state, certificate_code, issuer, overview, from_date, to_date) values("certificate 4", 8, "draft", "IN_REACT_16_BASICS", "http//localhost/300", "some description", '2024-06-01', "2024-12-01");
