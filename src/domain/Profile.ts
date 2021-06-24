interface Dependencies {
  id?: string
  name?: string
  username: string
  email: string
  password: string
}

class Profile {
  public id?: string
  public name?: string
  public username: string
  public email: string
  public password: string

  constructor ({ id, name, username, email, password }: Dependencies) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this.password = password
  }
}

export default Profile
