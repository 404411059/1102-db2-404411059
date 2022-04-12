const express = require('express');

// Import Models
const Category_59 = require('../models/Category_59');
const Shop_59 = require('../models/Shop_59');

// open the home page
exports.index = async (req, res) => {
  try {

    res.render('crown2_59/shop_59', {
      hats_data: await Shop_59.fetchByCategory(1),
      jackets_data: await Shop_59.fetchByCategory(2),
      sneakers_data: await Shop_59.fetchByCategory(3),
      womens_data: await Shop_59.fetchByCategory(4),
      mens_data: await Shop_59.fetchByCategory(5),
    })

  } catch(err) {
    
    console.log('ERROR: ', err)
  }
}

// open product categories page.
exports.category = async (req, res) => {
  try {
    //console.log('test: ', req.params.category)
    // match `:category` name from HTTP request.
    let c_id = Category_59.fetchByName(req.params.category);
    let results = Shop_59.fetchByCategory(c_id);

    res.render('crown2_59/products_59', {
      title: req.params.category,
      name: 王竑迪,
      id: 404411059,
      data: results,
    })

  } catch(err) {

    console.log('ERROR: ', err)
  }
}

