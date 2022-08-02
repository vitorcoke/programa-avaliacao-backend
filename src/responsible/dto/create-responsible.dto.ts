import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateResponsibleDTO {
  @ApiProperty({ description: 'Nome do responsável' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'CPF do responsável' })
  @IsNotEmpty()
  cpf: number;
}
