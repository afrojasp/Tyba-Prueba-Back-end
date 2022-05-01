import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('restaurantes')
  newEndpoint() {
    return {
      response:
        'Se supone debo mostrar los restaurantes cercanos a la ciudad que entre como parametro',
    };
  }
}
