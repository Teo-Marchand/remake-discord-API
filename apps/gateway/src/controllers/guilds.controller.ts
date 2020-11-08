import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/v1')
export class GuildsController {
  constructor() {}

  @Post('/guilds')
  async createGuild(): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId')
  async getGuildId(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/preview')
  async getGuildPreview(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Patch('/guilds/:guildId')
  async updateGuild(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Delete('/guilds/:guildId')
  async deleteGuild(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/channels')
  async getGuildChannels(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Post('/guilds/:guildId/chhanels')
  async createGuildChannel(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Patch('/guilds/:guildId/channels')
  async updateGuildChannel(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/members')
  async getUsersGuild(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/members/:userId')
  async getUserGuild(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
  ): Promise<any> {
    return;
  }

  @Post('/guilds/:guildId/members/:userId')
  async addUserGuild(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
  ): Promise<any> {
    return;
  }

  @Patch('/guilds/:guildId/members/:userId')
  async updateUserGuild(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
  ): Promise<any> {
    return;
  }

  @Patch('/guilds/:guildId/members/:userId/nick')
  async updateUserGuildNick(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
  ): Promise<any> {
    return;
  }

  @Put('/guilds/:guildId/members/:userId/roles/:roleId')
  async addGuildMemberRole(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
    @Param('roleId') roleId: string,
  ): Promise<any> {
    return;
  }

  @Delete('/guilds/:guildId/members/:userId/roles/:roleId')
  async deleteGuildMemberRole(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
    @Param('roleId') roleId: string,
  ): Promise<any> {
    return;
  }

  @Delete('/guilds/:guildId/members/:userId')
  async removeGuildMember(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
  ): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/bans')
  async getGuildBans(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/bans/:userId')
  async getGuildBan(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
  ): Promise<any> {
    return;
  }

  @Put('/guilds/:guildId/bans/:userId')
  async createGuildBan(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
  ): Promise<any> {
    return;
  }

  @Delete('/guilds/:guildId/bans/:userId')
  async removeGuildBan(
    @Param('guildId') guildId: string,
    @Param('userId') userId: string,
  ): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/roles')
  async getGuildRoles(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Post('/guilds/:guildId/roles')
  async createGuildRole(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Patch('/guilds/:guildId/roles')
  async updateGuildRolePositions(
    @Param('guildId') guildId: string,
  ): Promise<any> {
    return;
  }

  @Patch('/guilds/:guildId/roles/:roleId')
  updateGuildRole(
    @Param('guildId') guildId: string,
    @Param('roleId') roleId: string,
  ): Promise<any> {
    return;
  }

  @Delete('/guilds/:guildId/roles/:roleId')
  async deleteGuildRole(
    @Param('guildId') guildId: string,
    @Param('roleId') roleId: string,
  ): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/prune')
  async getGuildPruneCount(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Post('/guilds/:guildId/prune')
  async beginGuildPrine(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/invites')
  async getGuildInvites(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Get('/guilds/:guildId/integrations')
  async getGuildIntegrations(@Param('guildId') guildId: string): Promise<any> {
    return;
  }

  @Post('/guilds/:guildId/integrations')
  async createGuildIntegrations(
    @Param('guildId') guildId: string,
  ): Promise<any> {
    return;
  }

  @Patch('/guilds/:guildId/integrations/:integrationId')
  async updateGuildIntegration(
    @Param('guildId') guildId: string,
    @Param('integrationId') integrationId: string,
  ): Promise<any> {
    return;
  }

  @Delete('/guilds/:guildId/integrations/:integrationId')
  async deleteGuildIntegration(
    @Param('guildId') guildId: string,
    @Param('integrationId') integrationId: string,
  ): Promise<any> {
    return;
  }

  // TODO: add other routes.
}
