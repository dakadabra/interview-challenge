import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

import { TaskSchema } from '@app/data';

export const schema = z.object({
  name: z.string(),
  columns: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      tasks: z.array(TaskSchema),
    }),
  ),
});
export class BoardAggregateDto extends createZodDto(schema) {}
