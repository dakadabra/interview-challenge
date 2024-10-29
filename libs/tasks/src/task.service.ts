import { Injectable } from '@nestjs/common';

import { NewTaskType, TaskType } from '@app/data';

import { TaskRepo } from './task.repo';

@Injectable()
export class TaskService {
  constructor(private readonly projectRepo: TaskRepo) {}
  async getTasksByStatus(projectId: string, statusId: string) {
    return await this.projectRepo.getTasksByStatus(projectId, statusId);
  }
  async getTasks(id: string): Promise<TaskType[]> {
    return await this.projectRepo.getTasks(id);
  }
  async deleteTask(id: string): Promise<void> {
    await this.projectRepo.deleteTask(id);
  }
  async createTask(task: NewTaskType): Promise<TaskType> {
    return await this.projectRepo.createTask(task);
  }
  async updateTask(task: TaskType): Promise<TaskType> {
    return await this.projectRepo.updateTask(task);
  }
}
