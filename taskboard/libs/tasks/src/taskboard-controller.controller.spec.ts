import { Test, TestingModule } from '@nestjs/testing';
import { TaskboardControllerController } from './taskboard-controller.controller';

describe('TaskboardControllerController', () => {
  let controller: TaskboardControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskboardControllerController],
    }).compile();

    controller = module.get<TaskboardControllerController>(
      TaskboardControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
