import { getManager } from 'typeorm'
import Profile from '../../../../domain/Profile'
import ProfileEntityFactory from '../factories/ProfileEntityFactory'
import ProfileRepository from '../../../../domain/ProfileRepository'

class ProfileRepositoryImpl implements ProfileRepository {
  async store (profile: Profile): Promise<Profile> {
    const profileEntity = ProfileEntityFactory.createProfile(profile)

    await getManager().save(profileEntity)

    return profileEntity
  }
}

export default ProfileRepositoryImpl
