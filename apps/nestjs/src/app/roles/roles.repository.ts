import { Role, RoleDocument } from '@app/roles/schemas/roles.schema';
import { BaseRepository } from '@common/base/base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class RolesRepository extends BaseRepository {
  constructor(@InjectModel(Role.name) rolesModel: Model<RoleDocument>) {
    super(rolesModel);
  }
}
