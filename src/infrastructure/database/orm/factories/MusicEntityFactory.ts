import Music from '../../../../domain/Music/Music'
import MusicEntity from '../entities/Music'

class MusicEntityFactory {
  static createMusic ({ id, name, file, createdAt, updatedAt }: Music): MusicEntity {
    const music = new MusicEntity()

    music.id = id
    music.name = name
    music.file = file
    music.createdAt = createdAt
    music.updatedAt = updatedAt

    return music
  }
}

export default MusicEntityFactory
