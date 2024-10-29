import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataConfig } from './data.config';
import DataClient from './data.client';
import { MigrationService } from './data.migration.service';
@Module({
  imports: [ConfigModule.forFeature(DataConfig)],
  providers: [DataClient, MigrationService],
  exports: [DataClient, MigrationService],
})
export class DataModule {}
