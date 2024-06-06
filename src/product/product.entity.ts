/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column('decimal')
  price: number;

  @Column()
  stock: number;

  @Column()
  brand: string;

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({nullable: true})
  image: string;
}