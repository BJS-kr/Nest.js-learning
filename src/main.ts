import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();

// DTO는  generics나 interface보단 class를 사용해야 제대로 검증될 수 있음. (nestjs validation)
