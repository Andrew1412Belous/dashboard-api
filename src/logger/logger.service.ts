import { ILogObj, ISettingsParam, Logger } from 'tslog'
import { ILogger } from './logger.interface'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
export class LoggerService implements ILogger {
  logger: Logger<ILogObj>

  constructor() {
    this.logger = new Logger({
      prettyLogTemplate: "{{yyyy}}-{{mm}}-{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}} {{name}}",
      displayInstanceName: false,
      displayLoggerName: false,
      displayFilePath: 'hidden',
      displayFunctionName: false,
    } as ISettingsParam<ILogObj>)
  }

  log(...args: unknown[]): void {
    this.logger.info(...args)
  }

  error(...args: unknown[]): void {
    this.logger.error(...args)
  }

  warn(...args: unknown[]): void {
    this.logger.warn(...args)
  }
}
