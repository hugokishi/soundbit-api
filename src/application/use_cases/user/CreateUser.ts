import { v4 as generateV4Uuid } from 'uuid'
import UserRepository from '../../../domain/UserRepository'

const RANDOM_USERNAME_EXTRACTOR = /^\w{2}|\w{2}$/g
const LAST_FOUR_DIGITS_EXTRACTOR = /\d{4}$/

interface User {
  email: string;
  password: string;
}

interface Dependencies {
  userRepository: UserRepository
}

class CreateUserUseCase {
  private email: string
  private password: string

  readonly userRepository: UserRepository

  constructor ({ email, password }: User, { userRepository }: Dependencies) {
    this.email = email
    this.password = password

    this.userRepository = userRepository
  }

  public async execute () {
    return this.userRepository.store({
      id: this.generateRandomId(),
      email: this.email,
      username: this.generateUserName(this.email),
      password: this.password
    })
  }

  private generateRandomId (): string {
    return generateV4Uuid()
  }

  private generateUserName (email: string): string {
    const [username] = email.split('@')
    const emailBasedUsername = this.getEmailBasedUsername(username)
    const suffixDigits = this.getDatetimeLastFourDigits()
    return emailBasedUsername.concat(suffixDigits) || ''
  }

  private getDatetimeLastFourDigits (): string {
    return Date.now().toString()
      .match(LAST_FOUR_DIGITS_EXTRACTOR)
      ?.join() || ''
  }

  private getEmailBasedUsername (emailUsername: string): string {
    return emailUsername
      .match(RANDOM_USERNAME_EXTRACTOR)
      ?.join('.') || ''
  }
}

export default CreateUserUseCase
