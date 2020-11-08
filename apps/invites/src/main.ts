import { NestFactory } from '@nestjs/core';
import { InvitesModule } from './invites.module';

async function bootstrap() {
  const app = await NestFactory.create(InvitesModule);
  await app.listen(3000);
}
bootstrap();
