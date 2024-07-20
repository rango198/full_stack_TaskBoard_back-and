import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as coockieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(coockieParser());
  app.enableCors({
    origin: 'https://full-stack-task-board-front-and.vercel.app',
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  await app.listen(4000);
}
bootstrap();
