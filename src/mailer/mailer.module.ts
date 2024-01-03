import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';

import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    NestMailerModule.forRoot({
        transport: {
          service: process.env.MAIL_SERVICE,
          // host: process.env.MAIL_HOST,
          // port: parseInt(process.env.MAIL_PORT),
          // secure: false,
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
        },
        // defaults: {
        //   from: process.env.MAIL_SENDER,
        // },
        // template: {
        //   dir: join(__dirname, '/templates/'),
        //   adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        //   options: {
        //     strict: true,
        //   },
        // }
      })
  ],
  controllers: [MailerController],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule { }
