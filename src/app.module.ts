import { Module } from '@nestjs/common';
import { CompanyModule } from './app/company/company.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ResponsibleModule } from './app/responsible/responsible.module';
import { SocialNetworksModule } from './app/social-networks/social-networks.module';
import { MeetingsModule } from './app/meetings/meetings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    ),
    CompanyModule,
    ResponsibleModule,
    SocialNetworksModule,
    MeetingsModule,
  ],
})
export class AppModule {}
