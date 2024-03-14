// repositoryfor doc
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doc, DocDocument } from '../../src/schema/Doc.schema';

@Injectable()
export class DocRepository {
  constructor(@InjectModel(Doc.name) private docModel: Model<DocDocument>) {}

  // create a new doc
  async createDoc(data: any): Promise<Doc> {
    return this.docModel.create(data);
  }

  // find all docs
  async findAllDocs(): Promise<Doc[]> {
    return this.docModel.find().exec();
  }
  // find doc by id
  async findDocById(id: string): Promise<Doc> {
    return this.docModel.findOne({ _id: id }).exec();
  }
}
