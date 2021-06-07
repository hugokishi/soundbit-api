const rootDir = process.env.ORM_ROOT_DIR

module.exports = [
  {
    name: 'default',
    type: 'postgres',
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
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
