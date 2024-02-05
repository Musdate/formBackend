import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GenericReqService } from './generic-req.service';
import { CreateGenericReqDto } from './dto';


@Controller('generic-req')
export class GenericReqController {
  constructor(private readonly genericReqService: GenericReqService) {}

  @Post()
  // @UseGuards( AuthGuard )
  create(@Body() createGenericReqDto: CreateGenericReqDto) {
    return this.genericReqService.create(createGenericReqDto);
  }

  @Get()
  // @UseGuards( AuthGuard )
  findAll() {
    return this.genericReqService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genericReqService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genericReqService.remove(+id);
  }

}
