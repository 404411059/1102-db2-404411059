import assert from 'assert';

import db from '../utils/database';

export default class Category_59 {

  constructor(id, name, size, remote_url, local_url, filepath) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.filepath = filepath;
  }

  // Methods
  // get all categories from category_59 table
  static async fetchAll() {
    try {
      let results = await db.query(`select * from category_59`);

      return results.rows;
    } catch(err) {

      console.log('ERROR: ', err)
    }
  }

  // get category ID by category.name from the table
  static async fetchByName(name) {
    // prevent SQL injection
    assert.strictEqual(typeof name, 'string');

    try {

      let results = await db.query(`select * from category_59 where name = $1`, [name]);

      return results.rows[0].id;
    } catch(err) {

      console.log('ERROR: ', err)
    }
  }
}
