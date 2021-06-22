const rootDir = process.env.ORM_ROOT_DIR

module.exports = {
  type: 'sqlite',
  database: 'soundbit',
  entities: [rootDir + '/infrastructure/database/orm/entities/**/*.{js,ts}'],
  migrations: [rootDir + '/infrastructure/database/orm/migrations/*.{js,ts}'],
  seeds: [rootDir + '/infrastructure/database/orm/seeds/**/*.{js,ts}'],
  cli: {
    entitiesDir: 'src/infrastructure/database/orm/entities',
    migrationsDir: 'src/infrastructure/database/orm/migrations'
  }
}
