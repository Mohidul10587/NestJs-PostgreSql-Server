import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getApiDocs(@Res() res: Response) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>API Directory</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-50 min-h-screen flex items-center justify-center p-6">
        <div class="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8">
          <h1 class="text-3xl font-bold text-center text-blue-600 mb-8">
            🚀 NestJS + Prisma API Directory
          </h1>

          <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-200 divide-y divide-gray-200">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Method</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Endpoint</th>
                  <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                  <th class="px-4 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">

                <!-- 🧑 Users APIs -->
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-4 py-3 font-medium text-gray-800">👤 Get All Users</td>
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 rounded text-white text-xs font-bold bg-green-500">GET</span>
                  </td>
                  <td class="px-4 py-3 text-blue-500 break-all">https://nestjs-postgresql-server.onrender1.com/users</td>
                  <td class="px-4 py-3 text-gray-600">Get list of all users</td>
                  <td class="px-4 py-3 text-center">
                    <a href="https://nestjs-postgresql-server.onrender1.com/users" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">🔗 Open</a>
                  </td>
                </tr>

                <tr class="hover:bg-gray-50 transition">
                  <td class="px-4 py-3 font-medium text-gray-800">👤 Get Single User</td>
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 rounded text-white text-xs font-bold bg-green-500">GET</span>
                  </td>
                  <td class="px-4 py-3 text-blue-500 break-all">https://nestjs-postgresql-server.onrender1.com/users/:id</td>
                  <td class="px-4 py-3 text-gray-600">Get a single user by ID</td>
                  <td class="px-4 py-3 text-center">
                    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">🔗 Open</a>
                  </td>
                </tr>

                <tr class="hover:bg-gray-50 transition">
                  <td class="px-4 py-3 font-medium text-gray-800">➕ Create User</td>
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 rounded text-white text-xs font-bold bg-blue-500">POST</span>
                  </td>
                  <td class="px-4 py-3 text-blue-500 break-all">https://nestjs-postgresql-server.onrender1.com/users</td>
                  <td class="px-4 py-3 text-gray-600">Create a new user</td>
                  <td class="px-4 py-3 text-center">
                    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">🔗 Open</a>
                  </td>
                </tr>

                <!-- 📝 Posts APIs -->
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-4 py-3 font-medium text-gray-800">📝 Get All Posts</td>
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 rounded text-white text-xs font-bold bg-green-500">GET</span>
                  </td>
                  <td class="px-4 py-3 text-blue-500 break-all">https://nestjs-postgresql-server.onrender1.com/posts</td>
                  <td class="px-4 py-3 text-gray-600">Get list of all posts</td>
                  <td class="px-4 py-3 text-center">
                    <a href="https://nestjs-postgresql-server.onrender1.com/posts" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">🔗 Open</a>
                  </td>
                </tr>

                <tr class="hover:bg-gray-50 transition">
                  <td class="px-4 py-3 font-medium text-gray-800">➕ Create Post</td>
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 rounded text-white text-xs font-bold bg-blue-500">POST</span>
                  </td>
                  <td class="px-4 py-3 text-blue-500 break-all">https://nestjs-postgresql-server.onrender1.com/posts</td>
                  <td class="px-4 py-3 text-gray-600">Create a new post</td>
                  <td class="px-4 py-3 text-center">
                    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">🔗 Open</a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <p class="text-center text-gray-400 text-sm mt-8">
            Made with ❤️ using NestJS & Prisma
          </p>
        </div>
      </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  }
}
