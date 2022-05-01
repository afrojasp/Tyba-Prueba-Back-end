import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  @UseGuards(AuthGuard('local'))
  login(@Req() req: Request) {
    const user = req.user as Usuario;
    return this.authService.generateJWY(user);
  }
}
