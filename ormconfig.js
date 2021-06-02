const rootDir = process.env.ORM_ROOT_DIR || 'src'

module.exports = [
  {
    name: 'default',
    type: 'postgres',
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || 'localhost',
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASS || 'postgres',
    database: process.env.DATABASE_NAME || 'soundbit_dev',
    synchronize: false,
    logging: false,
    entities: [rootDir + '/infrastructure/database/orm/entities/**/*.{js,ts}'],
    migrations: [rootDir + '/infrastructure/database/orm/migrations/*.{js,ts}'],
    seeds: [rootDir + '/infrastructure/database/orm/seeds/**/*.{js,ts}'],
    cli: {
      entitiesDir: 'src/infrastructure/database/orm/entities',
      migrationsDir: 'src/infrastructure/database/orm/migrations'
    }
  }
]
