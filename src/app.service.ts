import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: '👋 Welcome to NestJS with Prisma and PostgreSQL',
      baseUrl: 'https://nestjs-postgresql-server.onrender1.com',
      endpoints: [
        {
          group: '🧑 Users',
          description: 'All API endpoints related to users',
          routes: [
            { method: 'GET', path: '/users', description: 'Get all users' },
            {
              method: 'GET',
              path: '/users/:id',
              description: 'Get a single user by ID',
            },
            {
              method: 'POST',
              path: '/users',
              description: 'Create a new user',
            },
            {
              method: 'PATCH',
              path: '/users/:id',
              description: 'Update a user by ID',
            },
            {
              method: 'DELETE',
              path: '/users/:id',
              description: 'Delete a user by ID',
            },
          ],
        },
        {
          group: '📝 Posts',
          description: 'All API endpoints related to posts',
          routes: [
            { method: 'GET', path: '/posts', description: 'Get all posts' },
            {
              method: 'GET',
              path: '/posts/:id',
              description: 'Get a single post by ID',
            },
            {
              method: 'POST',
              path: '/posts',
              description: 'Create a new post',
            },
            {
              method: 'PATCH',
              path: '/posts/:id',
              description: 'Update a post by ID',
            },
            {
              method: 'DELETE',
              path: '/posts/:id',
              description: 'Delete a post by ID',
            },
          ],
        },
      ],
      note: '📌 Use the above routes with the base URL to access the API.',
    };
  }
}
