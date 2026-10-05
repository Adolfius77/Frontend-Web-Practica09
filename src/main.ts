import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { DominioExceptionFilter } from './comun/filtros/dominio.filter';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new DominioExceptionFilter());
  
  app.enableCors({
    origin: ["http://localhost:5173", "http://localhost:3001"],
    exposedHeaders: ['Location', 'X-Request-Id'],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
