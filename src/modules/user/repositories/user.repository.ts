import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/database/models/user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectConnection() private connection: Sequelize,
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async createUser(
    fullName: string,
    role: string,
    efficiency: number,
  ): Promise<User> {
    try {
      return await this.userModel.create({
        full_name: fullName,
        role: role,
        efficiency: efficiency,
      });
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<User[]> {
    const user = await this.userModel.findAll({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.findAll();

    if (!users) {
      throw new NotFoundException(`Users not found`);
    }

    return users;
  }

  async updateUserById(
    id: number,
    fullName: string,
    role: string,
  ): Promise<User> {
    try {
      const user = await this.userModel.findByPk(id);

      if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
      }

      user.full_name = fullName;
      user.role = role;

      await user.save();

      return user;
    } catch (error) {
      throw error;
    }
  }

  async deleteUsers(): Promise<void> {
    try {
      await this.userModel.destroy({
        where: {},
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteUserById(id: number): Promise<User> {
    try {
      const userToDelete = await this.userModel.findOne({
        where: { id },
      });

      if (!userToDelete) {
        throw new Error(`User with ID ${id} not found.`);
      }

      await this.userModel.destroy({
        where: { id },
      });

      return userToDelete;
    } catch (error) {
      throw error;
    }
  }
}
