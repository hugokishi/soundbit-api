import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
class User {
  @PrimaryColumn()
  id!: string

  @Column({ nullable: true })
  name?: string

  @Column()
  username!: string

  @Column({
    unique: true
  })
  email!: string

  @Column()
  password!: string
}

export default User
