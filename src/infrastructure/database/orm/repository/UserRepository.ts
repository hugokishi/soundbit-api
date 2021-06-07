import { Connection as TypeormConn } from 'typeorm'
import Connection from '../Connection'
import User from '../../../../domain/User'
import UserEntity from '../entities/User'
import UserRepository from '../../../../domain/UserRepository'

class UserRepositoryImpl implements UserRepository {
  readonly connection: Promise<TypeormConn>

  constructor () {
    this.connection = Connection.connect().then(conn => conn)
  }

  async store (user: User): Promise<User> {
    const repository = (await this.connection).getRepository(UserEntity)

    await repository.save(user)

    return user
  }
}

export default UserRepositoryImpl
