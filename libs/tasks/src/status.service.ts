import { Injectable } from '@nestjs/common';

import { NewStatusType, StatusType } from '@app/data';

import { StatusRepo } from './status.repo';

@Injectable()
export class StatusService {
  constructor(private readonly statusRepo: StatusRepo) {}
  async getStatuses(): Promise<StatusType[]> {
    return await this.statusRepo.getStatuses();
  }
  async createStatus(data: NewStatusType): Promise<StatusType> {
    return await this.statusRepo.create(data);
  }
  async updateStatus(data: StatusType): Promise<StatusType> {
    return await this.statusRepo.updateStatus(data);
  }
  async deleteStatus(id: string): Promise<void> {
    await this.statusRepo.deleteStatus(id);
  }
}
