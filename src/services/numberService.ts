import client from '../redisClient';

export async function getByPage(id: number) {
  const pageString = await client.hGet('pages', String(id));
  if (pageString === null) return [];
  return JSON.parse(pageString);
}
