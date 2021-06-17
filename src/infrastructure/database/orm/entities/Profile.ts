import { Entity, Column, PrimaryColumn, Generated } from 'typeorm'

@Entity()
class Profile {
  @PrimaryColumn()
  @Generated('uuid')
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
