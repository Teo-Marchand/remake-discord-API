import { Controller, Get } from '@nestjs/common';
import { GuildsService } from './guilds.service';

@Controller()
export class GuildsController {
  constructor(private readonly guildsService: GuildsService) {}

  @Get()
  getHello(): string {
    return this.guildsService.getHello();
  }
}
