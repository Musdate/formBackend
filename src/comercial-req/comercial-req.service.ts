import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateComercialReqDto,
  UpdateComercialReqDto
} from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { ComercialReq } from './entities/comercial-req.entity';
import { Model } from 'mongoose';

@Injectable()
export class ComercialReqService {

  constructor(
    @InjectModel( ComercialReq.name )
    private comercialReqModel: Model<ComercialReq>,
  ) { }

  create(createComercialReqDto: CreateComercialReqDto): Promise<ComercialReq> {

    try {

      const newComercialReq = new this.comercialReqModel( createComercialReqDto );
      return newComercialReq.save();

    } catch (error) {
      
      throw new InternalServerErrorException('Error desconocido.');

    }

  }

  findAll(): Promise<ComercialReq[]> {
    return this.comercialReqModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} comercialReq`;
  }

  update(id: number, updateComercialReqDto: UpdateComercialReqDto) {
    return `This action updates a #${id} comercialReq`;
  }

  remove(id: number) {
    return `This action removes a #${id} comercialReq`;
  }
}
