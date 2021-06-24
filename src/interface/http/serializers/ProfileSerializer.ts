import Profile from '../../../domain/Profile'

class ProfileSerializer {
  static serializeCreation (profile: Profile) {
    return {
      message: 'New profile created successfully',
      profile: { ...profile, password: undefined }
    }
  }
}

export default ProfileSerializer
