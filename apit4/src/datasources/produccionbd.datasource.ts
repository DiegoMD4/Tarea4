import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Produccionbd',
  connector: 'mssql',
  url: 'mssql://sa:diegosql@DESKTOP-A3L64N2/produccion',
  host: 'DESKTOP-A3L64N2',
  port: 1433,
  user: 'sa',
  password: 'diegosql',
  database: 'produccion'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ProduccionbdDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Produccionbd';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Produccionbd', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
