import { BaseRepository } from '@common/base/base.repository';
import {
  BaseListFindParams,
  BaseListQueryParams,
} from '@common/interfaces/base.interface';
import { isNumber } from '@common/utils/base.util';
import { SortOrder } from 'mongoose';
import {
  DefaultOperation,
  defaultOperations,
  handleError,
  handleSuccess,
} from '../utils/rest-api.util';

export abstract class BaseService {
  actionSuccessMessages!: Record<DefaultOperation, string>;
  actionErrorMessages!: Record<DefaultOperation, string>;

  constructor(private moduleName: string, private repository: BaseRepository) {}

  private setOperationMessagesForModule() {
    defaultOperations.forEach((operation) => {
      this.actionSuccessMessages = {
        [operation]: ``,
      };
    });
  }

  private handleSuccess(result: any, message: string) {
    return handleSuccess(result, message);
  }

  private handleError(error: any, message: string) {
    return handleError(error, message);
  }

  getFindAllQueryOptions(queryParams: BaseListQueryParams): BaseListFindParams {
    const { filter, sortDirection, sortField, pageNumber, pageSize } =
      queryParams;

    const filterQuery = filter ? JSON.parse(filter) : {};
    const limit = isNumber(pageSize) ? 10 : +pageSize;
    const skip = ((isNumber(pageNumber) ? 1 : +pageNumber) - 1) * limit;
    const sort = {
      [sortField || '_id']: isNumber(sortDirection)
        ? -1
        : (+sortDirection as SortOrder),
    };
    return {
      filter: filterQuery,
      skip,
      limit,
      sort,
    };
  }

  async create(params: any) {
    try {
      const res = await this.repository.create(params);
      return this.handleSuccess(res, this.actionSuccessMessages.add);
    } catch (error) {
      return this.handleError(error, this.actionErrorMessages.add);
    }
  }

  async findAll(params: any) {
    try {
      const findOptions = this.getFindAllQueryOptions(params);
      const res = await this.repository.findAll(findOptions);
      return this.handleSuccess(res, this.actionSuccessMessages.list);
    } catch (error) {
      return this.handleError(error, this.actionErrorMessages.list);
    }
  }
}
