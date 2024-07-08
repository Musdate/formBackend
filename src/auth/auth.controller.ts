import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginResponse } from './interfaces/login-response';

import {
  CreateUserDto,
  LoginDto,
  RegisterDto
} from './dto';
import { User } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor( private readonly authService: AuthService ) {}

  @Post()
  create( @Body() createUserDto: CreateUserDto ) {
    return this.authService.create(createUserDto);
  }

  @Post('/login')
  login( @Body() loginDto: LoginDto ) {
    return this.authService.login( loginDto );
  }

  @Post('/register')
  register( @Body() registerDto: RegisterDto ) {
    return this.authService.register( registerDto );
  }

  @Get()
  @UseGuards( AuthGuard ) 
  findAll() {
    return this.authService.findAll();
  }

  @Get('check-token')
  @UseGuards( AuthGuard ) 
  checkToken( @Request() req: Request ): LoginResponse {

    const user = req['user'] as User;

    return {
      user: user,
      token: this.authService.getJwt({ id: user._id })
    }
  }

}
