import { Injectable } from '@nestjs/common';

@Injectable()
export class ChannelsService {
  getHello(): string {
    return 'Hello World!';
  }
}
