import { Module } from '@nestjs/common';
import { ComercialReqService } from './comercial-req.service';
import { ComercialReqController } from './comercial-req.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ComercialReq, ComercialReqSchema } from './entities/comercial-req.entity';
import { User, UserSchema } from 'src/auth/entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  controllers: [ComercialReqController],
  providers: [
    ComercialReqService,
    AuthService
  ],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: ComercialReq.name,
        schema: ComercialReqSchema
      },
      {
        name: User.name,
        schema: UserSchema
      }
    ]),
    MailerModule
  ]
})
export class ComercialReqModule {}
