import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateCompanySwagger } from './swagger/create-company-swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { GenericExeceptionSwagger } from 'src/helpers/swagger/generic-exeception.swagger';
import { UpdateCompanySwagger } from './swagger/update-company-swagger';

@ApiTags('Empresas')
@Controller('company')
export class CompanyController {
  constructor(private readonly companiesService: CompanyService) {}

  @ApiOperation({ summary: 'Buscar todas as empresa' })
  @ApiResponse({
    status: 201,
    description: 'Empresas encontradas com sucesso',
    type: CreateCompanySwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao buscas empresas',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Get()
  async findAll() {
    return await this.companiesService.findAll();
  }

  @ApiOperation({ summary: 'Criar empresa' })
  @ApiResponse({
    status: 201,
    description: 'Empresa criada com sucesso',
    type: UpdateCompanySwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar empresa',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDTO) {
    return await this.companiesService.create(createCompanyDto);
  }

  @ApiOperation({ summary: 'Atualizar informações da empresa' })
  @ApiResponse({
    status: 201,
    description: 'Empresa atualizada com sucesso',
    type: UpdateCompanySwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao atualizar empresa',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @ApiParam({ name: 'id', description: 'ID da empresa que será atualizada' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdatecompanyDto: UpdateCompanyDto,
  ) {
    return await this.companiesService.update(id, UpdatecompanyDto);
  }

  @ApiOperation({ summary: 'Deleter empresa' })
  @ApiResponse({
    status: 204,
    description: 'Empresa atualizada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao atualizar empresa',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @ApiParam({ name: 'id', description: 'ID da empresa que será atualizada' })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.companiesService.delete(id);
  }
}
