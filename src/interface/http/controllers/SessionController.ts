import ApplicationController from './ApplicationController'

import CreateSessionUseCase from '../../../application/use_cases/session/CreateSession'
import ProfileRepository from '../../../infrastructure/database/orm/repository/ProfileRepository'

import Serializer from '../serializers/SessionSerializer'

class SessionController extends ApplicationController {
  async store () {
    const { email, password } = this.req.body

    const profile = await new CreateSessionUseCase(
      { email, password },
      { profileRepository: new ProfileRepository() }
    ).execute()

    this.res.status(200).send(Serializer.serializeCreation(profile))
  }
}

export default SessionController
