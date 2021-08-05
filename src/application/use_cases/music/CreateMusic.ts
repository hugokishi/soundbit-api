import MusicRepository from '../../../domain/Music/MusicRepository'

interface Music {
  name: string;
  file: string;
}

interface Dependencies {
  musicRepository: MusicRepository
}

class CreateMusicUseCase {
  private name: string
  private file: string

  readonly musicRepository: MusicRepository

  constructor ({ name, file }: Music, { musicRepository }: Dependencies) {
    this.name = name
    this.file = file

    this.musicRepository = musicRepository
  }

  public async execute () {
    return this.musicRepository.store({
      name: this.name,
      file: this.getMusicUrl(this.file)
    })
  }

  private getMusicUrl (file: string): string {
    return `${process.env.APP_URL}/files/${file}`
  }
}

export default CreateMusicUseCase
