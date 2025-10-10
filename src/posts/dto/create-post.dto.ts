export class CreatePostDto {
  content?: string;
  color?: string;
  type: string; // "text" | "image" | "video"
  authorId: number; // link to User.id
  images?: string[];
  videoUrl?: string;
}
