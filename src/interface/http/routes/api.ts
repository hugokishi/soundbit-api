import { Router } from 'express'

import ProfileController from '../controllers/ProfileController'
import SessionController from '../controllers/SessionController'

class Routes {
  readonly router: Router

  constructor () {
    this.router = Router()

    this.mountProfilesRoutes()
    this.mountSessionRoutes()
  }

  mountProfilesRoutes () {
    this.router.post('/profiles', (req, res) => new ProfileController(req, res).store())
  }

  mountSessionRoutes () {
    this.router.post('/sessions', (req, res) => new SessionController(req, res).store())
  }
}

export default new Routes().router
