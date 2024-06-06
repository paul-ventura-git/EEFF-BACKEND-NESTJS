/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}