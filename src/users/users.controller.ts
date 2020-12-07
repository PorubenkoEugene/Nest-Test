import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  HttpCode,
  Header,
  Redirect, Body,
} from '@nestjs/common';

import { UserService } from './user.service';
import { Request } from 'express';
import { UserDTO } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  findAll(@Req() request: Request): string {
    return `dwfefefe`;
    // return this.UserService.getUsers();
  }
  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  async createUser(@Body() UserDto: UserDTO) {
    return await this.UserService.addUser(UserDTO);
  }
}
