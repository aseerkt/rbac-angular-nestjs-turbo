import { Schema } from 'mongoose';

export const isNumber = (value: string) => !Number.isNaN(Number(value));

export const SchemaSlugGenerator = <MongoSchema extends Schema>(
  schema: MongoSchema,
  input: string,
  target: string,
) => {
  schema.pre('validate', function () {
    console.log({ input, target });
    if (typeof this[input] === 'string') {
      this[target] = this[input].toLowerCase().replace(/\s+/, '-');
    }
  });
};
