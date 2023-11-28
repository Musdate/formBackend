import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class ComercialReq {

    _id?: string;

    @Prop({ required: true })
    producto: string;

    @Prop({ required: true, default: 0 })
    cantidad: number;
        
    @Prop({ required: false })
    formatoBotella: string;
        
    @Prop({ required: false })
    tipoVino: string;
        
    @Prop({ required: false })
    anioCosecha: string;
    
    @Prop({ required: false })
    cepa: string;
        
    @Prop({ required: false })
    tipoCierre: string;
        
    @Prop({ required: false })
    etiqueta: string;
        
    @Prop({ required: false })
    fechaEnvio: string;
        
    @Prop({ required: false })
    centroCosto: string;
        
    @Prop({ required: false })
    cuentaContable: string;
        
    @Prop({ required: false })
    conceptos: string;
        
    @Prop({ required: false })
    tipoEmbalaje: string;
        
    @Prop({ required: false })
    clienteNombre: string;
        
    @Prop({ required: false })
    clienteFono: string;
    
    @Prop({ required: false })
    clienteEmail: string;
        
    @Prop({ required: false })
    clientePais: string;

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

export const ComercialReqSchema = SchemaFactory.createForClass ( ComercialReq );