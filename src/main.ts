import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const whiteList = [
    'http://localhost:4200',
    'https://solicitudbphr.cl',
    'https://musdate.github.io'
  ];

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: whiteList,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  await app.listen( process.env.PORT ?? 3000 );

}
bootstrap();
