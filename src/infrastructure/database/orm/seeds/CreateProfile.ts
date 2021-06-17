import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Profile from '../entities/Profile'

export default class CreateProfile implements Seeder {
  public async run (factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Profile)
      .values([
        { email: 'admin@soundbit.bit', name: 'admin', password: 'admin', username: 'admin' },
        { email: 'user-test@soundbit.bit', name: 'user-test', password: 'user-test', username: 'user-test' }
      ])
      .execute()
  }
}
