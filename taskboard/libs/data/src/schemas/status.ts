import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { uuid, varchar, index } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { schema } from './schema';

export const STATUS = schema.table(
  'status',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name').notNull(),
    description: varchar('description').notNull(),
    color: varchar('color').notNull(),
  },
  (status) => ({
    nameIdx: index('idx_status_name').on(status.name),
  }),
);
export type StatusType = InferSelectModel<typeof STATUS>;
export const NewStatusSchema = createInsertSchema(STATUS);
export const StatusSchema = createSelectSchema(STATUS);
export type NewStatusType = InferInsertModel<typeof STATUS>;
