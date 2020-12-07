import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  HttpCode,
  Header,
  Redirect,
} from '@nestjs/common';

import { UserService } from './user.service';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UserService) {
    console.log('HELLO')
  }
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request.ip + 'rec');
    return this.UserService.getUsers();
  }
  @Post()
  @HttpCode(201)
  // @Header('Cache-Control', 'none')
  createUser(): string {
    return `user created!`;
  }
}
