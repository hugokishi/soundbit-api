import CreateMusic from '../CreateMusic'
import MusicRepository from '../../../../infrastructure/database/orm/repository/MusicRepository'

jest.mock('../../../../infrastructure/database/orm/repository/MusicRepository')

describe('Test CreateMusic use case', () => {
  test('calls MusicRepository with the correct parameters', () => {
    const musicRepository = new MusicRepository()
    const params = { name: 'music soundbit', file: 'music.mp3' }

    new CreateMusic(params, { musicRepository }).execute()

    const expected = expect.objectContaining({
      name: params.name,
      file: expect.any(String)
    })

    expect(musicRepository.store).toHaveBeenCalledWith(expected)
  })
})
