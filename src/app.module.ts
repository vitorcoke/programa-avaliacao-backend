import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ResponsibleModule } from './responsible/responsible.module';
import { SocialNetworksModule } from './social-networks/social-networks.module';

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
  ],
})
export class AppModule {}
