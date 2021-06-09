import { Router } from 'express'

import ProfileController from '../controllers/ProfileController'

class Routes {
  readonly router: Router

  constructor () {
    this.router = Router()

    this.mountProfilesRoutes()
  }

  mountProfilesRoutes () {
    this.router.post('/profiles', (req, res) => new ProfileController(req, res).store())
  }
}

export default new Routes().router
