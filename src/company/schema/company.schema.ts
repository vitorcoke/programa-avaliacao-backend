import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {
  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop({ required: true })
  cnpj: number;

  @ApiPropertyOptional()
  meetings: string[];

  @ApiPropertyOptional()
  certificates: string[];

  @ApiPropertyOptional()
  score: number;

  @ApiPropertyOptional()
  qualification: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
