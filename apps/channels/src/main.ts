import { NestFactory } from '@nestjs/core';
import { ChannelsModule } from './channels.module';

async function bootstrap() {
  const app = await NestFactory.create(ChannelsModule);
  await app.listen(3000);
}
bootstrap();
