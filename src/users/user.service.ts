import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UserService {
  Users = [
    {
      name: 'John',
      last_name: 'Kash',
      password: 'wcwkcowkcwokc',
    },
    {
      name: 'Bob',
      last_name: 'Robbins',
      password: '53535ffd',
    },
  ];
  constructor() {}
  getAllUsers(): ({ password: string; name: string; last_name: string })[] {
    return this.Users;
  }
}
