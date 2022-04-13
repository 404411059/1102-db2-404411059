import express from 'express';

import Category_59 from '../models/Category_59';

const router = express.Router();

// GET request for index page.
router.get('/', async (req, res) => {
  try {

    let results = await Category_59.fetchAll();

    res.render('crown2_59/index', { 
      data: results, 
      title: 'Crown2',
      id: '404411059', 
      name: '王竑迪'
    })
  } catch(err) {

    console.log('ERROR: ', err);
  }
})

export default router;
