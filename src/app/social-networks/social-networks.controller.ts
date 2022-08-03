import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { GenericExeceptionSwagger } from 'src/helpers/swagger/generic-exeception.swagger';
import { CreateSocialNetworksDto } from './dto/create-social-networks.dto';
import { SocialNetworksService } from './social-networks.service';
import { CreateSocialNetworksSwagger } from './swagger/create-social-networks.swagger';

@ApiTags('Rede Socail')
@Controller('social-networks')
export class SocialNetworksController {
  constructor(private readonly socialNetworksService: SocialNetworksService) {}

  @ApiOperation({
    summary: 'Buscar Redes Sociais',
  })
  @ApiResponse({
    status: 201,
    description: 'Redes Sociais encontrada com sucesso',
    type: CreateSocialNetworksSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Redes Sociais não encontrada',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Get()
  async findAll() {
    return this.socialNetworksService.findAll();
  }

  @ApiOperation({
    summary: 'Buscar Rede Social por ID',
  })
  @ApiResponse({
    status: 201,
    description: 'Rede Social encontrada com sucesso',
    type: CreateSocialNetworksSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Rede Social não encontrada',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @ApiParam({
    name: 'id',
    description: 'ID da rede social que será localizada',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.socialNetworksService.findOne(id);
  }

  @ApiOperation({
    summary: 'Cria uma Rede Social',
  })
  @ApiResponse({
    status: 201,
    description: 'Rede Social criada com sucesso',
    type: CreateSocialNetworksSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Rede Social não encontrada',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
    type: GenericExeceptionSwagger,
  })
  @Post()
  async create(@Body() createSocialNetworkDto: CreateSocialNetworksDto) {
    return this.socialNetworksService.create(createSocialNetworkDto);
  }
}
