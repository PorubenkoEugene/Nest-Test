import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly last_name: string;

  @IsNotEmpty()
  readonly password: string;
}
