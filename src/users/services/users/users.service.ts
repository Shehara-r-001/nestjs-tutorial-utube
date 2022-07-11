import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'admin',
      password: 'admin',
    },
    {
      username: 'user',
      password: 'user',
    },
    {
      username: 'strider',
      password: 'strider',
    },
  ];

  getAllUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
    // or
    // return this.users.map((user) => new SerializedUser(user));
    // and use interceptors in controller
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
