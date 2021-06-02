import 'reflect-metadata'
import * as dotenv from 'dotenv'
import express from 'express'
import { createConnection } from 'typeorm'

import routes from './routes/api'

class Application {
  public express: express.Application;

  constructor () {
    this.express = express()

    this.includeEnvironmentConfig()
    this.includeDatabaseConnection()
    this.includeMiddlewares()
    this.includeRoutes()
  }

  private includeEnvironmentConfig (): void {
    const path = process.env.NODE_ENV === 'production'
      ? '.env'
      : `.env.${process.env.NODE_ENV}`
    dotenv.config({ path })
  }

  private includeDatabaseConnection (): void {
    createConnection().then()
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
