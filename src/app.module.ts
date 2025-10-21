import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UsersModule, PrismaModule, PostsModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
