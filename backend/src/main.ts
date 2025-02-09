import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://humble-superhero-api-q0qc.onrender.com/',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log('Access Point running on http://localhost:3000');
}
bootstrap();
