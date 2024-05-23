import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';

import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { PdfService } from 'src/pdf/pdf.service';

@Module({
  imports: [
    NestMailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT),
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    })
  ],
  controllers: [MailerController],
  providers: [MailerService, PdfService],
  exports: [MailerService],
})
export class MailerModule { }
