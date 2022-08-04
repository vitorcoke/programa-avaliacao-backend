import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { GenericExeceptionSwagger } from 'src/helpers/swagger/generic-exeception.swagger';
import { CertificatesService } from './certificates.service';
import { CreateCertificatesDto } from './dto/create-certificates.dto';
import { CreateCertificatesSwagger } from './swagger/create-certificates.swagger';

@ApiTags('Certificados')
@Controller('certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @ApiOperation({ summary: 'Buscar todos certificados' })
  @ApiResponse({
    status: 200,
    description: 'Certificados encontrado com sucesso',
    type: CreateCertificatesSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Certificados não encontrado',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro Interno',
    type: GenericExeceptionSwagger,
  })
  @Get()
  async findAll() {
    return this.certificatesService.findAll();
  }

  @ApiParam({
    description: 'ID do certificado que sera localizada',
    name: 'id',
  })
  @ApiOperation({ summary: 'Buscar certificado por ID' })
  @ApiResponse({
    status: 200,
    description: 'Certificado encontrado com sucesso',
    type: CreateCertificatesSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Certificado não encontrado',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro Interno',
    type: GenericExeceptionSwagger,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.certificatesService.findOne(id);
  }

  @ApiOperation({ summary: 'Criar certificado' })
  @ApiResponse({
    status: 200,
    description: 'Certificado criado com sucesso',
    type: CreateCertificatesSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Certificado não criado',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro Interno',
    type: GenericExeceptionSwagger,
  })
  @Post()
  async create(@Body() createCertificatesDto: CreateCertificatesDto) {
    return this.certificatesService.create(createCertificatesDto);
  }

  @ApiOperation({ summary: 'Deletar certificado' })
  @ApiResponse({
    status: 200,
    description: 'Certificado deletado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Certificado não deletado',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro Interno',
    type: GenericExeceptionSwagger,
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.certificatesService.delete(id);
  }
}
