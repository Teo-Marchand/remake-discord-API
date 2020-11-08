import { Injectable } from '@nestjs/common';

@Injectable()
export class InvitesService {
  getHello(): string {
    return 'Hello World!';
  }
}
