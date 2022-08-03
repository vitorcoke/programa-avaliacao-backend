import { ApiProperty } from '@nestjs/swagger';

export class GenericExeceptionSwagger {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  messege: string;
}
