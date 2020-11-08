import { Controller, Delete, Get, Param, Query } from '@nestjs/common';

@Controller('/v1')
export class InvitesController {
  constructor() {}

  @Get('/invites/:code')
  async getInvite(
    @Param('code') code: string,
    @Query('with_count') withCount?: boolean,
  ): Promise<any> {
    return;
  }

  @Delete('/invites/:code')
  async deleteInvite(@Param('code') code: string): Promise<any> {
    return;
  }
}
