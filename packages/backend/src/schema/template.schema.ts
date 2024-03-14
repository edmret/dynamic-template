import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type TemplateDocument = Template & Document;
@Schema()
export class Template {
  @Prop({ type: mongoose.Schema.Types.Mixed })
  structure: any;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  creator: string;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
