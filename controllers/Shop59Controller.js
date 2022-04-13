import express from 'express';

// Import Models
import Category_59 from '../models/Category_59';
import Shop_59 from '../models/Shop_59';

// open the home page
export const index = async (req, res) => {
  try {

    res.render('crown2_59/shop_59', {
      hats_data: await Shop_59.fetchByCategory(1),
      jackets_data: await Shop_59.fetchByCategory(2),
      sneakers_data: await Shop_59.fetchByCategory(3),
      womens_data: await Shop_59.fetchByCategory(4),
      mens_data: await Shop_59.fetchByCategory(5),
    })
  } catch(err) {
    
    console.log('ERROR: ', err);
  }
}

// open product categories page.
export const category = async (req, res) => {
  try {
    //console.log('test: ', req.params.category)
    // match `:category` name from HTTP request.
    let cname = req.params.category;
    let c_id = await Category_59.fetchByName(cname);
    let results = await Shop_59.fetchByCategory(c_id);

    res.render('crown2_59/products_59', {
      title: cname,
      name: "王竑迪",
      id: "404411059",
      data: results,
    })
  } catch(err) {

    console.log('ERROR: ', err);
  }
}

