import User from '../../../../domain/User'
import UserEntity from '../entities/User'

class UserEntityFactory {
  static createUser ({ id, name, username, email, password }: User): UserEntity {
    // @ts-ignore
    const userEntity = new UserEntity()

    userEntity.id = id
    userEntity.name = name
    userEntity.username = username
    userEntity.email = email
    userEntity.password = password

    console.log(userEntity)
    return userEntity
  }
}

export default UserEntityFactory
