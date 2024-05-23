import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateComercialReqDto,
  UpdateComercialReqDto
} from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { ComercialReq } from './entities/comercial-req.entity';
import { Model } from 'mongoose';
import { MailerService } from 'src/mailer/mailer.service';


@Injectable()
export class ComercialReqService {

  constructor(
    @InjectModel( ComercialReq.name )
    private comercialReqModel: Model<ComercialReq>,
    private readonly mailerService: MailerService
  ) { }

  create(createComercialReqDto: CreateComercialReqDto): Promise<ComercialReq> {

    try {

      const newComercialReq = new this.comercialReqModel( createComercialReqDto );
      this.mailerService.sendMail(newComercialReq);
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
