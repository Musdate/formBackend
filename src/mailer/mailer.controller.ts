import { Body, Controller, Get } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { InternalReq } from 'src/internal-req/entities/internal-req.entity';
import { GenericReq } from 'src/generic-req/entities/generic-req.entity';
import { ComercialReq } from 'src/comercial-req/entities/comercial-req.entity';

@Controller('mailer')
export class MailerController {

  constructor(
    private readonly mailerService: MailerService
  ) { }

  @Get()
  sendMail(@Body() request: InternalReq | GenericReq | ComercialReq) {
    return this.mailerService.sendMail(request);
  }

}
