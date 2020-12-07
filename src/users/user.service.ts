import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface'
import { EncryptedUserPassword} from '../../utils/Proxy/user_entity';

@Injectable()
export class UserService {
  Users = [
    {
      name: 'John',
      last_name: 'Kash',
      _password: 'wcwkcowkcwokc',
    },
    {
      name: 'Bob',
      last_name: 'Robbins',
      _password: '53535ffd',
    },
  ];

  constructor() {}

  getAllUsers(): { _password: string; name: string; last_name: string }[] {
    return this.Users;
  }

  async addNewUser(createUserDto) {
    console.log('HOH')
    console.log(createUserDto)
    const newUser: unknown = await EncryptedUserPassword(createUserDto);
    this.Users.push(newUser);
    return newUser;
  }
}
