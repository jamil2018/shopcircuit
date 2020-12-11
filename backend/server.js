import express from 'express';
import products from './data/products.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/', (req, res) => {
  res.send('hello world');
});
app.use('/api/products', (req, res) => {
  res.json(products);
});
app.use('/api/products/:id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server has started on port ${PORT}`);
});
