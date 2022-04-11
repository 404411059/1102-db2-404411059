const express = require('express');
const router = express.Router();

// require controller modules.
const ShopController = require('../controllers/Shop59Controller');

// GET request for `/shop_59` home page. (renamed from `overview.html`)
router.get('/', ShopController.index)

// GET request for product categories pages.
router.get('/:category', ShopController.category)

module.exports = router;
