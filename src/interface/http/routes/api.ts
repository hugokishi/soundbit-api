import { Router } from 'express'
import MulterUpload from '../../../config/multer'

import ProfileController from '../controllers/ProfileController'
import SessionController from '../controllers/SessionController'
import MusicController from '../controllers/MusicController'

class Routes {
  readonly router: Router

  constructor () {
    this.router = Router()

    this.mountProfilesRoutes()
    this.mountSessionRoutes()
    this.mountMusicRoutes()
  }

  mountProfilesRoutes () {
    this.router.post('/profiles', (req, res) => new ProfileController(req, res).store())
  }

  mountSessionRoutes () {
    this.router.post('/sessions', (req, res) => new SessionController(req, res).store())
  }

  mountMusicRoutes () {
    this.router.post('/musics', MulterUpload.single('file'), (req, res) => new MusicController(req, res).store())
  }
}

export default new Routes().router
