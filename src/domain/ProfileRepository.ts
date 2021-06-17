import Profile from './Profile'

interface Credentials {
  email: string
  password: string
}

export default interface ProfileRepository {
  store(profile: Profile): Promise<Profile>
  findByCredentials(credentials: Credentials): Promise<Profile>
}
