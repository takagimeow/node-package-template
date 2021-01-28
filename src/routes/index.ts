import express from 'express';

export const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res) => {
  res.status(200).send('HELLO WORLD 2nd');
});
