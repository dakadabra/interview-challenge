import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DatabaseConfigType } from './data.config';
import dataConfig from './data.config';
import { Logger, Provider } from '@nestjs/common';
import * as schema from './schema';

export const DB_CLIENT = Symbol('DB_CLIENT');
const logger = new Logger('DataClient');
const dbLogger = { logQuery: (query: string) => logger.debug(query) };

export type DataClientType = NodePgDatabase<typeof schema>;

export default {
  provide: DB_CLIENT,
  useFactory: async (config: DatabaseConfigType): Promise<DataClientType> => {
    const { POSTGRES_DATABASE_NAME, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER } = config;
    const pool = new Pool({
      database: POSTGRES_DATABASE_NAME,
      host: POSTGRES_HOST,
      password: POSTGRES_PASSWORD,
      port: parseInt(POSTGRES_PORT),
      user: POSTGRES_USER,
      log: logger.log,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });
    pool.on('error', logger.error);
    const db = drizzle(pool, { schema, logger: dbLogger });
    return db;
  },
  inject: [dataConfig.KEY],
} satisfies Provider;
