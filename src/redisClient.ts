import { createClient } from 'redis';

const client = createClient({ url: process.env.REDIS_URL });

client.on('error', function (error) {
  console.error(error);
});

export default client;
