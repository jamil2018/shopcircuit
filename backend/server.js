import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/', (req, res) => {
  return res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
