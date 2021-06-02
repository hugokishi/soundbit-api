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

export default async function createUser (user: User, { userRepository }: Dependencies) {
  return userRepository.store({
    id: generateRandomId(),
    email: user.email,
    username: generateUserName(user.email),
    password: user.password
  })
}

function generateRandomId (): string {
  return generateV4Uuid()
}

function generateUserName (email: string): string {
  const [username] = email.split('@')
  const emailBasedUsername = getEmailBasedUsername(username)
  const suffixDigits = getDatetimeLastFourDigits()
  return emailBasedUsername.concat(suffixDigits) || ''
}

function getDatetimeLastFourDigits (): string {
  return Date.now().toString()
    .match(LAST_FOUR_DIGITS_EXTRACTOR)
    ?.join() || ''
}

function getEmailBasedUsername (emailUsername: string): string {
  return emailUsername
    .match(RANDOM_USERNAME_EXTRACTOR)
    ?.join('.') || ''
}
