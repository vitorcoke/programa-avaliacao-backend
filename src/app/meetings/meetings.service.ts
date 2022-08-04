import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMeetingsDto } from './dto/create-meetings.dto';
import { Meetings, MeetingsDocument } from './schema/meetings.schema';

@Injectable()
export class MeetingsService {
  constructor(
    @InjectModel(Meetings.name)
    private readonly meetingsModel: Model<MeetingsDocument>,
  ) {}

  async create(createMeetingsDto: CreateMeetingsDto) {
    try {
      return await this.meetingsModel.create(createMeetingsDto);
    } catch (err) {
      throw new InternalServerErrorException(err.messege);
    }
  }

  async findAll() {
    try {
      return await this.meetingsModel.find();
    } catch (err) {
      throw new InternalServerErrorException(err.messege);
    }
  }

  async findOne(id: string) {
    try {
      return await this.meetingsModel.findOne({
        _id: id,
      });
    } catch (err) {
      throw new InternalServerErrorException(err.messege);
    }
  }

  async delete(id: string) {
    try {
      return await this.meetingsModel.deleteOne({ _id: id });
    } catch (err) {
      throw new InternalServerErrorException(err.messege);
    }
  }
}
