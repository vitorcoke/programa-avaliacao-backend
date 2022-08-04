import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCertificatesDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
