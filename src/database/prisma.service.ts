import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { PrismaClient } from '@prisma/client';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect();
			this.logger.log('[PrismaService] Successfully connect');
		} catch (e) {
			if (e instanceof Error) {
				this.logger.error('[PrismaService] Connect error' + e.message);
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
	}
}
