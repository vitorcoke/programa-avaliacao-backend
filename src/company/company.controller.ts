import { Body, Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCompanyDTO } from './dto/create-company.dto';

@ApiTags('Empresas')
@Controller('company')
export class CompanyController {
  constructor(private readonly companiesService: CompanyService) {}

  @ApiOperation({ summary: 'Criar empresa' })
  @ApiResponse({
    status: 201,
    description: 'Empresa criada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar empresa',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
  })
  @Post()
  async create(@Body() company: CreateCompanyDTO) {
    return await this.companiesService.create(company);
  }
}
