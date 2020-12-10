import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server has started on port ${PORT}`);
});
