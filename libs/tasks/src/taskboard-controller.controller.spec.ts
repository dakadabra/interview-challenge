import { TestBed } from '@automock/jest';
import { Test, TestingModule } from '@nestjs/testing';

import { ProjectService } from './project.service';
import { StatusService } from './status.service';
import { TaskService } from './task.service';
import { TaskboardControllerController } from './taskboard-controller.controller';

describe('TaskboardControllerController', () => {
  let controller: TaskboardControllerController;
  const { unit: taskService } = TestBed.create(TaskService).compile();
  const { unit: projectService } = TestBed.create(ProjectService).compile();
  const { unit: statusService } = TestBed.create(StatusService).compile();
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskboardControllerController],
      providers: [
        { provide: TaskService, useValue: taskService },
        { provide: ProjectService, useValue: projectService },
        { provide: StatusService, useValue: statusService },
      ],
    }).compile();

    controller = module.get<TaskboardControllerController>(
      TaskboardControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
