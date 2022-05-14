import express from 'express';
import configure from './routers';

const app = express();
const port = process.env.PORT || 3000;

configure(app);

console.log(`Hello you, port ${port}`);

app.listen(port, () => {
  console.log(`Listen to you, port ${port}`);
});
