import { ConfigService } from '@nestjs/config';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';

export const messagingGuildsProvider = [
  {
    provide: 'GUILDS_SERVICE',
    useFactory: (config: ConfigService): ClientProxy => {
      const guilds = config.get('guilds');
      return ClientProxyFactory.create(guilds);
    },
    inject: [ConfigService],
  },
];
