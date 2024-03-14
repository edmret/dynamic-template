import { ApiProperty } from '@nestjs/swagger';

export class TemplateDto {
  @ApiProperty({ example: [], description: 'the template structure in rows' })
  structure: any;

  @ApiProperty({
    example: 'Template Name',
    description: 'the name of the template',
  })
  name: string;
}
