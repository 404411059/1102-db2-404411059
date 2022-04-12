import express from 'express';

// require controller modules.
import { index, category } from '../controllers/Shop59Controller';

const router = express.Router();

// GET request for `/shop_59` home page. (renamed from `overview.html`)
router.get('/', index)

// GET request for product categories pages.
router.get('/:category', category)

export default router;
