import { IsNotEmpty, IsString, Length } from 'class-validator';

export default class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 140)
  content: string;
}
