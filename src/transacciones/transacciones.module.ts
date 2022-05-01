import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransaccionesController } from './controller/transacciones.controller';
import { TransaccionesService } from './services/transacciones.service';
import { Transaccion } from './entities/transacciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaccion])],
  controllers: [TransaccionesController],
  providers: [TransaccionesService],
  exports: [TransaccionesService],
})
export class TransaccionesModule {}
