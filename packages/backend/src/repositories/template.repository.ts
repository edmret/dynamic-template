import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Template, TemplateDocument } from 'src/schema/template.schema';

@Injectable()
export class TemplateRepository {
  constructor(
    @InjectModel(Template.name) private templateModel: Model<TemplateDocument>,
  ) {}

  // create a new user
  async createTemplate(data: any): Promise<Template> {
    return this.templateModel.create(data);
  }

  // find all templates
  async findAllTemplates(): Promise<Template[]> {
    return this.templateModel.find().exec();
  }
  // find template by id
  async findTemplateById(id: string): Promise<Template> {
    return this.templateModel.findOne({ _id: id }).exec();
  }

  // delete template by id
  async deleteTemplateById(id: string): Promise<Template> {
    return this.templateModel.findByIdAndDelete(id).exec();
  }

  // update template by id
  async updateTemplateById(id: string, data: any): Promise<Template> {
    const response = await this.templateModel.aggregate([
      {
        $match: {
          _id: id,
        },
      },
      {
        $set: data,
      },
    ]);

    return response[0];
  }
}
