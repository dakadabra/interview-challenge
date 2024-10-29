import { createZodDto } from '@anatine/zod-nestjs';
import { NewProjectSchema, ProjectSchema } from 'libs/data/src';


export class NewProjectDto extends createZodDto(NewProjectSchema) {}
export class UpdateProjectDto extends createZodDto(ProjectSchema) {}
