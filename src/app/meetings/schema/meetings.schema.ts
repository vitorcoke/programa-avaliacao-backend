import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type MeetingsDocument = Meetings & Document;

@Schema()
export class Meetings {
  @ApiProperty()
  @Prop({ required: true })
  name: string;
}

export const MeetingsSchema = SchemaFactory.createForClass(Meetings);
