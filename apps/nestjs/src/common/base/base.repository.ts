import { BaseListFindParams } from '@common/interfaces/base.interface';
import {
  FilterQuery,
  Model,
  PipelineStage,
  ProjectionType,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';

export abstract class BaseRepository {
  constructor(private model: Model<any>) {}

  create(docs: any[]) {
    return this.model.create(docs);
  }

  findAll(
    findOptions: BaseListFindParams,
    projection?: ProjectionType<any>,
    options?: QueryOptions<any>,
  ) {
    return this.model
      .find(findOptions.filter, projection, options)
      .skip(findOptions.skip)
      .limit(findOptions.limit)
      .sort(findOptions.sort);
  }

  findAllWithAggregate(pipelines: PipelineStage[]) {
    return this.model.aggregate(pipelines);
  }

  updateOne(
    filter: FilterQuery<any>,
    update: UpdateQuery<any>,
    options?: QueryOptions,
  ) {
    return this.model.findOneAndUpdate(filter, update, options);
  }
}
