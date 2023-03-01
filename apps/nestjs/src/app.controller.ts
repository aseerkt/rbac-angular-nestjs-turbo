import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  healthCcheck() {
    return { message: 'All good and fine' };
  }
}
