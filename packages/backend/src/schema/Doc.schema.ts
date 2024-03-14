import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type DocDocument = Doc & Document;
@Schema()
export class Doc {
  @Prop({ type: mongoose.Schema.Types.Mixed })
  structure: any;

  @Prop({ required: true })
  creator: string;

  @Prop({ required: true })
  content: string;
}

export const DocSchema = SchemaFactory.createForClass(Doc);
