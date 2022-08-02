import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSocialNetworksDto {
  @ApiProperty({ description: 'Nome da rede social' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Número de seguidores' })
  @IsNotEmpty()
  numberoffollowers: number;
}
