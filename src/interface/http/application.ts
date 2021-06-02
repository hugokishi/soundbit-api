import 'reflect-metadata'
import * as dotenv from 'dotenv'
import express from 'express'
import { createConnection } from 'typeorm'

class Application {
  public express: express.Application;

  constructor () {
    this.express = express()

    dotenv.config()
    this.database()
    this.mountRoutes()
  }

  mountRoutes () {
    this.express.get('/health', (_, res) => res.send('App up and running.'))
  }

  database () {
    return createConnection()
  }
}

export default new Application().express
