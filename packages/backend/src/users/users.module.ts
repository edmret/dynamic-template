import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { RepositoriesModule } from 'src/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
