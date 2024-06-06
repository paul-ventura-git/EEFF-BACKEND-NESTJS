/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { DatabaseModule } from '../database/database.module';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';
@Module({
  imports: [DatabaseModule],
  providers: [
    ...productProviders,
    ProductService],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}