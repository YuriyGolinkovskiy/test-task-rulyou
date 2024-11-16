import { Module } from '@nestjs/common';
import { HealthCheck } from './healthcheck.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [HealthCheck],
})
export class AppModule {}
