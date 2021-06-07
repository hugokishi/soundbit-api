import { createConnection } from 'typeorm'

class Connection {
  static connect () {
    return createConnection()
  }
}

export default Connection
