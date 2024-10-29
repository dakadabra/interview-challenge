import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { index, uuid, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { PROJECT } from './project';
import { schema } from './schema';
import { STATUS } from './status';

export const TASK = schema.table(
  'task',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    title: varchar('title').notNull(),
    description: varchar('description').notNull(),
    statusId: uuid('status_id')
      .references(() => STATUS.id, { onDelete: 'cascade' })
      .notNull(),
    projectId: uuid('project_id')
      .references(() => PROJECT.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (task) => ({
    statusIdx: index('idx_task_status').on(task.statusId),
    projectIdx: index('idx_task_project').on(task.projectId),
  }),
);

export type NewTaskType = InferInsertModel<typeof TASK>;
export const NewTaskSchema = createInsertSchema(TASK);

export type TaskType = InferSelectModel<typeof TASK>;
export const TaskSchema = createSelectSchema(TASK);
