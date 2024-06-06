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

  import { User } from './user.entity';
  import { UserService } from './user.service';
  
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post()
    create(@Body() newUser: User): Promise<User> {
      return this.userService.create(newUser);
    }
  
    @Get()
    findAll(): Promise<User[]> {
      return this.userService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
      return this.userService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.userService.remove(id);
    }
  }