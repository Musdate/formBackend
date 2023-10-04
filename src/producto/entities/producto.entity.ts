import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Producto {

    // _id: string;

    @Prop({ required: true })
    name: string;
    
    @Prop({ required: true })
    cosecha: string;
    
    @Prop({ required: true })
    formato: string;
    
    @Prop({ required: true })
    tipoBotella: string;
    
    @Prop({ required: true })
    etiqueta: string;

}

export const ProductoSchema = SchemaFactory.createForClass ( Producto );
