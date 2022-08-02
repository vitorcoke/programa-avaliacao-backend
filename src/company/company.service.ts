import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company, CompanyDocument } from './schema/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private readonly companyModel: Model<CompanyDocument>,
  ) {}

  async create(company: CreateCompanyDTO) {
    try {
      return await this.companyModel.create(company);
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async findAll() {
    try {
      return await this.companyModel.find();
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    const updateCompany = await this.companyModel.findOneAndUpdate(
      { _id: id },
      updateCompanyDto,
      {
        new: true,
      },
    );

    if (!updateCompany) throw new NotFoundException();
    return updateCompany;
  }
}
