import client from '../redisClient';

export async function populateCache(sortedArray: number[]) {
  try {
    let page = 1;
    let index = 0;
    let done = false;
    while (!done) {
      await client.hSet(
        'pages',
        String(page),
        JSON.stringify(sortedArray.slice(index, index + 99))
      );
      page++;
      index += 100;
      if (sortedArray[index] === undefined) done = true;
    }
    await client.hSet('pages', 'done', 'true');
  } catch (e) {
    console.error(e);
  }
}
