import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { UserController } from './controllers/user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/database/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
