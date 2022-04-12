import assert from 'assert';

import db from '../utils/database';

export default class Shop_59 {
  constructor(id, cat_id, product_name, price, remote_url) {
    this.id = id;
    this.cat_id = cat_id;
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

      return results.rows;

    } catch(err) {

      console.log('ERROR: ', err)
    }
  }

  // get products data based on category id from shop_59 table
  static async fetchByCategory(id) {
    // prevent SQL injection.
    assert.strictEqual(typeof id, 'number');

    try {
      let results = await db.query(`select * from shop_59 where cat_id = $1`, [id]);

      return results.rows;
    } catch(err) {

      console.log('ERROR: ', err)
    }
  }
}
