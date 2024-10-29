import { createZodDto } from '@anatine/zod-nestjs';

import { NewProjectSchema, ProjectSchema } from '@app/data';

export class NewProjectDto extends createZodDto(NewProjectSchema) {}
export class UpdateProjectDto extends createZodDto(ProjectSchema) {}
