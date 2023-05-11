import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const { NODE_ENV, PORT, BASE_URL } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT || 4000);
}
bootstrap().then(() => console.info(`
WELCOME TO Task Management ${NODE_ENV.toUpperCase()}
SERVER RUN PORT: ${PORT}
BASE API URL: ${BASE_URL} `));
