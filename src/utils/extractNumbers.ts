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
    console.log(`Requesting pages: ${startPage} - ${startPage + 9}`);
    await Promise.all(promises).then(function (responses) {
      responses.forEach((res) => tenPages.push(...res.data.numbers));
    });
    return tenPages;
  } catch (e) {
    console.error(`Error requesting pages, retrying...`);
    return false;
  }
}
