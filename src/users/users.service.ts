import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Response } from 'express';
import slugify from 'slugify';
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';
// Define a type without password

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // Hash password
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // Generate base slug
    const baseSlug = slugify(createUserDto.name, { lower: true, strict: true });
    let userSlug = baseSlug;
    let count = 1;

    // Ensure uniqueness
    while (await this.prisma.user.findUnique({ where: { userSlug } })) {
      userSlug = `${baseSlug}-${count++}`;
    }

    // Prepare user data
    const data = {
      name: createUserDto.name,
      phone: createUserDto.phone,
      password: hashedPassword,
      image: createUserDto.image || null,
      isVerified: createUserDto.isVerified || false,
      userSlug: userSlug,
    };

    // Create user
    const user = await this.prisma.user.create({ data });

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, phone: user.phone }, JWT_SECRET, {
      expiresIn: '10d',
    });

    return { user, token };
  }
  // 🆕 For existing user: only generate token
  async setRefreshToken(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const token = jwt.sign({ userId: user.id, phone: user.phone }, JWT_SECRET, {
      expiresIn: '10d',
    });

    return { user, token };
  }
  async logIn(phone: string, password: string) {
    if (!phone || !password) {
      throw new BadRequestException('Phone & password are required');
    }
    console.log(phone, password);
    try {
      // Find all users with the given phone
      const users = await this.prisma.user.findMany({
        where: { phone },
        select: {
          id: true,
          name: true,
          phone: true,
          password: true,
          image: true,
          createdAt: true, // Assuming Prisma model has createdAt
        },
      });

      if (!users.length) {
        throw new NotFoundException('User not found');
      }
      console.log(users);
      // Filter users with matching passwordm
      const matchedUsers: {
        id: number;
        name: string;
        phone: string;
        image: string | null;
        password: string;
        createdAt: Date;
      }[] = [];
      for (const u of users) {
        const isMatch = await bcrypt.compare(password, u.password);
        if (isMatch) {
          matchedUsers.push(u);
        }
      }

      if (!matchedUsers.length) {
        throw new UnauthorizedException('Invalid credentials');
      }

      // Pick the last registered user (based on createdAt)
      const lastRegisteredUser = matchedUsers.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
      )[0];

      // Safe user object (no password)
      const safeUser = {
        id: lastRegisteredUser.id,
        name: lastRegisteredUser.name,
        phone: lastRegisteredUser.phone,
        image: lastRegisteredUser.image,
      };

      return { user: safeUser, message: 'Login successful' };
    } catch (err) {
      console.error('Login error:', err);
      throw new InternalServerErrorException('Failed to log in');
    }
  }

  logout(res: Response) {
    res.clearCookie('refreshToken', {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    return { message: 'Logged out successfully' };
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
