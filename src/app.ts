import './setup';

import express from 'express';
import cors from 'cors';

import numbers from './routers/numberRouter';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/numbers', numbers);

export async function init() {
  //EXTRACT and set to redis
}

export default app;
