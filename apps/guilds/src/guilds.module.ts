import { Module } from '@nestjs/common';
import { GuildsController } from './guilds.controller';
import { GuildsService } from './guilds.service';

@Module({
  imports: [],
  controllers: [GuildsController],
  providers: [GuildsService],
})
export class GuildsModule {}
