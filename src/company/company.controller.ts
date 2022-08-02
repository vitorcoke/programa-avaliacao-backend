import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('Empresas')
@Controller('company')
export class CompanyController {
  constructor(private readonly companiesService: CompanyService) {}

  @ApiOperation({ summary: 'Buscar todas as empresa' })
  @ApiResponse({
    status: 201,
    description: 'Empresas encontradas com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao buscas empresas',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
  })
  @Get()
  async findAll() {
    return await this.companiesService.findAll();
  }

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
  async create(@Body() createCompanyDto: CreateCompanyDTO) {
    return await this.companiesService.create(createCompanyDto);
  }

  @ApiOperation({ summary: 'Atualizar informações da empresa' })
  @ApiResponse({
    status: 201,
    description: 'Empresa atualizada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao atualizar empresa',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdatecompanyDto: UpdateCompanyDto,
  ) {
    return await this.companiesService.update(id, UpdatecompanyDto);
  }
}
