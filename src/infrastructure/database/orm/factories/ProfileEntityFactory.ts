import Profile from '../../../../domain/Profile'
import ProfileEntity from '../entities/Profile'

class ProfileEntityFactory {
  static createProfile ({ id, name, username, email, password }: Profile): ProfileEntity {
    const profile = new ProfileEntity()

    profile.id = id
    profile.name = name
    profile.username = username
    profile.email = email
    profile.password = password

    return profile
  }
}

export default ProfileEntityFactory
