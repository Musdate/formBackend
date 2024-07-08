import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Producto } from "src/producto/entities/producto.entity";

@Schema()
export class InternalReq {

    _id?: string;

    @Prop({ required: true })
    nombreSolicitud: string;

    @Prop({ required: true })
    productos: Producto[];

    @Prop({ required: false })
    solicitante: string;

    @Prop({ required: false })
    fechaEnvio: string;
        
    @Prop({ required: false })
    centroCosto: string;
        
    @Prop({ required: false })
    cuentaContable: string;
        
    @Prop({ required: false })
    conceptos: string;
        
    @Prop({ required: false })
    clienteNombre: string;
        
    @Prop({ required: false })
    clienteFono: string;
    
    @Prop({ required: false })
    clienteEmail: string;

    @Prop({ required: false })
    clienteDireccion: string;
        
    @Prop({ required: false })
    despachoTransporte: string;
        
    @Prop({ required: false })
    despachoRetira: string;
        
    @Prop({ required: false })
    despachoAwb: string;
        
    @Prop({ required: false })
    despachoCosto: number;
}

export const InternalReqSchema = SchemaFactory.createForClass ( InternalReq );