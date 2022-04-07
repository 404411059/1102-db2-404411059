var express = require('express');
var router = express.Router();

const Shop_59 = require('../../models/Shop_59.js');

router.get('/', async (req, res, next) => {
        try {
                let results = await Shop_59.fetchHats();
                console.log('Routing results: \n', JSON.stringify(results));
                res.render('crown2_59/shop_59/hats', {
                        data: results,
                });
        } catch(err) {
                console.log('ERROR: ', err);
        }
});

module.exports = router;
