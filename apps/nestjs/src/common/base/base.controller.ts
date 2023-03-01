import { IRestResponse } from '@common/interfaces/base.interface';
import {
  sendErrorResponse,
  sendSuccessResponse,
} from '@common/utils/rest-api.util';
import { HttpStatus } from '@nestjs/common';
import { BaseService } from './base.service';

export abstract class BaseController {
  constructor(private baseService: BaseService) {}

  handleResponse(response: IRestResponse, successStatusCode = HttpStatus.OK) {
    if (response.status) sendSuccessResponse(response, successStatusCode);
    else sendErrorResponse(response);
  }
}
