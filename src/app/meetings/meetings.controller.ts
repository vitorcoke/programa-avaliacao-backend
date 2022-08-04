import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { GenericExeceptionSwagger } from 'src/helpers/swagger/generic-exeception.swagger';
import { CreateMeetingsDto } from './dto/create-meetings.dto';
import { MeetingsService } from './meetings.service';
import { CreateMeetingsSwagger } from './swagger/create-meetings.swagger';

@ApiTags('Reuniões')
@Controller('meetings')
export class MeetingsController {
  constructor(private readonly meetingsService: MeetingsService) {}

  @ApiOperation({ summary: 'Busca todas as reuniões' })
  @ApiResponse({
    status: 200,
    description: 'Reuniões encontrada com sucesso',
    type: CreateMeetingsSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao buscar reuniões',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Get()
  async findAll() {
    return this.meetingsService.findAll();
  }

  @ApiOperation({ summary: 'Busca reunião por ID' })
  @ApiResponse({
    status: 200,
    description: 'Reunião encontrada com sucesso',
    type: CreateMeetingsSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao buscar Reunião',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.meetingsService.findOne(id);
  }

  @ApiOperation({ summary: 'Criar reunião' })
  @ApiResponse({
    status: 201,
    description: 'Reunião criada com sucesso',
    type: CreateMeetingsSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar reunião',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Post()
  async create(@Body() createMeetingsDto: CreateMeetingsDto) {
    return this.meetingsService.create(createMeetingsDto);
  }

  @ApiOperation({ summary: 'Deletar reunião' })
  @ApiResponse({
    status: 201,
    description: 'Reunião deletada com sucesso',
    type: CreateMeetingsSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao deletar reunião',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.meetingsService.delete(id);
  }
}
