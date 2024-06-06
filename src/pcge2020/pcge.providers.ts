/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Pcge } from './pcge.entity';

export const pcgeProviders = [
  {
    provide: 'PCGE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pcge),
    inject: ['DATA_SOURCE'],
  },
];