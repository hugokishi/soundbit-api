import Music from '../../../domain/Music/Music'

class MusicSerializer {
  static serializeCreation (music: Music) {
    return {
      message: 'New music created successfully',
      music
    }
  }
}

export default MusicSerializer
