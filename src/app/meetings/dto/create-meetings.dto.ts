import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMeetingsDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
