import Music from './Music'

export default interface ProfileRepository {
  store(music: Music): Promise<Music>
}
