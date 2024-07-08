import { Controller, Get, Post, Body, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { GenericReqService } from './generic-req.service';
import { CreateGenericReqDto } from './dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';


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
  findAll(
    @Query('sortBy') sortBy: string,
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc') {
    return this.genericReqService.findAll(sortBy, sortOrder);
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
