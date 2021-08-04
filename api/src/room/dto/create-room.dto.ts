import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export default class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  name: string;

  @IsString()
  @IsOptional()
  @Length(1, 100)
  description: string;

  @IsNumber()
  @Min(2)
  @Max(10)
  maxUserCount: number;
}
