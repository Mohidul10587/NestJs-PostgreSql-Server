export class CreatePostDto {
  text?: string;
  color?: string;
  type: string; // "text" | "image" | "video"
  author: number; // link to User.id
  img?: string[];
  video?: string;
  sharedPost?: number; // link to Post.id
}
