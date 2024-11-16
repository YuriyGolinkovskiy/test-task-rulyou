import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from 'src/database/models/user.model';
import { UpdateUserByIdDto } from '../dto/update-user-by-id.dto';

@Injectable()
export class UserService {
  private logger: Logger = new Logger(UserService.name);

  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    try {
      return await this.userRepository.createUser(
        dto.full_name,
        dto.role,
        dto.efficiency,
      );
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      return await this.userRepository.findAll();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async getUserById(id: number): Promise<User[]> {
    try {
      return await this.userRepository.findById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async updateUserById(id: number, dto: UpdateUserByIdDto) {
    try {
      return await this.userRepository.updateUserById(
        id,
        dto.full_name,
        dto.role,
      );
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async deleteUsers(): Promise<void> {
    try {
      await this.userRepository.deleteUsers();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async deleteUserById(id: number): Promise<User> {
    try {
      return await this.userRepository.deleteUserById(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
