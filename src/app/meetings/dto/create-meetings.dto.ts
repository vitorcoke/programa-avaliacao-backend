import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMeetingsDto {
  @ApiProperty({ description: 'Nome da Reunião' })
  @IsNotEmpty()
  name: string;
}
