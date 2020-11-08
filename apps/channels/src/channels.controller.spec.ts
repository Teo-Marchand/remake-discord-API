import { Test, TestingModule } from '@nestjs/testing';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';

describe('ChannelsController', () => {
  let channelsController: ChannelsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ChannelsController],
      providers: [ChannelsService],
    }).compile();

    channelsController = app.get<ChannelsController>(ChannelsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(channelsController.getHello()).toBe('Hello World!');
    });
  });
});
