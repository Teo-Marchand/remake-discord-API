import { ConfigService } from '@nestjs/config';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';

export const messagingUsersProvider = [
  {
    provide: 'USERS_SERVICE',
    useFactory: (config: ConfigService): ClientProxy => {
      const users = config.get('users');
      return ClientProxyFactory.create(users);
    },
    inject: [ConfigService],
  },
];
