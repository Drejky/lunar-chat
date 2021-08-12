import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export default class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  tripcode?: string;

  @IsString()
  icon: string;
}
