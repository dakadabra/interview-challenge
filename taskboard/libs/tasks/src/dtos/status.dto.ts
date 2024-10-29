import { createZodDto } from '@anatine/zod-nestjs';
import { NewStatusSchema, StatusSchema } from '@app/data';

export class NewStatusDto extends createZodDto(NewStatusSchema) {}
export class UpdateStatusDto extends createZodDto(StatusSchema) {}
