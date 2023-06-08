import { BaseController } from '../common/base.controller'
import { LoggerService } from '../logger/logger.service'
import { NextFunction, Request, Response } from 'express'
import { HTTPError } from '../errors/http-error.class'

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger)
    this.bindRoutes([
      { path: '/login', method: 'post', function: this.login },
      { path: '/register', method: 'post', function: this.register }
    ])
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, 'login error', 'login'))
    // this.ok(res, 'login')
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'register')
  }
}
