const express = require('express');

// Import Models
const Shop_59 = require('../models/Shop_59');

// open the home page
exports.index = async (req, res) => {
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
    })

  } catch(err) {
    console.log('ERROR: ', err)
  }
}

// open product categories page.
exports.category = async (req, res) => {
  try {
    console.log('test: ', req.params.category)
    let results;
    // match `:category` name from HTTP request.
    switch(req.params.category) {
      case 'hats':
        results = await Shop_59.fetchHats();
        res.render('crown2_59/shop_59/hats', { data: results })
        break
      case 'jackets':
        results = await Shop_59.fetchJackets();
        res.render('crown2_59/shop_59/jackets', { data: results })
        break
      case 'sneakers':
        results = await Shop_59.fetchSneakers();
        res.render('crown2_59/shop_59/sneakers', { data: results })
        break
      case 'womens':
        results = await Shop_59.fetchWomens();
        res.render('crown2_59/shop_59/womens', { data: results })
        break
      case 'mens':
        results = await Shop_59.fetchMens();
        res.render('crown2_59/shop_59/mens', { data: results })
        break
      default:
        throw ReferenceError 
    }

    console.log('Fetch results: \n', JSON.stringify(results))

  } catch(err) {

    console.log('ERROR: ', err)
  }
}

