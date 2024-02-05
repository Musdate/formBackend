import { Module } from '@nestjs/common';
import { GenericReqService } from './generic-req.service';
import { GenericReqController } from './generic-req.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GenericReq, GenericReqSchema } from './entities/generic-req.entity';
import { User, UserSchema } from 'src/auth/entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  controllers: [GenericReqController],
  providers: [
    GenericReqService,
    AuthService
  ],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: GenericReq.name,
        schema: GenericReqSchema
      },
      {
        name: User.name,
        schema: UserSchema
      }
    ]),
    MailerModule
  ]
})
export class GenericReqModule {}
