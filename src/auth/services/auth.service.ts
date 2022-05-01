import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/services/usuarios.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Token } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validateUser(usuario: string, password: string) {
    const user = await this.usersService.findOne(usuario);
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return user;
      }
    }
    return null;
  }

  generateJWY(user: Usuario) {
    const payload: Token = { role: 'admin', sub: user.usuario };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
