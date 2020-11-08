import { Controller, Get } from '@nestjs/common';
import { InvitesService } from './invites.service';

@Controller()
export class InvitesController {
  constructor(private readonly invitesService: InvitesService) {}

  @Get()
  getHello(): string {
    return this.invitesService.getHello();
  }
}
