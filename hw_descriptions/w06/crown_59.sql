-- Postgres Database Dump File
-- Author: 404411059

set statement_timeout = 0;
set lock_timeout = 0;
set idle_in_transaction_session_timeout = 0;
set client_encoding = 'UTF8';
set standard_conforming_strings = on;
set check_function_bodies = false;
set client_min_messages = warning;
set row_security = off;
-- implicit tablespace for `CREATE TABLE`
set default_tablespace = '';
-- use heap allocation for faster table creation/deletion.
set default_table_access_method = heap;
set default_table_drop_method = heap;

-- Create category_XX table
-- note: assuming that you have already created database crown_XX in localhost.
drop table if exists public.category_59;
create table public.category_59 (
        id integer not null,
        name text not null,
        size varchar(10),
        remote_url text,
        local_url text,
        filepath text
);

-- Import category data from STDIN in csv format.
-- schema: (id,name,size,local_url,remote_url,filepath)
copy category_59 from stdin with (format csv);
1,hats,,https://i.ibb.co/cvpntL1/hats.png,/img/homepage/hats.png,/crown2_59/shop_59/hats
2,jackets,,https://i.ibb.co/px2tCc3/jackets.png,/img/homepage/jackets.png,/crown2_59/shop_59/jackets
3,sneakers,,https://i.ibb.co/0jqHpnp/sneakers.png,/img/homepage/sneakers.png,/crown2_59/shop_59/sneakers
4,womens,large,https://i.ibb.co/GCCdy8t/womens.png,/img/homepage/womens.png,/crown2_59/shop_59/womens
5,mens,large,https://i.ibb.co/R70vBrQ/men.png,/img/homepage/mens.png,/crown2_59/shop_59/mens
\.

-- set id as primary key of category_59 table
alter table only public.category_59 
        add constraint category_59_pkey primary key (id);
