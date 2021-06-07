interface Dependencies {
  id: string
  name: string | null
  username: string
  email: string
  password: string
}

class User {
  public id: string
  public name: string | null
  public username: string
  public email: string
  public password: string

  constructor ({ id, name, username, email, password }: Dependencies) {
    this.id = id
    this.name = name || null
    this.username = username
    this.email = email
    this.password = password
  }
}

export default User
