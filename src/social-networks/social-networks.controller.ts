import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSocialNetworksDto } from './dto/create-social-networks.dto';
import { SocialNetworksService } from './social-networks.service';

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
  })
  @ApiResponse({
    status: 404,
    description: 'Redes Sociais não encontrada',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
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
  })
  @ApiResponse({
    status: 404,
    description: 'Rede Social não encontrada',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
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
  })
  @ApiResponse({
    status: 404,
    description: 'Rede Social não encontrada',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
  })
  @Post()
  async create(@Body() createSocialNetworkDto: CreateSocialNetworksDto) {
    return this.socialNetworksService.create(createSocialNetworkDto);
  }
}
