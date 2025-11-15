export class CreatePostDto {
  text: string;
  color: string;
  type: string;

  author: number; // Prisma model: author Int

  img?: string[];
  video?: string | null;

  sharedPost?: number | null; // foreign key column
}
