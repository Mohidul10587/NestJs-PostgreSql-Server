export class CreateUserDto {
  name: string;
  email: string;
  password: string; // required
  img?: string; // optional
}
