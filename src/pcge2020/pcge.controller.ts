/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';

import { Pcge } from './pcge.entity';
import { PcgeService } from './pcge.service';

@Controller('pcge')
export class PcgeController {
  constructor(private readonly pcgeService: PcgeService) {}

  @Post()
  create(@Body() newPcge: Pcge): Promise<Pcge> {
    return this.pcgeService.create(newPcge);
  }

  @Get()
  findAll(): Promise<Pcge[]> {
    return this.pcgeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Pcge> {
    return this.pcgeService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pcgeService.remove(id);
  }
}