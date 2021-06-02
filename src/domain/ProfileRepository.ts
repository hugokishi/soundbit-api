import Profile from './Profile'

export default interface ProfileRepository {
  store(profile: Profile): Promise<Profile>
}
