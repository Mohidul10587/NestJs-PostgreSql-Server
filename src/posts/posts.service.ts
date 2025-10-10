import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const { content, color, type, authorId, images, videoUrl } = createPostDto;
    const data = {
      content: content ?? '',
      color: color ?? '',
      type,
      authorId,
      images: images ?? [],
      videoUrl: videoUrl ?? null,
    };
    const post = await this.prisma.post.create({ data });
    // return both post and token to the controller ds
    return { post };
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const data = {
      ...updatePostDto,
    };
    return this.prisma.post.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
