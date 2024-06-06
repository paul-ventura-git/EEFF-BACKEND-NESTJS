/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PcgeService } from './pcge.service';
import { DatabaseModule } from '../database/database.module';
import { PcgeController } from './pcge.controller';
import { pcgeProviders } from './pcge.providers';
@Module({
  imports: [DatabaseModule],
  providers: [
    ...pcgeProviders,
    PcgeService],
  exports: [PcgeService],
  controllers: [PcgeController],
})
export class PcgeModule {}