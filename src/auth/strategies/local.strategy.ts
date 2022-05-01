import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'usuario',
      passwordField: 'password',
    });
  }

  async validate(usuario: string, password: string) {
    const user = await this.authService.validateUser(usuario, password);
    if (!user) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }
    return user;
  }
}
