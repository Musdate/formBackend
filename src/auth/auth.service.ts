import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, RegisterDto, UpdateAuthDto, LoginDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel( User.name )
    private userModel: Model<User>,
    private jwtService: JwtService
  ) { }

  async create( createUserDto: CreateUserDto ): Promise<User> {

    try {

      const newUser = new this.userModel( createUserDto );
      return await newUser.save();

    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`${createUserDto.email} ya existe!!`)
      }
      throw new InternalServerErrorException('Error desconocido.')
    }
  }

  async register( registerDto: RegisterDto ): Promise<LoginResponse> {

    const user = await this.create( registerDto );

    return {
      user: user,
      token: this.getJwt({ id: user._id })
    }
  }

  async login( loginDto: LoginDto ) {

    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Not valid credentials - email');
    }
    if (password != user.password) {
      throw new UnauthorizedException('Not valid credentials - password');
    }

    const { password:_, ...rest } = user.toJSON();

    return {
      user: rest,
      token: this.getJwt({ id: user.id })
    }
  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findUserById( id: string ) {
    const user = await this.userModel.findById( id );
    const { password, ...rest } = user. toJSON();
    return rest;
  }

  findOne( id: number ) {
    return `This action returns a #${id} auth`;
  }

  update( id: number, updateAuthDto: UpdateAuthDto ) {
    return `This action updates a #${id} auth`;
  }

  remove( id: number ) {
    return `This action removes a #${id} auth`;
  }

  getJwt( payload: JwtPayload ) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
