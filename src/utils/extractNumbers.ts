import axios from 'axios';

export async function extractNumbers() {
  let page = 1;
  let finished = false;
  const unsortedNumbers: number[] = [];

  while (!finished) {
    const tenPages = await extractTenPages(page);
    if (tenPages) {
      if (tenPages.length === 0) {
        finished = true;
        break;
      }
      unsortedNumbers.push(...tenPages);
      page = page + 10;
    }
  }
  return unsortedNumbers;
}

async function extractTenPages(startPage: number): Promise<number[] | false> {
  const api = process.env.API_URL;
  const tenPages: number[] = [];

  try {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      promises.push(axios.get(`${api}${startPage + i}`));
    }
    await Promise.all(promises).then(function (responses) {
      responses.forEach((res) => tenPages.push(...res.data.numbers));
    });
    console.log(`Got pages from: ${startPage} to ${startPage + 9}`);
    return tenPages;
  } catch (e) {
    console.log(
      `ERROR getting pages from: ${startPage} to ${startPage + 9}, retrying...`
    );
    return false;
  }
}
