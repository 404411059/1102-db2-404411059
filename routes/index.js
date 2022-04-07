const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('crown_59/index', { id: '404411059', name: '王竑迪' });
});

module.exports = router
