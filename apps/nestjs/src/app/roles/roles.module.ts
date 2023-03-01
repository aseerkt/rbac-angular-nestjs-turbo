import { RolesController } from '@app/roles/roles.controller';
import { RolesRepository } from '@app/roles/roles.repository';
import { RolesService } from '@app/roles/roles.service';
import { Role, RoleSchema } from '@app/roles/schemas/roles.schema';
import { SchemaSlugGenerator } from '@common/utils/base.util';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Role.name,
        useFactory: () => {
          const schema = RoleSchema;
          SchemaSlugGenerator(schema, 'roleName', 'roleSlug');
          return schema;
        },
      },
    ]),
  ],
  controllers: [RolesController],
  providers: [RolesService, RolesRepository],
})
export class RolesModule {}
