import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateTransaccionDto } from '../dtos/transacciones.dtos';
import { TransaccionesService } from '../services/transacciones.service';

@Controller('transacciones')
export class TransaccionesController {
  constructor(private transaccionesService: TransaccionesService) {}

  @Get()
  @ApiOperation({ summary: 'Lista de transacciones' })
  getProducts() {
    return this.transaccionesService.findAll();
  }

  @Post()
  create(@Body() payload: CreateTransaccionDto) {
    return this.transaccionesService.create(payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.transaccionesService.remove(+id);
  }
}
