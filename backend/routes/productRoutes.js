import express from 'express';
import asyncHandler from 'express-async-handler';

import Product from '../models/ProductModel.js';

const router = express.Router();

/**
 * @desc Fectch all products
 * @route GET /api/products
 * @access public
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);

/**
 * @desc Fectch a single products
 * @route GET /api/products/:id
 * @access public
 */
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({
        message: 'Product not found',
      });
    }
  })
);

export default router;
