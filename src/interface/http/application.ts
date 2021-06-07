import 'reflect-metadata'
import * as dotenv from 'dotenv'
import express from 'express'

import routes from './routes/api'

class Application {
  public express: express.Application;

  constructor () {
    this.express = express()

    dotenv.config()
    this.includeMiddlewares()
    this.includeRoutes()
  }

  includeMiddlewares (): void {
    // @ts-ignore
    this.express.use(express.json())
  }

  includeRoutes (): void {
    this.express.get('/health', (_, res) => res.send('App up and running.'))

    this.express.use('/api', routes)
  }
}

export default new Application().express
