import { Request, Response } from 'express'

class ApplicationController {
  readonly req: Request
  readonly res: Response

  constructor (req: Request, res: Response) {
    this.req = req
    this.res = res
  }
}

export default ApplicationController
