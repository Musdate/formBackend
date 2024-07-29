import { Injectable } from '@nestjs/common';
import { InternalReq } from 'src/internal-req/entities/internal-req.entity';
import * as fs from 'fs';
import { GenericReq } from 'src/generic-req/entities/generic-req.entity';
import { ComercialReq } from 'src/comercial-req/entities/comercial-req.entity';

@Injectable()
export class PdfService {

  async generatePDF(solicitud: InternalReq | GenericReq | ComercialReq): Promise<Buffer> {
    const PDFDocument = require('pdfkit');
    const pdfBuffer: Buffer = await new Promise( resolve => {
        const doc = new PDFDocument({
            size: 'LETTER',
            bufferPages: true
        })

        const stream = fs.createWriteStream(solicitud.nombreSolicitud);
        doc.pipe(stream);

        //BODY
        doc.font('Helvetica-Bold').fontSize(22).text(solicitud.nombreSolicitud);
        doc.fontSize(12);
        doc.moveDown();

        for (const producto of solicitud.productos) {
          doc.font('Helvetica-Bold').text('Producto / Marca: ', { continued: true }).font('Helvetica').text(producto.producto || ' ');
          doc.font('Helvetica-Bold').text('Cantidad: ', { continued: true }).font('Helvetica').text(producto.cantidad || ' ');
          doc.font('Helvetica-Bold').text('Formato de Botella: ', { continued: true }).font('Helvetica').text(producto.formatoBotella || ' ');
          doc.font('Helvetica-Bold').text('Tipo de Vino: ', { continued: true }).font('Helvetica').text(producto.tipoVino || ' ');
          doc.font('Helvetica-Bold').text('Año Cosecha: ', { continued: true }).font('Helvetica').text(producto.anioCosecha || ' ');
          doc.font('Helvetica-Bold').text('Cepa: ', { continued: true }).font('Helvetica').text(producto.cepa || ' ');
          doc.font('Helvetica-Bold').text('Tipo de Cierre: ', { continued: true }).font('Helvetica').text(producto.tipoCierre || ' ');
          doc.font('Helvetica-Bold').text('Etiqueta / Contra etiqueta: ', { continued: true }).font('Helvetica').text(producto.etiqueta || ' ');
          doc.moveDown();
        }

        doc.font('Helvetica-Bold').text('Solicitante: ', { continued: true }).font('Helvetica').text(solicitud.solicitante || ' ');        
        doc.font('Helvetica-Bold').text('Fecha de envío: ', { continued: true }).font('Helvetica').text(solicitud.fechaEnvio || ' ');        
        doc.font('Helvetica-Bold').text('Centro de costo (C.C): ', { continued: true }).font('Helvetica').text(solicitud.centroCosto || ' ');        
        doc.font('Helvetica-Bold').text('Cuenta Contable (CTA): ', { continued: true }).font('Helvetica').text(solicitud.cuentaContable || ' ');        
        doc.font('Helvetica-Bold').text('Conceptos: ', { continued: true }).font('Helvetica').text(solicitud.conceptos || ' '); 

        if ('tipoEmbalaje' in solicitud) {
          doc.font('Helvetica-Bold').text('Tipo de Embalaje: ', { continued: true }).font('Helvetica').text(solicitud.tipoEmbalaje || ' ');
        }
        
        doc.font('Helvetica-Bold').text('Nombre / Razón Social: ', { continued: true }).font('Helvetica').text(solicitud.clienteNombre || ' ');        
        doc.font('Helvetica-Bold').text('Fono: ', { continued: true }).font('Helvetica').text(solicitud.clienteFono || ' ');        
        doc.font('Helvetica-Bold').text('Email: ', { continued: true }).font('Helvetica').text(solicitud.clienteEmail || ' ');   
         
        if ('clientePais' in solicitud) {
          doc.font('Helvetica-Bold').text('País: ', { continued: true }).font('Helvetica').text(solicitud.clientePais || ' ');
        }

        doc.font('Helvetica-Bold').text('Dirección: ', { continued: true }).font('Helvetica').text(solicitud.clienteDireccion || ' ');        
        doc.font('Helvetica-Bold').text('Transporte / Despacho: ', { continued: true }).font('Helvetica').text(solicitud.despachoTransporte || ' ');        
        doc.font('Helvetica-Bold').text('Despachador: ', { continued: true }).font('Helvetica').text(solicitud.despachoRetira || ' ');        
        doc.font('Helvetica-Bold').text('AWB#: ', { continued: true }).font('Helvetica').text(solicitud.despachoAwb || ' ');        
        doc.font('Helvetica-Bold').text('Costo de Envío: $ ', { continued: true }).font('Helvetica').text(solicitud.despachoCosto || ' ');
        //BODY

        const buffer = []
        doc.on('data', buffer.push.bind(buffer))
        doc.on('end', () => {
            const data = Buffer.concat(buffer)
            resolve(data)
        })
        doc.end()
    })

    return pdfBuffer;
  }

}
