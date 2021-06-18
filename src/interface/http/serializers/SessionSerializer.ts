import Profile from '../../../domain/Profile'

class SessionSerializer {
  static serializeCreation (profile: Profile) {
    return { ...profile, password: undefined }
  }
}

export default SessionSerializer
