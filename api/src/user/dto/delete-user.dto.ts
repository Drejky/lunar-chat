import { IsNotEmpty, IsNumber } from 'class-validator';

export default class DeleteUserDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
