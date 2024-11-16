import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  process.on('unhandledRejection', (error: any) => {
    console.error({
      msg: 'UnhandledRejection!',
      ogMsg: error?.message,
      error,
    });
  });

  const port = process.env.APP_PORT as string;

  const logger = new Logger();

  const app = await NestFactory.create(AppModule, {
    logger,
  });

  app.enableCors({
    origin: '*',
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    credentials: true,
  });

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     transform: true,
  //   }),
  // );

  //app.useLogger(app.get(Logger));

  await app.listen(port, () => {
    logger.log(`Server started on port = ${port}`);
  });
}

bootstrap();
