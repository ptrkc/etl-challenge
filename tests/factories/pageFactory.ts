import fs from 'fs';
import client from '../../src/redisClient';
import { mergeSort } from '../../src/utils/mergeSort';

export async function pageFactory(numberOfPages: number) {
  const randomArray = [];
  for (let i = 0; i < 10 * numberOfPages; i++) {
    randomArray.push(Math.random());
  }
  const sortedNumbers = mergeSort(randomArray);
  for (let i = 0; i < numberOfPages; i++) {
    const page = String(i + 1);
    const statingNumber = i * 10;
    const numbers = sortedNumbers.slice(statingNumber, statingNumber + 10);
    client.hSet('pages', page, JSON.stringify(numbers));
  }
  client.hSet('pages', 'done', 'true');
  return sortedNumbers;
}
