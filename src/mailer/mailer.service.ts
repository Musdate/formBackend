import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailerService {

    constructor(private readonly mailerService: NestMailerService) { }

    async sendMail() {
    
        try {

            const email = await this.mailerService.sendMail({
                from:'musdate01@gmail.com',
                to: 'bastiantroncoso97@gmail.com',
                subject: 'Testing Nest MailerModule',
                text: 'welcome',
                html: '<b>welcome to sending email</b>',
            });

            return email;

        } catch (error) {

            console.log('Email error: ', error);

        }
        
      }

}
