import { Entity, Column, PrimaryColumn } from 'typeorm'

interface Props {
  id: string
  name?: string
  username: string
  email: string
  password: string
}

@Entity()
class User {
  @PrimaryColumn()
  id: string

  @Column({ nullable: true })
  name?: string

  @Column()
  username: string

  @Column()
  email: string

  @Column()
  password: string

  constructor ({ id, name, username, email, password }: Props) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this.password = password
  }
}

export default User
