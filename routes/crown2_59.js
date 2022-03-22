var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_59/index', { id: '404411059', title: 'Crown2' });
});

module.exports = router;
