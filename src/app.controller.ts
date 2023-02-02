import { Controller, Get } from '@nestjs/common';

import { AppService, IVersao } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getVersao(): IVersao {
    return this.appService.getVersao();
  }
}
