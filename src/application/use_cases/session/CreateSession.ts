import ProfileRepository from '../../../domain/ProfileRepository'

interface Credentials {
  email: string
  password: string
}

interface Dependencies {
  profileRepository: ProfileRepository
}

class CreateSessionUseCase {
  private email: string
  private password: string

  readonly profileRepository: ProfileRepository

  constructor ({ email, password }: Credentials, { profileRepository }: Dependencies) {
    this.email = email
    this.password = password

    this.profileRepository = profileRepository
  }

  execute () {
    return this.profileRepository.findByCredentials({
      email: this.email,
      password: this.password
    })
  }
}

export default CreateSessionUseCase
