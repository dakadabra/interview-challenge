import {
  DataClientType,
  DB_CLIENT,
  NewTaskType,
  TASK,
  TaskType,
} from '@app/data';
import { Inject, Injectable } from '@nestjs/common';
import { and, eq } from 'drizzle-orm';

@Injectable()
export class TaskRepo {
  constructor(@Inject(DB_CLIENT) private readonly dbClient: DataClientType) {}

  async getTasks(projectId: string): Promise<TaskType[]> {
    return await this.dbClient
      .select()
      .from(TASK)
      .where(eq(TASK.projectId, projectId));
  }
  async getTasksByStatus(
    projectId: string,
    statusId: string,
  ): Promise<TaskType[]> {
    return await this.dbClient
      .select()
      .from(TASK)
      .where(and(eq(TASK.statusId, statusId), eq(TASK.projectId, projectId)));
  }
  async deleteTask(id: string): Promise<void> {
    await this.dbClient.delete(TASK).where(eq(TASK.id, id));
  }
  async createTask(task: NewTaskType): Promise<TaskType> {
    const [result] = await this.dbClient.insert(TASK).values(task).returning();
    return result;
  }
  async updateTask(task: TaskType): Promise<TaskType> {
    const [result] = await this.dbClient
      .update(TASK)
      .set(task)
      .where(eq(TASK.id, task.id))
      .returning();
    return result;
  }
}
