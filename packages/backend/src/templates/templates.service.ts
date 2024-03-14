import { Injectable } from '@nestjs/common';
import { TemplateRepository } from 'src/repositories/template.repository';

@Injectable()
export class TemplatesService {
  constructor(private templateRepository: TemplateRepository) {}
  // create a new template
  async createTemplate(data: any) {
    return this.templateRepository.createTemplate(data);
  }

  // find all templates
  async findAllTemplates() {
    return this.templateRepository.findAllTemplates();
  }
  // find template by id
  async findTemplateById(id: string) {
    return this.templateRepository.findTemplateById(id);
  }

  // delete template by id
  async deleteTemplateById(id: string) {
    return this.templateRepository.deleteTemplateById(id);
  }

  // update template by id
  async updateTemplateById(id: string, data: any) {
    return this.templateRepository.updateTemplateById(id, {
      name: data.name,
      structure: data.structure,
    });
  }
}
