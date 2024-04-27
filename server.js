import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', () => {
  console.log('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
