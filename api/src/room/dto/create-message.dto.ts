import { IsNotEmpty, IsString, Length } from 'class-validator';

export default class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  content: string;
}
