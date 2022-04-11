const express = require('express');
const router = express.Router();

// redirect index html to `/crown2_59`
router.get('/', async (req, res) => {
  res.redirect('/crown2_59')
})

module.exports = router;
