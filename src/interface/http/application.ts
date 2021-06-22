import 'reflect-metadata'
import * as dotenv from 'dotenv'
import express from 'express'
import connection from '../../infrastructure/database/orm/connection'

import routes from './routes/api'

class Application {
  public express: express.Application;

  constructor () {
    this.express = express()

    this.includeEnvironmentConfig()
    console.log('Enviroment', process.env.DATABASE_URL)
    connection()
    this.includeMiddlewares()
    this.includeRoutes()
  }

  private includeEnvironmentConfig (): void {
    const path = process.env.NODE_ENV === 'production'
      ? '.env'
      : `.env.${process.env.NODE_ENV}`
    dotenv.config({ path })
  }

  private includeMiddlewares (): void {
    // @ts-ignore
    this.express.use(express.json())
  }

  private includeRoutes (): void {
    this.express.get('/health', (_, res) => res.send('App up and running.'))

    this.express.use('/api', routes)
  }
}

export default new Application().express
