import './setup';

import express from 'express';
import cors from 'cors';

import numbers from './routers/numberRouter';
import client from './redisClient';
import { extractNumbers } from './utils/extractNumbers';
import { mergeSort } from './utils/mergeSort';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/numbers', numbers);

export async function init() {
  await client.connect();
  const cacheIsUp = await client.hExists('pages', 'done');
  if (cacheIsUp) return;
  const unsortedNumbers = await extractNumbers();
  const sortedNumbers = mergeSort(unsortedNumbers);
  console.log(sortedNumbers);
}

export default app;
