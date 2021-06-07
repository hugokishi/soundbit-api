import { Entity, Column, PrimaryColumn } from 'typeorm'

interface Props {
  uuid: string
  name: string | null
  username: string
  email: string
  password: string
}

@Entity()
class User {
  @PrimaryColumn()
  uuid: string

  @Column()
  name: string | null

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  constructor ({ uuid, name, username, email, password }: Props) {
    this.uuid = uuid
    this.name = name || null
    this.username = username
    this.email = email
    this.password = password
  }
}

export default User
