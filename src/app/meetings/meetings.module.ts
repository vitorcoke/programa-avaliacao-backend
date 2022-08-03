import { Module } from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { MeetingsController } from './meetings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Meetings, MeetingsSchema } from './schema/meetings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Meetings.name,
        schema: MeetingsSchema,
      },
    ]),
  ],
  providers: [MeetingsService],
  controllers: [MeetingsController],
})
export class MeetingsModule {}
