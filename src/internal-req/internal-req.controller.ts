import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { InternalReqService } from './internal-req.service';
import { CreateInternalReqDto } from './dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';


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
  findAll(
    @Query('sortBy') sortBy: string,
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc') {
    return this.internalReqService.findAll(sortBy, sortOrder);
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
