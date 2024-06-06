/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pcge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cuenta: string;

  @Column()
  subcuenta1: string;

  @Column()
  subcuenta2: string;

  @Column()
  subcuenta3: string;

  @Column()
  subcuenta4: string;

  @Column()
  descripcion: string;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date;

}