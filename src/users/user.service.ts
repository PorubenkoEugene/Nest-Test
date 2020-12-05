import { Injectable } from '@nestjs/common';
// import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UserService {
  // private readonly users: UserInterface;
  getUsers(): string {
    return 'get All Users';
  }
}
