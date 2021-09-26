import express from 'express';
const numbers = express.Router();

numbers.get('/', (req, res) => {
  res.send('/numbers working');
});

export default numbers;
