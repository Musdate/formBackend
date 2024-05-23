import { Controller, Post, Body, Param, Res } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { InternalReq } from 'src/internal-req/entities/internal-req.entity';
import { GenericReq } from 'src/generic-req/entities/generic-req.entity';
import { ComercialReq } from 'src/comercial-req/entities/comercial-req.entity';

@Controller('pdf')
export class PdfController {

  constructor (private readonly pdfService: PdfService) { }

  @Post()
  async downloadPDF(@Body() solicitud: InternalReq | GenericReq | ComercialReq, @Res() res): Promise<void> {

    const buffer = await this.pdfService.generatePDF(solicitud);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${solicitud.nombreSolicitud}`,
      'Content-Length': buffer.length
    })

    res.end(buffer);

  }

}
