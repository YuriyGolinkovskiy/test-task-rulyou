import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class HealthCheck {
  @Get('/healthcheck')
  check(@Res() res: Response) {
    return res.send({ status: HttpStatus.OK });
  }
}
