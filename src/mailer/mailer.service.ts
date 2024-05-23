import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { PdfService } from 'src/pdf/pdf.service';
import { InternalReq } from 'src/internal-req/entities/internal-req.entity';
import { GenericReq } from 'src/generic-req/entities/generic-req.entity';
import { ComercialReq } from 'src/comercial-req/entities/comercial-req.entity';

const mailList = [
    'fmedina@bphr.cl',
    'mrojas@bphr.cl',
    'asaldias@bphr.cl',
    'gcastro@bphr.cl',
    'rchavez@bphr.cl',
    'vhernandez@bphr.cl',
    'Jhernandez@bphr.cl'
];

@Injectable()
export class MailerService {

    constructor(
        private readonly nestMailerService: NestMailerService,
        private readonly pdfService: PdfService
        
    ) { }

    async sendMail(request: InternalReq | GenericReq | ComercialReq) {
    
        try {

            const pdf = await this.pdfService.generatePDF(request);

            const email = await this.nestMailerService.sendMail({
                from:'muestras@bphr.cl',
                // to: mailList,
                to: 'bastiantroncoso97@gmail.com',
                subject: 'Muestra Baron Philippe de Rothschild',
                //text: '',
                attachments: [
                    {
                      filename: `${request.nombreSolicitud}.pdf`,
                      content: pdf,
                      contentType: 'application/pdf',
                    },
                  ],
            });

            return email;

        } catch (error) {

            console.log('Email error: ', error);

        }
        
    }

}
