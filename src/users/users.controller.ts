import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  NotFoundException,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import type { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signUp')
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const { user, token } = await this.usersService.create(createUserDto);

    res.cookie('tkn', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none', // important if frontend is on a different domain
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    return res.status(201).json({ user });
  }

  // ✅ Set refresh token (existing user)
  @Post('setRefreshToken/:id')
  async setRefreshToken(@Param('id') id: string, @Res() res: Response) {
    const { user, token } = await this.usersService.setRefreshToken(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    res.cookie('refreshToken', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json(user);
  }
  @Post('logIn')
  async logIn(
    @Body('phone') phone: string,
    @Body('password') password: string,
  ) {
    return this.usersService.logIn(phone, password);
  }
  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie('refreshToken', {
      path: '/',
      httpOnly: true,
      secure: true, // use true in production (HTTPS)
      sameSite: 'none', // adjust if needed
    });

    return res.status(200).json({ message: 'Logged out successfully' });
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
//
