import { Module } from '@nestjs/common';
import { InternalReqService } from './internal-req.service';
import { InternalReqController } from './internal-req.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { InternalReq, InternalReqSchema } from './entities/internal-req.entity';
import { User, UserSchema } from 'src/auth/entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  controllers: [InternalReqController],
  providers: [
    InternalReqService,
    AuthService
  ],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: InternalReq.name,
        schema: InternalReqSchema
      },
      {
        name: User.name,
        schema: UserSchema
      }
    ]),
    MailerModule
  ]
})
export class InternalReqModule {}
