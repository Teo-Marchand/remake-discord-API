import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import invitesConfig from 'config/rmq-invites.config';
import usersConfig from 'config/rmq-users.config';
import guildConfig from 'config/rqm-guilds.config';
import {
  messagingGuildsProvider,
  messagingInvitesProvider,
  messagingUsersProvider,
} from './providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [invitesConfig, usersConfig, guildConfig],
    }),
  ],
  providers: [
    ...messagingGuildsProvider,
    ...messagingInvitesProvider,
    ...messagingUsersProvider,
  ],
})
export class MessagingModule {}
