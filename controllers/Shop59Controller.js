const express = require('express');

// Import Models
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
    switch(req.params.category) {
      case 'hats':
        res.render('crown2_59/shop_59/hats', { data: await Shop_59.fetchByCategory(1) })
        break
      case 'jackets':
        res.render('crown2_59/shop_59/jackets', { data: await Shop_59.fetchByCategory(2) })
        break
      case 'sneakers':
        res.render('crown2_59/shop_59/sneakers', { data: await Shop_59.fetchByCategory(3) })
        break
      case 'womens':
        res.render('crown2_59/shop_59/womens', { data: await Shop_59.fetchByCategory(4) })
        break
      case 'mens':
        res.render('crown2_59/shop_59/mens', { data: await Shop_59.fetchByCategory(5) })
        break
      default:
        throw ReferenceError 
    }

  } catch(err) {

    console.log('ERROR: ', err)
  }
}

