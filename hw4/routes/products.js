var express = require('express')
var router = express.Router()
import { checkToken } from '../middlewares/jwt-verify';

import { Product } from '../models/product';

const product = new Product();


router.get('/', checkToken, (req, res) => {
  res.json(product.getAllProducts());
});

router.get('/:id', checkToken, (req, res) => {
  res.json(product.getProductById(req.params.id));
});

router.get('/:id/reviews', checkToken, (req, res) => {
  res.json(product.getProductReviews(req.params.id));
});

router.post('/', checkToken, (req, res) => {
  res.json(product.addProduct());
});

module.exports = router