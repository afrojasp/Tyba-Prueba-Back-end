import { Injectable, NotFoundException } from '@nestjs/common';

import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto, UpdateUsuarioDto } from '../dtos/usurios.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepo: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usuarioRepo.find();
  }

  async findOne(pUsuario: string) {
    const usuario = await this.usuarioRepo.findOne({
      where: { usuario: pUsuario },
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario o contraseña incorrectos`);
    }
    return usuario;
  }

  async create(data: CreateUsuarioDto) {
    //const newProduct = new Product();
    //newProduct.image = data.image;
    //newProduct.name = data.name;
    //newProduct.description = data.description;
    //newProduct.price = data.price;
    //newProduct.stock = data.stock;
    const newUsuario = this.usuarioRepo.create(data);
    const hashPassword = await bcrypt.hash(newUsuario.password, 10);
    newUsuario.password = hashPassword;
    return this.usuarioRepo.save(newUsuario);
  }

  async update(pUsuario: string, changes: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepo.findOne({
      where: { usuario: pUsuario },
    });
    this.usuarioRepo.merge(usuario, changes);
    return this.usuarioRepo.save(usuario);
  }

  remove(usuario: string) {
    return this.usuarioRepo.delete(usuario);
  }
}
