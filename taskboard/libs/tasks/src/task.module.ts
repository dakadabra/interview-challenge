import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { DataModule } from '@app/data';
import { TaskboardControllerController } from './taskboard-controller.controller';
import { TaskRepo } from './task.repo';
import { ProjectRepo } from './project.repo';
import { ProjectService } from './project.service';
import { StatusService } from './status.service';
import { StatusRepo } from './status.repo';

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
