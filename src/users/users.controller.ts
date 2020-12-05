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
import { UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  findAll(): { password: string; name: string; last_name: string }[] {
    return this.UserService.getAllUsers();
  }
  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  createUser(): string {
    return `user created!`;
  }
}
