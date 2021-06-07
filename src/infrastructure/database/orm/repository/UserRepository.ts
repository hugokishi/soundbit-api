import { Connection as TypeormConn } from 'typeorm'
import Connection from '../Connection'
import User from '../../../../domain/User'
import UserEntityFactory from '../factories/UserEntityFactory'
import UserRepository from '../../../../domain/UserRepository'

class UserRepositoryImpl implements UserRepository {
  readonly connection: Promise<TypeormConn>

  constructor () {
    this.connection = Connection.connect().then(conn => conn)
  }

  async store (user: User): Promise<User> {
    const userEntity = UserEntityFactory.createUser(user);
    (await this.connection).manager.save(userEntity)

    return userEntity
  }
}

export default UserRepositoryImpl
