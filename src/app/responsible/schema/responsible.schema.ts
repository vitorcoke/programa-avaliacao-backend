import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ResponsibleDocument = Responsible & Document;
@Schema({ timestamps: true })
export class Responsible {
  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop({ required: true })
  cpf: number;
}

export const ResponsibleSchema = SchemaFactory.createForClass(Responsible);
