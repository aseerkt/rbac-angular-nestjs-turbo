import { handleError, sendErrorResponse } from '@common/utils/rest-api.util';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) =>
        sendErrorResponse(handleError({ errors }, 'Validation failed')),
    }),
  );
  app.setGlobalPrefix('/api/');

  await app.listen(7500);
}
bootstrap();
