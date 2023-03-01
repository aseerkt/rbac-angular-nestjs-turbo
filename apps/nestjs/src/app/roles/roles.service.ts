import { RolesRepository } from '@app/roles/roles.repository';
import { BaseService } from '@common/base/base.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService extends BaseService {
  constructor(private roleRepository: RolesRepository) {
    super('role', roleRepository);
  }
}
