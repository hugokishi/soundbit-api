interface Dependencies {
  id: string
  name: string
  username: string
  email: string
  password: string
}

class User {
  public id: string
  public username: string
  public email: string
  public password: string

  constructor ({ id, username, email, password }: Dependencies) {
    this.id = id
    this.username = username
    this.email = email
    this.password = password
  }
}

export default User
