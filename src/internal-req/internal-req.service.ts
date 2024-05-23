import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateInternalReqDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { InternalReq } from './entities/internal-req.entity';
import { Model } from 'mongoose';
import { MailerService } from 'src/mailer/mailer.service';


@Injectable()
export class InternalReqService {

  constructor(
    @InjectModel( InternalReq.name )
    private internalReqModel: Model<InternalReq>,
    private readonly mailerService: MailerService
  ) { }

  create(createInternalReqDto: CreateInternalReqDto): Promise<InternalReq> {

    try {

      const newInternalReq = new this.internalReqModel( createInternalReqDto );
      this.mailerService.sendMail(newInternalReq);
      return newInternalReq.save();

    } catch (error) {
      
      throw new InternalServerErrorException('Error desconocido.');

    }

  }

  findAll(): Promise<InternalReq[]> {
    return this.internalReqModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} internalReq`;
  }

  remove(id: number) {
    return `This action removes a #${id} internalReq`;
  }
}
