import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export default registerAs('users', () => ({
  transport: Transport.RMQ,
  options: {
    urls: process.env.RMQ_USERS_URLS.split(',') || [
      'amqp://guest:guest@localhost:5672/users',
    ],
    queue: process.env.RMQ_USERS_QUEUE || 'users_queue',
    queueOptions: {
      durable: false,
    },
  },
}));
