import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateGenericReqDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { GenericReq } from './entities/generic-req.entity';
import { Model } from 'mongoose';
import { MailerService } from 'src/mailer/mailer.service';


@Injectable()
export class GenericReqService {

  constructor(
    @InjectModel( GenericReq.name )
    private genericReqModel: Model<GenericReq>,
    private readonly mailerService: MailerService
  ) { }

  create(createGenericReqDto: CreateGenericReqDto): Promise<GenericReq> {

    try {

      const newGenericReq = new this.genericReqModel( createGenericReqDto );
      this.mailerService.sendMail(newGenericReq);
      return newGenericReq.save();

    } catch (error) {
      
      throw new InternalServerErrorException('Error desconocido.');

    }

  }

  findAll(): Promise<GenericReq[]> {
    return this.genericReqModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} genericReq`;
  }

  remove(id: number) {
    return `This action removes a #${id} genericReq`;
  }
}
