import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import DataClient from './data.client';
import { DataConfig } from './data.config';
import { MigrationService } from './data.migration.service';

@Module({
  imports: [ConfigModule.forFeature(DataConfig)],
  providers: [DataClient, MigrationService],
  exports: [DataClient, MigrationService],
})
export class DataModule {}
