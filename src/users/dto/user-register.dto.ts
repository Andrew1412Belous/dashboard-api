import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Invalid email' })
	email: string;

	@IsString({ message: 'Please enter password' })
	password: string;

	@IsString({ message: 'Please enter name' })
	name: string;
}
