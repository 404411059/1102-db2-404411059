set lock_timeout = 0;
set client_encoding = 'UTF8';
set row_security = off;

-- Create database
create database crown_59;
create table public.category_59 (
        id integer primary key not null,
        name text not null,
        size text,
        remote_url text,
        filepath text
);

