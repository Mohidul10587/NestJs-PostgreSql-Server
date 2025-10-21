import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const { text, color, type, author, img, video, sharedPost } = createPostDto;
    const data = {
      text: text ?? '',
      color: color ?? '',
      type,
      author,
      img: img ?? [],
      video: video ?? null,
      sharedPost: sharedPost ?? null,
    };
    const post = await this.prisma.post.create({ data });
    // return both post and token to the controller ds
    return { post };
  }
  async getBusinessFeedPosts(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [posts, total] = await Promise.all([
      this.prisma.post.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          User: true, // author info
          Post: { include: { User: true } }, // shared post info
          _count: { select: { Comment: true } }, // total comments for each post
        },
      }),
      this.prisma.post.count(),
    ]);

    const newsFeed = posts.map((post) => ({
      ...post,
      feedType: 'normalPost',
      totalComments: post._count.Comment,
      _count: undefined, // optional: remove _count
    }));

    return {
      total,
      page,
      limit,
      newsFeed,
    };
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
//
