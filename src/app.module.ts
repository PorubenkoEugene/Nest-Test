import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UserService } from './users/user.service';
import { PostsController, PostsControllerFind } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    PostsController,
    PostsControllerFind,
  ],
  providers: [AppService, UserService, PostsService],
})
export class AppModule {}
