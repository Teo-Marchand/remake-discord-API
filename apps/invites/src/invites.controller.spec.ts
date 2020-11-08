import { Test, TestingModule } from '@nestjs/testing';
import { InvitesController } from './invites.controller';
import { InvitesService } from './invites.service';

describe('InvitesController', () => {
  let invitesController: InvitesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InvitesController],
      providers: [InvitesService],
    }).compile();

    invitesController = app.get<InvitesController>(InvitesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(invitesController.getHello()).toBe('Hello World!');
    });
  });
});
