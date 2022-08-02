import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateResponsibleDTO } from './dto/create-responsible.dto';
import { ResponsibleService } from './responsible.service';

@ApiTags('Responsavel')
@Controller('responsible')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}

  @ApiOperation({ summary: 'Cria um responsavel para empresa' })
  @ApiResponse({
    status: 201,
    description: 'Responsavel criado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Responsavel não encontrado',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno',
  })
  @Post()
  async create(@Body() responsible: CreateResponsibleDTO) {
    return this.responsibleService.create(responsible);
  }
}
