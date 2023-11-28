import { PartialType } from '@nestjs/mapped-types';
import { CreateComercialReqDto } from './create-comercial-req.dto';

export class UpdateComercialReqDto extends PartialType(CreateComercialReqDto) {}
