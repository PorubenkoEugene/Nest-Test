import { Injectable } from '@nestjs/common';
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

  addNewUser(createUserDto): object {
    console.log('HOH')
    console.log(createUserDto)
    const newUser = EncryptedUserPassword(createUserDto);
    return newUser;
  }
}
