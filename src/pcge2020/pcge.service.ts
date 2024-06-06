/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pcge } from './pcge.entity';

@Injectable()
export class PcgeService {

      constructor(
        @Inject('PCGE_REPOSITORY')
        private pcgeRepository: Repository<Pcge>,
      ) {}
    
      create(newPcge: Pcge): Promise<Pcge> {
        const pcge = new Pcge();
        pcge.cuenta       = newPcge.cuenta;
        pcge.subcuenta1   = newPcge.subcuenta1;
        pcge.subcuenta2   = newPcge.subcuenta2;
        pcge.subcuenta3   = newPcge.subcuenta3;
        pcge.subcuenta4   = newPcge.subcuenta4;
        pcge.descripcion  = newPcge.descripcion;
    
        return this.pcgeRepository.save(pcge);
      }
    
      async findAll(): Promise<Pcge[]> {
        return this.pcgeRepository.find();
      }
    
      findOne(id: number): Promise<Pcge> {
        return this.pcgeRepository.findOneBy({ id: id });
      }
    
      findByDescripcion(descripcion: string): Promise<Pcge> {
        return this.pcgeRepository.findOneBy({ descripcion: descripcion });
      }
    
      async remove(id: number): Promise<void> {
        await this.pcgeRepository.delete(id);
      }

}