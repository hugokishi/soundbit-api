import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
class Profile {
  @PrimaryColumn({
    generated: 'increment'
  })
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

export default Profile
