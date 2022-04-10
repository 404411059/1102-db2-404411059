const db = require('../utils/database');

const Shop_59 = class Shop_59 {
  constructor(id, product_name, price, remote_url) {
    this.id = id;
    this.product_name = product_name;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  // Methods
  // get all datas from shop_59 table
  static async fetchAll() {
    try {
      let results = await db.query(`select * from shop_59`);
      //console.log('Shop_59 results', JSON.stringify(results.rows));

      return results.rows;

    } catch(err) {
      console.log('ERROR: ', err);
    }
  }

  // get all Hat products data from shop_59 table
  static async fetchHats() {
    try {
      let results = await db.query(`select * from shop_59 where id = 1`);

      return results.rows;
    } catch(err) {
      console.log('ERROR: ', err);
    }
  }

  // get all Jacket products data from shop_59 table
  static async fetchJackets() {
    try {
      let results = await db.query(`select * from shop_59 where id = 2`);

      return results.rows;
    } catch(err) {
      console.log('ERROR: ', err);
    }
  }

  // get all Sneakers products data from shop_59 table
  static async fetchSneakers() {
    try {
      let results = await db.query(`select * from shop_59 where id = 3`);

      return results.rows;
    } catch(err) {
      console.log('ERROR: ', err);
    }
  }

  // get all Women products data from shop_59 table
  static async fetchWomens() {
    try {
      let results = await db.query(`select * from shop_59 where id = 4`);
      //console.log('Shop_59 results', JSON.stringify(results.rows));

      return results.rows;

    } catch(err) {
      console.log('ERROR: ', err);
    }
  }

  // get all Men products data from shop_59 table
  static async fetchMens() {
    try {
      let results = await db.query(`select * from shop_59 where id = 5`);

      return results.rows;
    } catch(err) {
      console.log('ERROR: ', err);
    }
  }
}

module.exports = Shop_59;
