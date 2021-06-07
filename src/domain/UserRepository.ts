import User from './User'

export default interface UserRepository {
  store(user: User): User
}