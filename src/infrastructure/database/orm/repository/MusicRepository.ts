import { getManager } from 'typeorm'
import Music from '../../../../domain/Music/Music'
import MusicEntityFactory from '../factories/MusicEntityFactory'
import MusicRepository from '../../../../domain/Music/MusicRepository'

class MusicRepositoryImpl implements MusicRepository {
  async store (music: Music): Promise<Music> {
    const musicEntity = MusicEntityFactory.createMusic(music)

    await getManager().save(musicEntity)

    return musicEntity
  }
}

export default MusicRepositoryImpl
