/* eslint-disable import/extensions */
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
// eslint-disable-next-line no-unused-vars
import colors from 'colors';

import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

// middlewares
app.use(express.json());
app.use(helmet());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.get('/', (req, res) => res.send('hello world'));
app.get('/api/products', (req, res) => res.json(products));
app.get('/api/products/:id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const product = products.find((p) => p._id === req.params.id);
  return res.json(product);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server has started in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  );
});
