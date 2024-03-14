import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/repositories/users.repository';
import { User } from 'src/types/User.type';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async create(data: { username: string; password: string }) {
    // check if the user already exists
    const user = await this.findOne(data.username);
    if (user) {
      throw new BadRequestException('User already exists');
    }
    return this.userRepository.createUser(data);
  }

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.userRepository.findUserByUsername(username);
    return user;
  }
}
