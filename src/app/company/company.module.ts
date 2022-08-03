import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schema/company.schema';
import { CompanyController } from './company.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
  ],
  providers: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
