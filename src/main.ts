import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  const config = new DocumentBuilder()

    .setTitle('Movie board')
    .setDescription("James's movie APIs")
    .setVersion('1.0')
    .addTag('Movie Board')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

// DTO는  generics나 interface보단 class를 사용해야 제대로 검증될 수 있음. (nestjs validation)
