/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

      constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
      ) {}
    
      create(newUser: User): Promise<User> {
        const user = new User();
        user.username = newUser.username;
        user.firstName = newUser.firstName;
        user.lastName = newUser.lastName;
        user.password = newUser.password;
        user.email = newUser.email;
    
        return this.userRepository.save(user);
      }
    
      async findAll(): Promise<User[]> {
        return this.userRepository.find();
      }
    
      findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id: id });
      }
    
      findByName(username: string): Promise<User> {
        return this.userRepository.findOneBy({ username: username });
      }
    
      async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
      }

}
