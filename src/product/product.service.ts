/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {

      constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: Repository<Product>,
      ) {}
    
      create(newProduct: Product): Promise<Product> {
        const product = new Product();
        product.title = newProduct.title;
        product.description = newProduct.description;
        product.category = newProduct.category;
        product.price = newProduct.price;
        product.stock = newProduct.stock;
        product.brand = newProduct.brand;
        product.image = newProduct.image;
    
        return this.productRepository.save(product);
      }
    
      async findAll(): Promise<Product[]> {
        return this.productRepository.find();
      }
    
      findOne(id: number): Promise<Product> {
        return this.productRepository.findOneBy({ id: id });
      }
    
      findByTitle(title: string): Promise<Product> {
        return this.productRepository.findOneBy({ title: title });
      }
    
      async remove(id: number): Promise<void> {
        await this.productRepository.delete(id);
      }

}