import ApplicationController from './ApplicationController'
import CreateProfile from '../../../application/use_cases/profile/CreateProfile'
import ProfileRepository from '../../../infrastructure/database/orm/repository/ProfileRepository'
import Serializer from '../serializers/ProfileSerializer'

interface Props {
  email: string
  password: string
}

class ProfileController extends ApplicationController {
  async store () {
    const { email, password }: Props = this.req.body

    const profile = await new CreateProfile(
      { email, password },
      { profileRepository: new ProfileRepository() }
    ).execute()

    this.res.status(201).send(Serializer.serializeCreation(profile))
  }
}

export default ProfileController
