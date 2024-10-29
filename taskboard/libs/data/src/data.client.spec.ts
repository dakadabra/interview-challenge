const mockMigrate = jest.fn();

import { Test } from '@nestjs/testing';
import dataClient, { DB_CLIENT } from './data.client';
const { useFactory } = dataClient;
import { ConfigModule } from '@nestjs/config';
import config, { DatabaseConfigType } from './data.config';
jest.mock('drizzle-orm/node-postgres/migrator', () => ({ migrate: mockMigrate }));

const mockConfig = {
  POSTGRES_DATABASE_NAME: 'test',
  POSTGRES_HOST: 'localhost',
  POSTGRES_PASSWORD: 'password',
  POSTGRES_PORT: '5432',
  POSTGRES_USER: 'user',
} as DatabaseConfigType;

describe('Data Client', () => {
  it('should create the client and run migrations', async () => {
    const client = await useFactory(mockConfig);
    expect(client).toBeDefined();
  });

  it('injects the config', async () => {
    const module = await Test.createTestingModule({
      imports: [ConfigModule.forFeature(config)],
      providers: [dataClient],
    }).compile();
    const client = module.get(DB_CLIENT);
    expect(client).toBeDefined();
    expect(client._.session.client.options.host).toBe('localhost');
    expect(client._.session.client.options.database).toBe('postgres');
  });
});
