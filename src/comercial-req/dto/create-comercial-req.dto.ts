import { IsEmail, IsInt, IsString, MinLength } from "class-validator";

export class CreateComercialReqDto {

    @IsString()
    producto: string;

    @IsInt()
    cantidad: number;
    
    @IsString()
    formatoBotella: string;
    
    @IsString()
    tipoVino: string;
    
    @IsString()
    anioCosecha: string;
    
    @IsString()
    cepa: string;
    
    @IsString()
    tipoCierre: string;
    
    @IsString()
    etiqueta: string;
    
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