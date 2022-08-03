import { ApiProperty } from '@nestjs/swagger';

export class BadRequestSwagger {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  messege: string[];

  @ApiProperty()
  error: string;
}
