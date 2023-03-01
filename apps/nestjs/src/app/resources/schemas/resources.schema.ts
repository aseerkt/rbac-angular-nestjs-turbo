import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'resources', timestamps: true })
export class Resource {
  @Prop({ type: String, required: true, unique: true })
  resourceName: string;

  @Prop({ type: String, required: true, unique: true })
  resourceSlug: string;

  @Prop({ type: [String], required: true })
  actions: string[];
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
