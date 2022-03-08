var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_59/index', { id: '404411059', name: '王竑迪' });
});

module.exports = router;
