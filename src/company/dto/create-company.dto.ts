import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDTO {
  @ApiProperty({ description: 'Nome da empresa' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'CNPJ da empresa' })
  @IsNotEmpty()
  cnpj: number;
}
