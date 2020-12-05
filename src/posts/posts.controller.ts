import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  HttpCode,
  Header,
  Redirect,
  Query,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { PostsService } from './posts.service';
import { CreatePostDto } from './create-post.dto';
import { PostsInterface } from './posts.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly PostService: PostsService) {}
  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // getPosts(@Query('version') version) {
  //   console.log(`version${version}`);
  //   if (version && version === '5') {
  //     console.log(`version${version}2`);
  //
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  //   return this.PostService.getPosts();
  // }
  @Get()
  findAllPosts(): Array<PostsInterface> {
    return this.PostService.findAllPosts();
  }
  @Post()
  async createPost(@Body() data: CreatePostDto) {
    return await this.PostService.asyncPostCreate(data);
  }
}

@Controller('find')
export class PostsControllerFind {
  constructor(private readonly PostService: PostsService) {}
  @Get(':id')
  async findPost(@Param() params): Promise<unknown> {
    // return this.PostService.findPost(params.id);
    return await this.PostService.asyncPostFound(params.id);
  }
}
