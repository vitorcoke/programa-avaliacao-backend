import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCertificatesDto } from './dto/create-certificates.dto';
import {
  Certificates,
  CertificatesDocument,
} from './schema/certificates.schema';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectModel(Certificates.name)
    private readonly certificatesModel: Model<CertificatesDocument>,
  ) {}

  async findAll() {
    try {
      return await this.certificatesModel.find();
    } catch (err) {
      throw new InternalServerErrorException(err.messege);
    }
  }

  async findOne(id: string) {
    try {
      return await this.certificatesModel.findOne({
        _id: id,
      });
    } catch (err) {
      throw new InternalServerErrorException(err.messege);
    }
  }

  async create(createCertificatesDto: CreateCertificatesDto) {
    try {
      return await this.certificatesModel.create(createCertificatesDto);
    } catch (err) {
      throw new InternalServerErrorException(err.messege);
    }
  }
}
