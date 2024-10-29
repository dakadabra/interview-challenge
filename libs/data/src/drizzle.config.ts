import { Config, defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './libs/data/src/schema.ts',
  out: './libs/data/src/migrations',
  dialect: 'postgresql',
}) satisfies Config;
