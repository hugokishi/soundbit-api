import ApplicationController from './ApplicationController'
import CreateUser from '../../../application/use_cases/user/CreateUser'
import UserRepository from '../../../infrastructure/database/orm/repository/UserRepository'

interface Props {
  email: string
  password: string
}

class UserController extends ApplicationController {
  async store (): Promise<any> {
    const { email, password }: Props = this.req.body

    const user = await new CreateUser(
      { email, password },
      { userRepository: new UserRepository() }
    ).execute()

    this.res.status(201).send(user)
  }
}

export default UserController
