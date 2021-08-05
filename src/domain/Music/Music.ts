interface Dependencies {
  id?: string
  name?: string
  file?: string
  createdAt?: Date
  updatedAt?: Date
}

class Music {
  public id?: string
  public name?: string
  public file?: string
  public createdAt?: Date
  public updatedAt?: Date

  constructor ({ id, name, file, createdAt, updatedAt }: Dependencies) {
    this.id = id
    this.name = name
    this.file = file
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export default Music
