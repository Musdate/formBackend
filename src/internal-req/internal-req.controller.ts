import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { InternalReqService } from './internal-req.service';
import { CreateInternalReqDto } from './dto';


@Controller('internal-req')
export class InternalReqController {
  constructor(private readonly internalReqService: InternalReqService) {}

  @Post()
  // @UseGuards( AuthGuard )
  create(@Body() createInternalReqDto: CreateInternalReqDto) {
    return this.internalReqService.create(createInternalReqDto);
  }

  @Get()
  // @UseGuards( AuthGuard )
  findAll() {
    return this.internalReqService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internalReqService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internalReqService.remove(+id);
  }

}
