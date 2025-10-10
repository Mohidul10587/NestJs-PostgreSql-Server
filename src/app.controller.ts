import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getApiDocs(@Res() res: Response) {
    const html = `
     <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>API Directory</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-50 min-h-screen p-4 md:p-6">
    <div class="max-w-6xl mx-auto">
      <h1
        class="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6 md:mb-8"
      >
        🚀 NestJS + PostgreSql API Directory
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Users APIs -->
        <div class="bg-white shadow-md rounded-xl p-4 md:p-6">
          <h2 class="font-bold text-lg mb-2">🧑 Users</h2>
          <p class="text-gray-600 text-sm mb-4">
            All API endpoints related to users
          </p>

          <div class="space-y-3">
            <div
              class="border-l-4 border border-green-500 pl-3 py-2 bg-green-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">GET /users</p>
              <p class="text-gray-600 text-sm">Get all users</p>
              <a
                href="https://nestjs-postgresql-server-1.onrender.com/users"
                target="_blank"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-green-500 pl-3 py-2 bg-green-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">GET /users/:id</p>
              <p class="text-gray-600 text-sm">Get a single user by ID</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-blue-500 pl-3 py-2 bg-blue-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">POST /users</p>
              <p class="text-gray-600 text-sm">Create a new user</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-yellow-500 pl-3 py-2 bg-yellow-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">PATCH /users/:id</p>
              <p class="text-gray-600 text-sm">Update a user partially</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-purple-500 pl-3 py-2 bg-purple-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">PUT /users/:id</p>
              <p class="text-gray-600 text-sm">Update a user fully</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-red-500 pl-3 py-2 bg-red-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">DELETE /users/:id</p>
              <p class="text-gray-600 text-sm">Delete a user by ID</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>
          </div>
        </div>

        <!-- Posts APIs -->
        <div class="bg-white shadow-md rounded-xl p-4 md:p-6">
          <h2 class="font-bold text-lg mb-2">📝 Posts</h2>
          <p class="text-gray-600 text-sm mb-4">
            All API endpoints related to posts
          </p>

          <div class="space-y-3">
            <div
              class="border-l-4 border border-green-500 pl-3 py-2 bg-green-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">GET /posts</p>
              <p class="text-gray-600 text-sm">Get all posts</p>
              <a
                href="https://nestjs-postgresql-server-1.onrender.com/posts"
                target="_blank"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-green-500 pl-3 py-2 bg-green-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">GET /posts/:id</p>
              <p class="text-gray-600 text-sm">Get a single post by ID</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-blue-500 pl-3 py-2 bg-blue-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">POST /posts</p>
              <p class="text-gray-600 text-sm">Create a new post</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-yellow-500 pl-3 py-2 bg-yellow-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">PATCH /posts/:id</p>
              <p class="text-gray-600 text-sm">Update a post partially</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-purple-500 pl-3 py-2 bg-purple-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">PUT /posts/:id</p>
              <p class="text-gray-600 text-sm">Update a post fully</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>

            <div
              class="border-l-4 border border-red-500 pl-3 py-2 bg-red-50 rounded-md"
            >
              <p class="text-gray-800 font-medium">DELETE /posts/:id</p>
              <p class="text-gray-600 text-sm">Delete a post by ID</p>
              <a
                href="#"
                class="inline-block mt-1 text-blue-500 text-sm hover:underline"
                >🔗 Open</a
              >
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-gray-400 text-xs md:text-sm mt-6 md:mt-8">
        Made with ❤️ using NestJS & PostgreSql
      </p>
    </div>
  </body>
</html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  }
}
