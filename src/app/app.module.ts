import { Module } from '@nestjs/common';
import { HealthCheck } from './healthcheck.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
  ],
  controllers: [HealthCheck],
})
export class AppModule {}
