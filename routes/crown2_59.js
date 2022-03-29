var express = require('express');
var router = express.Router();

const Category_59 = require('../models/Category_59');

/* GET home page. */
router.get('/', async (req, res, next) => {
        try {
                let results = await Category_59.fetchAll();
                console.log('Routing results: \n', JSON.stringify(results));
                res.render('crown2_59/index', { 
                        data: results, 
                        id: '404411059', 
                        title: 'Crown2' 
                });
        } catch(err) {
                console.log('ERROR: ', err);
        }
});

module.exports = router;
