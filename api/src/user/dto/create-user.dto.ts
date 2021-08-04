import { IsString, IsNotEmpty, IsNumber, isString } from 'class-validator';

export default class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  tripcode?: string;

  @IsString()
  icon: string;
}
