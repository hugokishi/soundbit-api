import { getConnectionOptions, ConnectionOptions, createConnection } from 'typeorm'
import * as dotenv from 'dotenv'
dotenv.config()

const getOptions = async () => {
  let connectionOptions: ConnectionOptions
  connectionOptions = {
    type: 'postgres',
    synchronize: false,
    logging: false,
    entities: [process.env.ORM_ROOT_DIR + '/src/infrastructure/database/orm/entities/**/*.{js,ts}'],
    migrations: [process.env.ORM_ROOT_DIR + '/src/infrastructure/database/orm/migrations/*.{js,ts}'],
    cli: {
      entitiesDir: 'src/infrastructure/database/orm/entities',
      migrationsDir: 'src/infrastructure/database/orm/migrations'
    },
    extra: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
  if (process.env.DATABASE_URL) {
    Object.assign(connectionOptions, { url: process.env.DATABASE_URL })
  } else {
    connectionOptions = await getConnectionOptions()
  }
  return connectionOptions
}

const connectDatabase = async (): Promise<void> => {
  const typeormconfig = await getOptions()
  await createConnection(typeormconfig)
}

export default connectDatabase
