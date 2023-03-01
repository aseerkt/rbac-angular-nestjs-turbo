import { HttpException, HttpStatus } from '@nestjs/common';

export enum DefaultOperation {
  ADD = 'add',
  LIST = 'list',
  VIEW = 'view',
  EDIT = 'edit',
  DELETE = 'delete',
}

export const defaultOperations = [
  DefaultOperation.ADD,
  DefaultOperation.EDIT,
  DefaultOperation.VIEW,
  DefaultOperation.LIST,
  DefaultOperation.DELETE,
];

export const handleSuccess = (data: any, message: string) => {
  return {
    status: true,
    message,
    data,
  };
};
export const handleError = (error: any, message: string) => {
  return {
    status: false,
    message,
    error,
  };
};

export const sendSuccessResponse = (response: any, status = HttpStatus.OK) => {
  throw new HttpException(response, status);
};

export const sendErrorResponse = (
  response: any,
  status = HttpStatus.BAD_REQUEST,
) => {
  throw new HttpException(response, status);
};
