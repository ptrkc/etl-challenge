import fs from 'fs';
import supertest from 'supertest';
import app from '../../src/app';
import { pageFactory } from '../factories/pageFactory';
import * as redis from '../utils/redis';

const agent = supertest(app);

beforeAll(async () => {
  await redis.connect();
  await redis.clear();
  const sortedNumbers = await pageFactory(3);
  if (fs.existsSync('./public/numbers.json')) {
    fs.renameSync('./public/numbers.json', './public/numbers.bak');
  }
  const data = JSON.stringify({ numbers: sortedNumbers });
  fs.writeFileSync('./public/numbers.json', data);
});

afterAll(async () => {
  await redis.clear();
  await redis.quit();
  fs.unlinkSync('./public/numbers.json');
  if (fs.existsSync('./public/numbers.bak')) {
    fs.renameSync('./public/numbers.bak', './public/numbers.json');
  }
});

describe('GET /numbers/:id', () => {
  it('should get numbers when page id exists', async () => {
    const response = await agent.get('/numbers/1');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        numbers: expect.any(Array),
      })
    );
  });

  it('should get empty array when page id is a valid int but does not exist', async () => {
    const response = await agent.get('/numbers/999999');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        numbers: [],
      })
    );
  });

  it('should get status 400 when id is not an int', async () => {
    const response = await agent.get('/numbers/banana');

    expect(response.statusCode).toEqual(400);
  });
});

describe('GET /numbers', () => {
  it('should get JSON file with all numbers', async () => {
    const response = await agent.get('/numbers');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        numbers: expect.any(Array),
      })
    );
  });
});
