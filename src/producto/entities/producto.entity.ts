import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Producto {

    _id?: string;

    @Prop({ required: true })
    producto: string;
    
    @Prop({ required: true })
    cantidad: number;
    
    @Prop({ required: true })
    formatoBotella: string;
    
    @Prop({ required: true })
    tipoVino: string;

    @Prop({ required: true })
    anioCosecha: string;

    @Prop({ required: true })
    cepa: string;

    @Prop({ required: true })
    tipoCierre: string;
    
    @Prop({ required: true })
    etiqueta: string;
}

export const ProductoSchema = SchemaFactory.createForClass ( Producto );
