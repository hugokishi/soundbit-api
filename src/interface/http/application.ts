import 'reflect-metadata'
import * as dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'

import connection from '../../infrastructure/database/orm/connection'
import routes from './routes/api'
import swaggerDocs from '../../../docs/swagger.json'

class Application {
  public express: express.Application;

  constructor () {
    this.express = express()

    this.includeEnvironmentConfig()
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
    this.express.use(cors({
      credentials: true,
      origin: [
        'http://localhost:3000'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Accept',
        'X-Requested-With',
        'Content-Length'
      ]
    }))

    this.express.use(morgan(function (tokens, req, res): any {
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
      ].join(' ')
    }))
    // @ts-ignore
    this.express.use(express.json())
  }

  private includeRoutes (): void {
    this.express.get('/health', (_, res) => res.send('App up and running.'))
    this.express.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

    this.express.use('/api', routes)
  }
}

export default new Application().express
