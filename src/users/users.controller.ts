import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  HttpCode,
  Header,
  Redirect,
  Body,
} from '@nestjs/common';

import { UserService } from './user.service';
import { Request } from 'express';
import { UserInterface } from './interfaces/user.interface';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  findAll(): UserInterface[] {
    return this.UserService.getAllUsers();
  }
  @Post()
  addUser(@Body() createUserDto: CreateUserDto): UserInterface {
    console.log('kokok');
    return <UserInterface>this.UserService.addNewUser(createUserDto);
  }
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  createUser(): string {
    return `user created!`;
  }
}
