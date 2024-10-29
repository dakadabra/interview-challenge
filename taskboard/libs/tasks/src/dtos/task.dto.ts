import { createZodDto } from '@anatine/zod-nestjs';
import { NewTaskSchema, TaskSchema } from 'libs/data/src';

export class NewTaskDto extends createZodDto(NewTaskSchema) {}
export class UpdateTaskDto extends createZodDto(TaskSchema) {}
