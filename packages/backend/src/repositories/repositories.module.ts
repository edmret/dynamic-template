import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from 'src/config/database.config';
import { UserSchema } from 'src/schema/user.schema';
import { TemplateSchema } from 'src/schema/template.schema';
import { DocSchema } from 'src/schema/Doc.schema';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables from .env file
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'Template',
        schema: TemplateSchema,
      },
      {
        name: 'Doc',
        schema: DocSchema,
      },
    ]),
    MongooseModule.forRootAsync(databaseConfig),
  ],
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class RepositoriesModule {}
