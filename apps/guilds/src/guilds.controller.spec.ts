import { Test, TestingModule } from '@nestjs/testing';
import { GuildsController } from './guilds.controller';
import { GuildsService } from './guilds.service';

describe('GuildsController', () => {
  let guildsController: GuildsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GuildsController],
      providers: [GuildsService],
    }).compile();

    guildsController = app.get<GuildsController>(GuildsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(guildsController.getHello()).toBe('Hello World!');
    });
  });
});
