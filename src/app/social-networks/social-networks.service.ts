import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSocialNetworksDto } from './dto/create-social-networks.dto';
import {
  SocialNetworks,
  SocialNetworksDocument,
} from './schema/social-networks.schema';

@Injectable()
export class SocialNetworksService {
  constructor(
    @InjectModel(SocialNetworks.name)
    private readonly socialNetworksmodel: Model<SocialNetworksDocument>,
  ) {}

  async findAll() {
    try {
      return await this.socialNetworksmodel.find();
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async findOne(id: string) {
    try {
      return await this.socialNetworksmodel.findOne({
        _id: id,
      });
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async create(createSocialNetworksDto: CreateSocialNetworksDto) {
    try {
      return await this.socialNetworksmodel.create(createSocialNetworksDto);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
