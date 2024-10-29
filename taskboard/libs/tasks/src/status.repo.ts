import {
  DataClientType,
  DB_CLIENT,
  NewStatusType,
  STATUS,
  StatusType,
} from '@app/data';
import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';

@Injectable()
export class StatusRepo {
  constructor(@Inject(DB_CLIENT) private readonly dbClient: DataClientType) {}

  async getStatuses(): Promise<StatusType[]> {
    return await this.dbClient.select().from(STATUS);
  }

  async create(data: NewStatusType): Promise<StatusType> {
    const [result] = await this.dbClient
      .insert(STATUS)
      .values(data)
      .returning();
    return result;
  }

  async updateStatus(data: StatusType): Promise<StatusType> {
    const [result] = await this.dbClient
      .update(STATUS)
      .set(data)
      .where(eq(STATUS.id, data.id))
      .returning();
    return result;
  }

  async deleteStatus(id: string): Promise<void> {
    await this.dbClient.delete(STATUS).where(eq(STATUS.id, id));
  }
}
