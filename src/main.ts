import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as coockieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');
  app.use(coockieParser());
  app.enableCors({
    origin: ['https://full-stack-taskboard-back-and.onrender.com/api'],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  await app.listen(4000);
}
bootstrap();
