import { Injectable } from '@nestjs/common';

import { Transaccion } from '../entities/transacciones.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransaccionDto } from '../dtos/transacciones.dtos';

@Injectable()
export class TransaccionesService {
  constructor(
    @InjectRepository(Transaccion)
    private transaccionesRepo: Repository<Transaccion>,
  ) {}

  findAll() {
    return this.transaccionesRepo.find();
  }

  async create(data: CreateTransaccionDto) {
    const newTransaccion = await this.transaccionesRepo.create(data);
    return this.transaccionesRepo.save(newTransaccion);
  }

  remove(id: number) {
    return this.transaccionesRepo.delete(id);
  }
}
