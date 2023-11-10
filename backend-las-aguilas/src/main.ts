import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
config({ path: '../.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura CORS
  const corsOptions: CorsOptions = {
    origin: ['http://localhost:3000','https://portal-institucional-5edb1.web.app'], 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  app.enableCors(corsOptions);

  // Configura ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // Habilita la conversión implícita
      },
      validationError: {
        target: false, // No mostrar el objeto original en el mensaje de error
      },
    }),
  );

  await app.listen(4000);
  console.log(`Escuchando en el puerto 4000`)
}

bootstrap();
