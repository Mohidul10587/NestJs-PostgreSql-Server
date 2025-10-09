import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Global করা optional, সব module এ ব্যবহার করতে চাইলে
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // অন্য module থেকে inject করতে হলে export করতে হবে
})
export class PrismaModule {}
