import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TemplatesModule } from './templates/templates.module';
import { DocumentsModule } from './documents/documents.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [
    RepositoriesModule,
    AuthModule,
    UsersModule,
    TemplatesModule,
    DocumentsModule,
    RepositoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
