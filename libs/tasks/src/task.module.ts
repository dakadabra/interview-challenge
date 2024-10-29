import { Module } from '@nestjs/common';

import { DataModule } from '@app/data';

import { ProjectRepo } from './project.repo';
import { ProjectService } from './project.service';
import { StatusRepo } from './status.repo';
import { StatusService } from './status.service';
import { TaskRepo } from './task.repo';
import { TaskService } from './task.service';
import { TaskboardControllerController } from './taskboard-controller.controller';

@Module({
  imports: [DataModule],
  providers: [
    TaskService,
    TaskRepo,
    ProjectRepo,
    ProjectService,
    StatusService,
    StatusRepo,
  ],
  exports: [TaskService, ProjectService, StatusService],
  controllers: [TaskboardControllerController],
})
export class TasksModule {}
