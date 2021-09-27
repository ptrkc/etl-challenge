import client from '../../src/redisClient';

export async function connect() {
  client.connect();
}

export async function clear() {
  client.del('pages');
}

export async function quit() {
  client.quit();
}
