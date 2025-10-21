export class CreateUserDto {
  name: string;
  phone: string;
  password: string; // required
  image?: string; // optional
  isVerified?: boolean = false; // default value
  userSlug: string;
}
