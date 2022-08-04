import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { GenericExeceptionSwagger } from 'src/helpers/swagger/generic-exeception.swagger';
import { CreateResponsibleDTO } from './dto/create-responsible.dto';
import { ResponsibleService } from './responsible.service';
import { CreateResponsibleSwagger } from './swagger/create-responsible.swagger';

@ApiTags('Responsavel')
@Controller('responsible')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}

  @ApiOperation({ summary: 'Buscar todos responsavel' })
  @ApiResponse({
    status: 201,
    description: 'Responsaveis encontrado com sucesso',
    type: CreateResponsibleSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Responsaveis não encontrado',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Get()
  async findAll() {
    return this.responsibleService.findAll();
  }

  @ApiOperation({ summary: 'Buscar responsavel por ID' })
  @ApiResponse({
    status: 201,
    description: 'Responsavel encontrado com sucesso',
    type: CreateResponsibleSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Responsavel não encontrado',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.responsibleService.findOne(id);
  }

  @ApiOperation({ summary: 'Cria um responsavel' })
  @ApiResponse({
    status: 201,
    description: 'Responsavel criado com sucesso',
    type: CreateResponsibleSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Responsavel não encontrado',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Post()
  async create(@Body() responsible: CreateResponsibleDTO) {
    return this.responsibleService.create(responsible);
  }

  @ApiOperation({ summary: 'Deletar um responsavel' })
  @ApiResponse({
    status: 201,
    description: 'Responsavel deletado com sucesso',
    type: CreateResponsibleSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Responsavel não encontrado',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.responsibleService.delete(id);
  }
}
