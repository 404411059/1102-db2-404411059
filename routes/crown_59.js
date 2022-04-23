// Static webpage with href redirected to "public/*.html"
import express from 'express';

const router = express.Router();

// GET request for index page.
router.get('/', (req, res) => {
  res.render('crown_59/index', {
    title: '靜態路由',
    id: '404411059',
    name: '王竑迪'
  })
})

export default router;
