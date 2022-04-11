const { Pool } = require('pg');
const { connectionString } = require('pg/lib/defaults');

const isHomework = process.env.NODE_ENV === 'homework';
//const isProduction = process.env.NODE_ENV === 'production';

let pool;

if (isHomework) {
  /* Heroku Postgres Database Credentials
   * URL: postgres://fwvknqifzejfnv:c718c6bb3965816baafeed95a1f665d0d8915499f41d2c63524eaf92329335fa@ec2-3-225-79-57.compute-1.amazonaws.com:5432/d7km15o0ccao3s
   * HOST: ec2-3-225-79-57.compute-1.amazonaws.com
   * DATABASE: d7km15o0ccao3s
   * PORT: 5432
   */
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

} else {

  pool = new Pool({
    user: 'tku_404411059',
    host: 'localhost',
    port: '5432',
    database: 'crown_59',
    password: '404411059',
  });
}

module.exports = pool;
