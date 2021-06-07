import { createConnection, Connection as Conn } from 'typeorm'

class Connection {
  static connect (): Promise<Conn> {
    return createConnection()
  }
}

export default new Connection()
