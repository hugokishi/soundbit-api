import { Router } from 'express'

import UserController from '../controllers/UserController'

class Routes {
  readonly router: Router

  constructor () {
    this.router = Router()

    this.mountUserRoutes()
  }

  mountUserRoutes () {
    this.router.post('/users', (req, res) => new UserController(req, res).store())
  }
}

export default new Routes().router
