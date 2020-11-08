import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';

@Controller('/v1')
export class UsersControllers {
  constructor() {}

  @Get('/users/@me')
  async getUser(): Promise<any> {
    return;
  }

  @Get('/users/:userId')
  async getUserId(@Param('userId') userId: string): Promise<any> {
    return;
  }

  @Patch('users/@me')
  async updateUser(
    @Query('username') username?: string,
    @Query('avatar') avatar?: string,
  ): Promise<any> {
    return;
  }

  @Get('/users/@me/guilds')
  async getUserGuild(): Promise<any> {
    return;
  }

  @Delete('/users/@me/guilds/:guildId')
  async leaveUserGuild(): Promise<any> {
    return;
  }

  @Get('/users/@me/connections')
  async getUserConnections(): Promise<any> {
    return;
  }
}
