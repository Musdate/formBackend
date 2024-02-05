import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProductoModule } from './producto/producto.module';
import { ComercialReqModule } from './comercial-req/comercial-req.module';
import { InternalReqModule } from './internal-req/internal-req.module';
import { GenericReqModule } from './generic-req/generic-req.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot( process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME
    }),
    AuthModule,
    ProductoModule,
    ComercialReqModule,
    InternalReqModule,
    GenericReqModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }