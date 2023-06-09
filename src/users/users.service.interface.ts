import { UserRegisterDto } from './dto/user-register.dto';
import { UserModel } from '@prisma/client';
import { UserLoginDto } from './dto/user-login.dto';

export class IUserService {
	createUser: (dto: UserRegisterDto) => Promise<UserModel | null>;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
	getUserInfo: (email: string) => Promise<UserModel | null>;
}
