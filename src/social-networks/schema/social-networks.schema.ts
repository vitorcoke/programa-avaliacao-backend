import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type SocialNetworksDocument = SocialNetworks & Document;

@Schema({ timestamps: true })
export class SocialNetworks {
  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop({ required: true })
  numberoffollowers: number;
}

export const SocialNetworksSchema =
  SchemaFactory.createForClass(SocialNetworks);
