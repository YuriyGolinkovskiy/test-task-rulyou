import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserByIdDto {
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @IsNotEmpty()
  @IsString()
  role: string;
}
