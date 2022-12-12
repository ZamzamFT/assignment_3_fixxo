import express from 'express';
import Product from '../models/productModal.js';
import User from '../models/userModal.js';

import data from '../data.js';


const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createNewProducts = await Product.insertMany(data.products);

  await User.remove({});
  const createdUser = await User.insertMany(data.users);
  res.send({ createNewProducts, createdUser });
});
export default seedRouter;
