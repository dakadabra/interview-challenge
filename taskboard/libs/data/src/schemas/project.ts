import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { date, index, uuid, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { schema } from './schema';

export const PROJECT = schema.table(
  'project',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name').notNull(),
    description: varchar('description').notNull(),
    createdAt: date('created_at').notNull().defaultNow(),
  },
  (project) => ({
    nameIdx: index('idx_project_name').on(project.name),
  }),
);

export type NewProjectType = InferInsertModel<typeof PROJECT>;
export const NewProjectSchema = createInsertSchema(PROJECT);

export type ProjectType = InferSelectModel<typeof PROJECT>;
export const ProjectSchema = createSelectSchema(PROJECT);
