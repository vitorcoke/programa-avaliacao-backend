import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponsibleSchema, Responsible } from './schema/responsible.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Responsible.name, schema: ResponsibleSchema },
    ]),
  ],
  providers: [ResponsibleService],
  controllers: [ResponsibleController],
})
export class ResponsibleModule {}
