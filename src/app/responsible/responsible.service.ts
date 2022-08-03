import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResponsibleDTO } from './dto/create-responsible.dto';
import { Responsible, ResponsibleDocument } from './schema/responsible.schema';

@Injectable()
export class ResponsibleService {
  constructor(
    @InjectModel(Responsible.name)
    private readonly responsibleModel: Model<ResponsibleDocument>,
  ) {}

  async create(responsible: CreateResponsibleDTO) {
    try {
      return this.responsibleModel.create(responsible);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
