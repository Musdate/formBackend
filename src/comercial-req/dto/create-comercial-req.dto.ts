import { IsArray, IsEmail, IsInt, IsString, MinLength } from "class-validator";
import { Producto } from "src/producto/entities/producto.entity";

export class CreateComercialReqDto {

    @IsString()
    nombreSolicitud: string;

    @IsArray()
    productos: Producto[];
    
    @IsString()
    fechaEnvio: string;
    
    @IsString()
    centroCosto: string;
    
    @IsString()
    cuentaContable: string;
    
    @IsString()
    conceptos: string;
    
    @IsString()
    tipoEmbalaje: string;
    
    @IsString()
    clienteNombre: string;
    
    @IsString()
    clienteFono: string;

    @IsString()
    clienteEmail: string;
    
    @IsString()
    clientePais: string;

    @IsString()
    clienteDireccion: string;
    
    @IsString()
    despachoTransporte: string;
    
    @IsString()
    despachoRetira: string;
    
    @IsString()
    despachoAwb: string;
    
    @IsInt()
    despachoCosto: number;

}