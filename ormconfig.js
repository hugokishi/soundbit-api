const rootDir = process.env.ORM_ROOT_DIR

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: [rootDir + '/src/infrastructure/database/orm/entities/**/*.{js,ts}'],
  migrations: [rootDir + '/src/infrastructure/database/orm/migrations/*.{js,ts}'],
  seeds: [rootDir + '/src/infrastructure/database/orm/seeds/**/*.{js,ts}'],
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
