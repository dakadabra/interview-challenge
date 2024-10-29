import { registerAs } from '@nestjs/config';
import { z } from 'zod';

const DatabaseConfigSchema = z.object({
  POSTGRES_HOST: z.string(),
  POSTGRES_PORT: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DATABASE_NAME: z.string(),
  ENV: z.string().default('local'),
});

export type DatabaseConfigType = z.infer<typeof DatabaseConfigSchema>;

export const DataConfig = registerAs('DB_CONFIG', () =>
  DatabaseConfigSchema.parse(process.env),
);
