import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'musics' })
class Music {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id?: string

  @Column({ nullable: false })
  name?: string

  @Column({ nullable: false })
  file?: string

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date
}

export default Music
