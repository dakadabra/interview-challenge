import { Injectable } from '@nestjs/common';
import { ProjectRepo } from './project.repo';
import { NewProjectType, ProjectType } from 'libs/data/src';
import { BoardAggregateDto } from './dtos/aggregate.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepo: ProjectRepo) {}
  async getProjects(): Promise<ProjectType[]> {
    return await this.projectRepo.getProjects();
  }
  async getProjectById(id: string): Promise<ProjectType> {
    return await this.projectRepo.getProjectById(id);
  }
  async getProjectAggregateById(id: string): Promise<BoardAggregateDto> {
    return await this.projectRepo.getProjectAggregateById(id);
  }
  async createProject(project: NewProjectType): Promise<ProjectType> {
    return await this.projectRepo.createProject(project);
  }
  async updateProject(project: ProjectType): Promise<ProjectType> {
    return await this.projectRepo.updateProject(project);
  }
  async deleteProject(id: string): Promise<void> {
    await this.projectRepo.deleteProject(id);
  }
}
