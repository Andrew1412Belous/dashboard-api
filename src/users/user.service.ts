import { IUserService } from './users.service.interface';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { injectable } from 'inversify';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, password, name }: UserRegisterDto): Promise<User | null> {
		const user = new User(email, name);
		await user.setPassword(password);

		return user;
	}

	async validateUser(dto: UserRegisterDto): Promise<boolean> {
		return false;
	}
}
