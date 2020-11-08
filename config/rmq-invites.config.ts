import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export default registerAs('invites', () => ({
  transport: Transport.RMQ,
  options: {
    urls: process.env.RMQ_INVITES_URLS.split(',') || [
      'amqp://guest:guest@localhost:5672/invites',
    ],
    queue: process.env.RMQ_INVITES_QUEUE || 'invites_queue',
    queueOptions: {
      durable: false,
    },
  },
}));
