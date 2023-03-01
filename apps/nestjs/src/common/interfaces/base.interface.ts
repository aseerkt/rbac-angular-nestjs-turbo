import { FilterQuery, SortOrder } from 'mongoose';

export class IRestResponse {
  status: boolean;
  data?: any;
  error?: any;
}

export interface BaseListQueryParams {
  filter?: string;
  sortField?: string;
  sortDirection?: string;
  pageNumber?: string;
  pageSize?: string;
}

export interface BaseListFindParams {
  filter: FilterQuery<any>;
  sort: { [key: string]: SortOrder };
  limit: number;
  skip: number;
}
