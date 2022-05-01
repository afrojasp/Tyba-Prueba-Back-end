import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CreateUsuarioDto } from '../dtos/usurios.dtos';
import { UsuariosService } from '../services/usuarios.service';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get()
  @ApiOperation({ summary: 'Lista de usuarios' })
  getUsuarios() {
    return this.usuariosService.findAll();
  }

  @Get(':usuario')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('usuario') usuario: string) {
    return this.usuariosService.findOne(usuario);
  }

  @Post()
  create(@Body() payload: CreateUsuarioDto) {
    return this.usuariosService.create(payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usuariosService.remove(id);
  }
}
