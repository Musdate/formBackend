import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ComercialReqService } from './comercial-req.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';

import {
  CreateComercialReqDto,
  UpdateComercialReqDto
} from './dto';


@Controller('comercial-req')
export class ComercialReqController {
  constructor(private readonly comercialReqService: ComercialReqService) {}

  @Post()
  // @UseGuards( AuthGuard )
  create(@Body() createComercialReqDto: CreateComercialReqDto) {
    return this.comercialReqService.create(createComercialReqDto);
  }

  @Get()
  // @UseGuards( AuthGuard )
  findAll(
    @Query('sortBy') sortBy: string,
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc') {
    return this.comercialReqService.findAll(sortBy, sortOrder);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comercialReqService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComercialReqDto: UpdateComercialReqDto) {
    return this.comercialReqService.update(+id, updateComercialReqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comercialReqService.remove(+id);
  }

}
