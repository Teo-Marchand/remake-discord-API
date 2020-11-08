import { ConfigService } from '@nestjs/config';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';

export const messagingInvitesProvider = [
  {
    provide: 'INVITES_SERVICE',
    useFactory: (config: ConfigService): ClientProxy => {
      const invites = config.get('invites');
      return ClientProxyFactory.create(invites);
    },
    inject: [ConfigService],
  },
];
