import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export default registerAs('guilds', () => ({
  transport: Transport.RMQ,
  options: {
    urls: process.env.RMQ_GUILDS_URLS.split(',') || [
      'amqp://guest:guest@localhost:5672/guilds',
    ],
    queue: process.env.RMQ_GUILDS_QUEUE || 'guilds_queue',
    queueOptions: {
      durable: false,
    },
  },
}));
