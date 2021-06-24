import { getManager } from 'typeorm'
import Profile from '../../../../domain/Profile'
import ProfileEntityFactory from '../factories/ProfileEntityFactory'
import ProfileRepository from '../../../../domain/ProfileRepository'
import ProfileEntity from '../entities/Profile'

interface Credentials {
  email: string
  password: string
}

class ProfileRepositoryImpl implements ProfileRepository {
  async store (profile: Profile): Promise<Profile> {
    const profileEntity = ProfileEntityFactory.createProfile(profile)

    await getManager().save(profileEntity)

    return profileEntity
  }

  async findByCredentials ({ email, password }: Credentials): Promise<Profile> {
    const profile = await getManager().findOne(ProfileEntity, { email, password })

    if (!profile) {
      throw new Error('Profile not found')
    }

    return new Profile(profile)
  }
}

export default ProfileRepositoryImpl
