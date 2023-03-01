import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'permissions', timestamps: true })
export class Permission {
  @Prop({ type: String, required: true })
  resourceSlug: string;

  @Prop({ type: String, required: true })
  roleSlug: string;

  @Prop({ type: Object, required: true })
  actions: Record<string, 1 | 0>;
}

const PermissionSchema = SchemaFactory.createForClass(Permission);

PermissionSchema.index({ roleSlug: 1, resourceSlug: 1 }, { unique: true });

export { PermissionSchema };
