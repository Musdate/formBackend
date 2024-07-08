import { IsArray, IsEmail, IsInt, IsString, MinLength } from "class-validator";
import { Producto } from "src/producto/entities/producto.entity";

export class CreateGenericReqDto {

    @IsString()
    nombreSolicitud: string;

    @IsArray()
    productos: Producto[];
    
    @IsString()
    solicitante: string;
    
    @IsString()
    fechaEnvio: string;
    
    @IsString()
    centroCosto: string;
    
    @IsString()
    cuentaContable: string;
    
    @IsString()
    conceptos: string;
    
    @IsString()
    clienteNombre: string;
    
    @IsString()
    clienteFono: string;

    @IsString()
    clienteEmail: string;

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