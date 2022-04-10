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

-- Create category_XX table
-- note: assuming that you have already created database crown_XX in localhost.
drop table if exists public.category_59;
create table public.category_59 (
        -- set id as primary key
        id integer generated always as identity primary key,
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

-- Create shop_XX table
drop table if exists public.shop_59;
create table public.shop_59 (
        id integer,
        -- set shop_59.id as foreign key to catergory_59.id
        constraint id_fkey foreign key (id) references category_59 (id),
        product_name text not null,
        price integer not null,
        remote_url text,
        local_url text
);

-- Import shop data from STDIN in csv format.
-- schema: (id, product_name, price, remote_url)
copy shop_59 from stdin with (format csv);
1,Brown Brim,25,https://i.ibb.co/ZYW3VTp/brown-brim.png,/img/hats/brown-brim.png
1,Blue Beanie,18,https://i.ibb.co/ypkgK0X/blue-beanie.png,/img/hats/blue-beanie.png
1,Brown Cowboy,35,https://i.ibb.co/QdJwgmp/brown-cowboy.png,/img/hats/brown-cowboy.png
1,Grey Brim,25,https://i.ibb.co/RjBLWxB/grey-brim.png,/img/hats/grey-brim.png
1,Green Beanie,18,https://i.ibb.co/YTjW3vF/green-beanie.png,/img/hats/green-beanie.png
1,Palm Tree,14,https://i.ibb.co/rKBDvJX/palm-tree-cap.png,/img/hats/palm-tree-cap.png
1,Red Beanie,18,https://i.ibb.co/bLB646Z/red-beanie.png,/img/hats/red-beanie.png
1,Wolf Cap,14,https://i.ibb.co/1f2nWMM/wolf-cap.png,/img/hats/wolf-cap.png
1,Blue Snapback,16,https://i.ibb.co/X2VJP2W/blue-snapback.png,/img/hats/blue-snapback.png
2,Black Jean Shearling,125,https://i.ibb.co/XzcwL5s/black-shearling.png,/img/jackets/black-shearling.png
2,Blue Jean Jacket,90,https://i.ibb.co/mJS6vz0/blue-jean-jacket.png,/img/jackets/blue-jean-jacket.png
2,Grey Jean Jacket,90,https://i.ibb.co/N71k1ML/grey-jean-jacket.png,/img/jackets/grey-jean-jacket.png
2,Brown Shearling,165,https://i.ibb.co/s96FpdP/brown-shearling.png,/img/jackets/brown-shearling.png
2,Tan Trench,185,https://i.ibb.co/M6hHc3F/brown-trench.png,/img/jackets/brown-trench.png
3,Adidas NMD,220,https://i.ibb.co/0s3pdnc/adidas-nmd.png,/img/sneakers/adidas-nmd.png
3,Adidas Yeezy,280,https://i.ibb.co/dJbG1cT/yeezy.png,/img/sneakers/yeezy.png
3,Black Converse,110,https://i.ibb.co/bPmVXyP/black-converse.png,/img/sneakers/black-converse.png
3,Nike White AirForce,160,https://i.ibb.co/1RcFPk0/white-nike-high-tops.png,/img/sneakers/white-nike-high-tops.png
3,Nike Brown High Tops,160,https://i.ibb.co/QcvzydB/nike-brown.png,/img/sneakers/nike-brown.png
3,Air Jordan Limited,190,https://i.ibb.co/w4k6Ws9/nike-funky.png,/img/sneakers/nike-funky.png
3,Timberlands,200,https://i.ibb.co/Mhh6wBg/timberlands.png,/img/sneakers/timberlands.png
4,Blue Tanktop,25,https://i.ibb.co/7CQVJNm/blue-tank.png,/img/womens/blue-tank.png
4,Floral Blouse,20,https://i.ibb.co/4W2DGKm/floral-blouse.png,/img/womens/floral-blouse.png
4,Floral Dress,80,https://i.ibb.co/KV18Ysr/floral-skirt.png,/img/womens/floral-skirt.png
4,Red Dots Dress,80,https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png,/img/womens/red-polka-dot-dress.png
4,Striped Sweater,45,https://i.ibb.co/KmSkMbH/striped-sweater.png,/img/womens/striped-sweater.png
4,Yellow Track Suite,135,https://i.ibb.co/v1cvwNf/yellow-track-suit.png,/img/womens/yellow-track-suit.png
4,White Blouse,20,https://i.ibb.co/qBcrsJg/white-vest.png,/img/womens/white-vest.png
5,Camo Down Vest,325,https://i.ibb.co/xJS0T3Y/camo-vest.png,/img/mens/camo-vest.png
5,Floral T-shirt,20,https://i.ibb.co/qMQ75QZ/floral-shirt.png,/img/mens/floral-shirt.png
5,Black & White Longsleeve,25,https://i.ibb.co/55z32tw/long-sleeve.png,/img/mens/long-sleeve.png
5,Pink T-shirt,25,https://i.ibb.co/RvwnBL8/pink-shirt.png,/img/mens/pink-shirt.png
5,Jean Long Sleeve,40,https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png,/img/mens/roll-up-jean-shirt.png
5,Burgundy T-shirt,25,https://i.ibb.co/mh3VM1f/polka-dot-shirt.png,/img/mens/polka-dot-shirt.png
\.

