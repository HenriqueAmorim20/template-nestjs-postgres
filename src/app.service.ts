import { Injectable } from '@nestjs/common';

export interface IVersao {
  name: string;
  version: string;
}

@Injectable()
export class AppService {
  getVersao(): IVersao {
    return {
      name: 'APIName',
      version: '1.0.0',
    };
  }
}
