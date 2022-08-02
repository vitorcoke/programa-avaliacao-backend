import { Module } from '@nestjs/common';
import { SocialNetworksService } from './social-networks.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SocialNetworks,
  SocialNetworksSchema,
} from './schema/social-networks.schema';
import { SocialNetworksController } from './social-networks.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SocialNetworks.name,
        schema: SocialNetworksSchema,
      },
    ]),
  ],
  providers: [SocialNetworksService],
  controllers: [SocialNetworksController],
})
export class SocialNetworksModule {}
