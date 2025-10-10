export class CreateUserDto {
  name: string;
  phone: string;
  password: string; // required
  img?: string; // optional
  isVerified?: boolean = false; // default value
}
