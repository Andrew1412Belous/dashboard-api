import { IUserService } from './users.service.interface';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { IConfigService } from '../config/config.service.interface';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}

	async createUser({ email, password, name }: UserRegisterDto): Promise<User | null> {
		const user = new User(email, name);

		const salt = this.configService.get('SALT');
		await user.setPassword(password, Number(salt));

		return user;
	}

	async validateUser(dto: UserRegisterDto): Promise<boolean> {
		return false;
	}
}
