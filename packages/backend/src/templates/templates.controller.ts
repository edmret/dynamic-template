import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { TemplateDto } from 'src/dto/template.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Template')
@ApiBearerAuth('access-token')
@Controller('templates')
export class TemplatesController {
  constructor(private templateService: TemplatesService) {}

  @ApiOperation({
    summary: 'Add template',
    description: 'Add new template',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Template created',
    type: TemplateDto,
  })
  @ApiBody({
    type: TemplateDto,
    description: 'The JSON of the template to create',
  })
  @Post()
  async createTemplate(@Request() req) {
    return this.templateService.createTemplate({
      ...req.body,
      creator: req.user.userId,
    });
  }

  @ApiOperation({
    summary: 'Get all templates',
    description: 'Get all templates',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All templates',
    type: TemplateDto,
    isArray: true,
  })
  @Get()
  async findAllTemplates() {
    return this.templateService.findAllTemplates();
  }

  @ApiOperation({
    summary: 'Get template by id',
    description: 'Get template by id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Template',
    type: TemplateDto,
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'string',
  })
  @Get(':id')
  async findTemplateById(@Param('id') id: string) {
    return this.templateService.findTemplateById(id);
  }

  @ApiOperation({
    summary: 'Delete template',
    description: 'Delete template by id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Template deleted',
    type: TemplateDto,
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'string',
  })
  @Delete(':id')
  async deleteTemplateById(@Param('id') id: string) {
    return this.templateService.deleteTemplateById(id);
  }

  @ApiOperation({
    summary: 'Update template',
    description: 'Update template by id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Template updated',
    type: TemplateDto,
  })
  @ApiBody({
    type: TemplateDto,
    description: 'The JSON of the template to update',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: 'string',
  })
  @Put(':id')
  async updateTemplateById(@Param('id') id: string, @Request() req) {
    console.log(req.body);
    return this.templateService.updateTemplateById(id, req.body);
  }
}
