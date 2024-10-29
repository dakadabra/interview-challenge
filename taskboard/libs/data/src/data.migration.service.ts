import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import * as path from 'path';

import { DB_CLIENT, DataClientType } from '@app/data';

import { DataConfig, DatabaseConfigType } from './data.config';

@Injectable()
export class MigrationService implements OnModuleInit {
  private readonly logger = new Logger(MigrationService.name);

  constructor(
    @Inject(DB_CLIENT) private readonly dbClient: DataClientType,
    @Inject(DataConfig.KEY) private readonly config: DatabaseConfigType,
  ) {}
  public async migrate(migrationsFolderOverride?: string) {
    const migrationsFolder =
      migrationsFolderOverride ?? path.join(__dirname, './migrations');
    try {
      await migrate(this.dbClient, { migrationsFolder });
    } catch (error) {
      this.logger.error(
        error,
        `Error migrating database, migration directory: ${migrationsFolder}`,
      );
      throw error;
    }
  }
  async onModuleInit() {
    if (this.config.ENV === 'local' || this.config.ENV === 'test') {
      const migrationsFolderOverride = path.join(
        process.cwd(),
        '/libs/data/src/migrations',
      );
      await this.migrate(migrationsFolderOverride);
    }
  }
}
