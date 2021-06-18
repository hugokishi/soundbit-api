import CreateSession from '../CreateSession'
import ProfileRepository from '../../../../infrastructure/database/orm/repository/ProfileRepository'

jest.mock('../../../../infrastructure/database/orm/repository/ProfileRepository')

describe('Test CreateSession use case', () => {
  test('calls ProfileRepository with the correct parameters', () => {
    const profileRepository = new ProfileRepository()
    const params = { email: 'test@soundbit.com', password: '123456' }

    new CreateSession(params, { profileRepository }).execute()

    const expected = expect.objectContaining({
      email: params.email,
      password: params.password
    })

    expect(profileRepository.findByCredentials).toHaveBeenCalledWith(expected)
  })
})
