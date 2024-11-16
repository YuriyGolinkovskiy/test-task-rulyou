import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';
import { IUserCreateResponse } from '../interfaces/user-create-response.interface';
import { IFailedResponse } from '../interfaces/failed-response.interface';
import { returnFailedResponse } from 'src/globals/errors/return-failed-response';
import { UpdateUserByIdDto } from '../dto/update-user-by-id.dto';
import { IUserGetResponse } from '../interfaces/user-get-response.interface';
import { IUserUpdateResponse } from '../interfaces/user-update-response.interface';
import { IUserDeleteResponse } from '../interfaces/user-delete-response.interface';
import { IUsersDeleteResponse } from '../interfaces/users-delete-response.interface';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(
    @Body() dto: CreateUserDto,
  ): Promise<IUserCreateResponse | IFailedResponse> {
    try {
      const user = await this.userService.createUser(dto);
      return {
        success: true,
        result: {
          id: user.id,
        },
      };
    } catch (error) {
      return returnFailedResponse(error);
    }
  }

  @Get('get')
  async getUser(): Promise<IUserGetResponse | IFailedResponse> {
    try {
      const user = await this.userService.getUsers();
      return {
        success: true,
        result: { users: user },
      };
    } catch (error) {
      return returnFailedResponse(error);
    }
  }

  @Get('get/:user_id')
  async getUserById(
    @Param('user_id') userId: number,
  ): Promise<IUserGetResponse | IFailedResponse> {
    try {
      const user = await this.userService.getUserById(userId);
      return {
        success: true,
        result: { users: user },
      };
    } catch (error) {
      return returnFailedResponse(error);
    }
  }

  @Patch('update/:user_id')
  async updateUserById(
    @Param('user_id') userId: number,
    @Body() dto: UpdateUserByIdDto,
  ): Promise<IUserUpdateResponse | IFailedResponse> {
    try {
      const user = await this.userService.updateUserById(userId, dto);
      return {
        success: true,
        result: user,
      };
    } catch (error) {
      return returnFailedResponse(error);
    }
  }

  @Delete('delete')
  async deleteUser(): Promise<IUsersDeleteResponse | IFailedResponse> {
    try {
      await this.userService.deleteUsers();
      return {
        success: true,
      };
    } catch (error) {
      return returnFailedResponse(error);
    }
  }

  @Delete('delete/:user_id')
  async deleteUserById(
    @Param('user_id') userId: number,
  ): Promise<IUserDeleteResponse | IFailedResponse> {
    try {
      const user = await this.userService.deleteUserById(userId);
      return {
        success: true,
        result: user,
      };
    } catch (error) {
      return returnFailedResponse(error);
    }
  }
}
