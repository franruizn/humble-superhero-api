import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
  });
  await app.listen(4000);
  console.log('Access Point running on http://localhost:4000');
}
bootstrap();
