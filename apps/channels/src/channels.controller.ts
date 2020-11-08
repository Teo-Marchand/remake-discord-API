import { Controller, Get } from '@nestjs/common';
import { ChannelsService } from './channels.service';

@Controller()
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  getHello(): string {
    return this.channelsService.getHello();
  }
}
