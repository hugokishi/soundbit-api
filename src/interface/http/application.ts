import 'reflect-metadata'
import * as dotenv from 'dotenv'
import express from 'express'

class Application {
  public express: express.Application;

  constructor () {
    this.express = express()

    dotenv.config()
    this.mountRoutes()
  }

  mountRoutes () {
    this.express.get('/health', (_, res) => res.send('App up and running.'))
  }
}

export default new Application().express
