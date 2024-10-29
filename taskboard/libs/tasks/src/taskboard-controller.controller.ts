import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { StatusService } from './status.service';
import { TaskService } from './task.service';
import { NewProjectDto, UpdateProjectDto } from './dtos/project.dto';
import { ProjectType, StatusType, TaskType } from '@app/data';
import { NewStatusDto, UpdateStatusDto } from './dtos/status.dto';
import { NewTaskDto } from './dtos/task.dto';
import { BoardAggregateDto } from './dtos/aggregate.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller('taskboard')
@ApiTags('taskboard')
export class TaskboardControllerController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly taskService: TaskService,
    private readonly statusService: StatusService,
  ) {}

  @Get('projects')
  async getProjects(): Promise<ProjectType[]> {
    return await this.projectService.getProjects();
  }

  @Get('projects/:id')
  @ApiCreatedResponse({
    isArray: false,
    type: BoardAggregateDto,
  })
  async getProjectById(@Param('id') id: string): Promise<BoardAggregateDto> {
    return await this.projectService.getProjectAggregateById(id);
  }

  @Post('projects')
  async createProject(@Body() data: NewProjectDto): Promise<ProjectType> {
    return await this.projectService.createProject(data);
  }
  @Put('projects/:id')
  async updateProject(@Body() data: UpdateProjectDto): Promise<ProjectType> {
    return await this.projectService.updateProject(data);
  }
  @Delete('projects/:id')
  async deleteProject(@Param('id') id: string): Promise<void> {
    return await this.projectService.deleteProject(id);
  }
  @Get('statuses')
  async getStatuses(): Promise<StatusType[]> {
    return await this.statusService.getStatuses();
  }
  @Post('statuses')
  async createStatus(@Body() data: NewStatusDto): Promise<StatusType> {
    return await this.statusService.createStatus(data);
  }
  @Put('statuses/:id')
  async updateStatus(@Body() data: UpdateStatusDto): Promise<StatusType> {
    return await this.statusService.updateStatus(data);
  }
  @Delete('statuses/:id')
  async deleteStatus(@Param('id') id: string): Promise<void> {
    return await this.statusService.deleteStatus(id);
  }
  @Get('tasks/:projectId')
  async getTasks(@Param('projectId') projectId: string) {
    return await this.taskService.getTasks(projectId);
  }
  @Get('tasks/:projectId/:statusId')
  async getTasksByStatus(
    @Param('projectId') projectId: string,
    @Param('statusId') statusId: string,
  ): Promise<TaskType[]> {
    return await this.taskService.getTasksByStatus(projectId, statusId);
  }
  @Post('tasks')
  async createTask(@Body() data: NewTaskDto): Promise<TaskType> {
    return await this.taskService.createTask(data);
  }
  @Put('tasks/:id')
  async updateTask(@Body() data: TaskType): Promise<TaskType> {
    return await this.taskService.updateTask(data);
  }
  @Delete('tasks/:id')
  async deleteTask(@Param('id') id: string): Promise<void> {
    return await this.taskService.deleteTask(id);
  }
}
