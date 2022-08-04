import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CertificatesDocument = Certificates & Document;

@Schema()
export class Certificates {
  @ApiProperty()
  @Prop()
  name: string;
}

export const CertificatesSchema = SchemaFactory.createForClass(Certificates);
