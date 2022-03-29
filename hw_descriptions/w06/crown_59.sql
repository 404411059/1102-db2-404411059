set lock_timeout = 0;
set client_encoding = 'UTF8';
set row_security = off;
set default_tablespace = '';
-- heap allocation for text type
set default_table_access_method = heap;

-- Create database
-- create database crown_59;
drop table public.category_59;

create table public.category_59 (
        id integer not null,
        name text not null,
        size text,
        remote_url text,
        local_url text,
        filepath text
);

-- Import Data from local csv file
-- (id, name, size, local_url, remote_url, filepath)
copy category_59 from '/Users/sheldon/Projects/Workspace/college/teixb2c_database/crown_59/hw_descriptions/w05/category_59.csv' with (format csv);

-- set id as primary key of category_59 table
alter table only public.category_59 
        add constraint category_59_pkey primary key (id);

alter table public.category_59 owner to tku_404411059;


