import { Debug } from '@jkomyno/prisma-driver-adapter-utils'
import type { DriverAdapter, Query, Queryable, Result, ResultSet, Transaction, TransactionOptions } from '@jkomyno/prisma-driver-adapter-utils'
import { fieldToColumnType } from './conversion'

const debug = Debug('prisma:driver-adapter:fake')

class FakeQueryable
  implements Queryable {
  readonly flavour = 'postgres'

  constructor(protected readonly client) {
  }

  /**
   * Execute a query given as SQL, interpolating the given parameters.
   */
  async queryRaw(query: Query): Promise<Result<ResultSet>> {
    const tag = '[js::query_raw]'
    debug(`${tag} %O`, query)

    const { fields, rows: results } = await this.performIO(query)

    const columns = fields.map((field) => field.name)
    const resultSet: ResultSet = {
      columnNames: columns,
      columnTypes: fields.map((field) => fieldToColumnType(field.dataTypeID)),
      rows: results.map((result) => columns.map((column) => result[column])),
    }

    console.log("resultSet", resultSet)
    return { ok: true, value: resultSet }
  }

  /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */
  async executeRaw(query: Query): Promise<Result<number>> {
    const tag = '[js::execute_raw]'
    debug(`${tag} %O`, query)

    const { rowCount: rowsAffected } = await this.performIO(query)
    
    // Note: `rowsAffected` can sometimes be null (e.g., when executing `"BEGIN"`)
    return { ok: true, value: rowsAffected ?? 0 }
  }

  /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */
  private async performIO(query: Query) {
    const { sql, args: values } = query

    try {
      const result = await this.client.query(sql, values)
      console.log("performIO", result)
      return result
    } catch (e) {
      const error = e as Error
      debug('Error in performIO: %O', error)
      throw error
    }
  }
}

class FakeTransaction extends FakeQueryable
  implements Transaction {
  constructor(client, readonly options: TransactionOptions) {
    super(client)
  }

  async commit(): Promise<Result<void>> {
    debug(`[js::commit]`)

    this.client.release()
    return Promise.resolve({ ok: true, value: undefined })
  }

  async rollback(): Promise<Result<void>> {
    debug(`[js::rollback]`)

    this.client.release()
    return Promise.resolve({ ok: true, value: undefined })
  }
}

export class PrismaFake extends FakeQueryable implements DriverAdapter {
  constructor(client) {
    console.log("client", client)
    super(client)
  }

  async startTransaction(): Promise<Result<Transaction>> {
    const options: TransactionOptions = {
      usePhantomQuery: false,
    }

    const tag = '[js::startTransaction]'
    debug(`${tag} options: %O`, options)

    const connection = await this.client.connect()
    return { ok: true, value: new FakeTransaction(connection, options) }
  }

  async close() {
    return { ok: true as const, value: undefined }
  }
}
