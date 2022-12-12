import express from 'express';
import Product from '../models/productModal.js';

const productRouter = express.Router();


//
productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});


// Fetch product using slug
productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

// Fetch product using id
productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default productRouter;
