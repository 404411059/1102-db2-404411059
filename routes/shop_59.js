const express = require('express');
const router = express.Router();

const Shop_59 = require('../models/Shop_59');

/* GET shop_59 page. */
router.get('/', async (req, res, next) => {
  try {
    let hats = await Shop_59.fetchHats();
    let jackets = await Shop_59.fetchJackets();
    let sneakers = await Shop_59.fetchSneakers();
    let womens = await Shop_59.fetchWomens();
    let mens = await Shop_59.fetchMens();

    res.render('crown2_59/shop_59', { 
      hats_data: hats,
      jackets_data: jackets,
      sneakers_data: sneakers,
      womens_data: womens,
      mens_data: mens
    });
  } catch(err) {
    console.log('ERROR: ', err);
  }
});

module.exports = router;
