import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponsibleSchema } from './schema/responsible.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Responsible', schema: ResponsibleSchema },
    ]),
  ],
  providers: [ResponsibleService],
  controllers: [ResponsibleController],
})
export class ResponsibleModule {}
