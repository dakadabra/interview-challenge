import { createZodDto } from '@anatine/zod-nestjs';
import { NewStatusSchema, StatusSchema } from 'libs/data/src';

export class NewStatusDto extends createZodDto(NewStatusSchema) {}
export class UpdateStatusDto extends createZodDto(StatusSchema) {}
