import { Injectable } from '@nestjs/common';
// import { UserInterface } from './interfaces/user.interface';
import { CreatePostDto } from './create-post.dto';
import { PostsInterface } from './posts.interface';

@Injectable()
export class PostsService {
  private posts: Array<PostsInterface> = [];

  // private readonly users: UserInterface;
  findAllPosts(): Array<PostsInterface> {
    return this.posts;
  }
  findPost(id): string {
    return `Post ${id} finded`;
  }

  asyncPostFound(id: string): Promise<unknown> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Resolved ${id}`), 1000);
    });
  }

  asyncPostCreate(post: CreatePostDto): Promise<unknown> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.posts.push(post)), 1000);
    });
  }
}
