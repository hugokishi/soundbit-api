import { Connection as TypeormConn } from 'typeorm'
import Connection from '../Connection'
import Profile from '../../../../domain/Profile'
import ProfileEntityFactory from '../factories/ProfileEntityFactory'
import ProfileRepository from '../../../../domain/ProfileRepository'

class ProfileRepositoryImpl implements ProfileRepository {
  readonly connection: Promise<TypeormConn>

  constructor () {
    this.connection = Connection.connect().then(conn => conn)
  }

  async store (profile: Profile): Promise<Profile> {
    const profileEntity = ProfileEntityFactory.createProfile(profile);
    (await this.connection).manager.save(profileEntity)

    return profileEntity
  }
}

export default ProfileRepositoryImpl
