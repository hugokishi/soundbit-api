import CreateProfile from '../CreateProfile'
import ProfileRepository from '../../../../infrastructure/database/orm/repository/ProfileRepository'

jest.mock('../../../../infrastructure/database/orm/repository/ProfileRepository')

describe('Test CreateProfile use case', () => {
  test('calls ProfileRepository with the correct parameters', () => {
    const profileRepository = new ProfileRepository()
    const params = { email: 'test@soundbit.com', password: '123456' }

    new CreateProfile(params, { profileRepository }).execute()

    const expected = expect.objectContaining({
      id: expect.any(String),
      email: params.email,
      password: params.password,
      username: expect.any(String)
    })

    expect(profileRepository.store).toHaveBeenCalledWith(expected)
  })
})
