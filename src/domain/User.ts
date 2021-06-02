interface Dependencies {
  id: string
  username: string
  email: string
  passwordHash: string
}

class User {
  public id: string
  public username: string
  public email: string
  public password: string

  constructor ({ id, username, email, passwordHash }: Dependencies) {
    this.id = id
    this.username = username
    this.email = email
    this.password = passwordHash
  }
}

export default User
