import express from 'express';

const router = express.Router();

// redirect index html to `/crown2_59`
router.get('/', async (req, res) => {
  res.redirect('/crown2_59')
})

export default router;
