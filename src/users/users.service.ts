import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // Generate a salt and hash the password
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const data = {
      name: createUserDto.name,
      phone: createUserDto.phone,
      password: hashedPassword,
      img: createUserDto.img || null,
      isVerified: createUserDto.isVerified || false,
    };
    const user = await this.prisma.user.create({ data });

    const token = jwt.sign({ userId: user.id, phone: user.phone }, JWT_SECRET, {
      expiresIn: '10d',
    });

    // return both user and token to the controller
    return { user, token };
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const data = {
      ...updateUserDto,
    };
    return this.prisma.user.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
