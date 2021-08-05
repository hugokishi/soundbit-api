import ApplicationController from './ApplicationController'
import CreateMusic from '../../../application/use_cases/music/CreateMusic'
import MusicRepository from '../../../infrastructure/database/orm/repository/MusicRepository'
import Serializer from '../serializers/MusicSerializer'

class ProfileController extends ApplicationController {
  async store () {
    const { name }: { name: string } = this.req.body
    const file: string = this.req.file!.filename

    const music = await new CreateMusic(
      { name, file },
      { musicRepository: new MusicRepository() }
    ).execute()

    this.res.status(201).send(Serializer.serializeCreation(music))
  }
}

export default ProfileController
