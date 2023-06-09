import { ILogObj, Logger } from 'tslog';

export class ILogger {
	logger: Logger<ILogObj>;
	log: (...args: unknown[]) => void;
	error: (...args: unknown[]) => void;
}
