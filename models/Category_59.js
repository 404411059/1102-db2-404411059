const db = require('../utils/database');

const Category_59 = class Category_59 {
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
                        //console.log('results', JSON.stringify(results.rows));

                        return results.rows;

                } catch(err) {
                        console.log('ERROR: ', err);
                }
        }
}

const get_all_category_query_test = async () => {
        let results = await Category_59.fetchAll();
        console.log('test result: ', JSON.stringify(results));
}

get_all_category_query_test();

module.exports = Category_59;
