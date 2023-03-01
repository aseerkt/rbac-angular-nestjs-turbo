import { CreateRoleDto } from '@app/roles/dto/create-role.dto';
import { RolesService } from '@app/roles/roles.service';
import { BaseController } from '@common/base/base.controller';
import { Body, Controller, Get, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('roles')
export class RolesController extends BaseController {
  constructor(private rolesService: RolesService) {
    super(rolesService);
  }

  @Post()
  async createRole(@Body() body: CreateRoleDto) {
    console.log(body);
    const result = await this.rolesService.create(body);
    this.handleResponse(result, HttpStatus.CREATED);
  }

  @Get()
  async listRoles(@Req() request: Request) {
    const result = await this.rolesService.findAll(request.query);
    this.handleResponse(result);
  }
}
