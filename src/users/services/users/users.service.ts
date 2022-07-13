import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
    },
    {
      id: 2,
      username: 'user',
      password: 'user',
    },
    {
      id: 3,
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

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
