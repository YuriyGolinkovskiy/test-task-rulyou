import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseEnv } from './env/database.env';
import { User } from './models/user.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<DatabaseEnv>) => ({
        database: configService.getOrThrow('DB_NAME'),
        username: configService.getOrThrow('DB_USER'),
        password: configService.getOrThrow('DB_PASSWORD'),
        host: configService.getOrThrow('DB_HOST'),
        port: +configService.getOrThrow('DB_PORT'),
        type: 'mysql',
        dialect: 'mysql',
        models: [User],
        logging: false,
        autoLoadModels: true,
        synchronize: false,
      }),

      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
