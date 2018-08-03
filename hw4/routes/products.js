var express = require('express')
var router = express.Router()

import { Product } from '../models/product';

const product = new Product();

router.get('/', (req, res) => {
  res.json(product.getAllProducts());
});

router.get('/:id', (req, res) => {
  res.json(product.getProductById(req.params.id));
});

router.get('/:id/reviews', (req, res) => {
  res.json(product.getProductReviews(req.params.id));
});

router.post('/', (req, res) => {
  res.json(product.addProduct());
});

module.exports = router