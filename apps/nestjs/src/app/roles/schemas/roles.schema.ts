import { SchemaSlugGenerator } from '@common/utils/base.util';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema({ collection: 'roles', timestamps: true })
export class Role {
  @Prop({ type: String, required: true })
  roleName: string;

  @Prop({ type: String, required: true, unique: true })
  roleSlug: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);

RoleSchema.index(
  { roleName: 1 },
  { unique: true, collation: { locale: 'en', strength: 2 } },
);

SchemaSlugGenerator(RoleSchema, 'roleName', 'roleSlug');
