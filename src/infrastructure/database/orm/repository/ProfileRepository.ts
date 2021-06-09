import Connection from '../Connection'
import Profile from '../../../../domain/Profile'
import ProfileEntityFactory from '../factories/ProfileEntityFactory'
import ProfileRepository from '../../../../domain/ProfileRepository'

class ProfileRepositoryImpl implements ProfileRepository {
  async store (profile: Profile): Promise<Profile> {
    const profileEntity = ProfileEntityFactory.createProfile(profile)

    const connection = await Connection.connect()
    await connection.manager.save(profileEntity)
    await connection.close()

    return profileEntity
  }
}

export default ProfileRepositoryImpl
