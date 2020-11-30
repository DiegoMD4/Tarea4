import {DefaultCrudRepository} from '@loopback/repository';
import {Turnos, TurnosRelations} from '../models';
import {ProduccionbdDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TurnosRepository extends DefaultCrudRepository<
  Turnos,
  typeof Turnos.prototype.id,
  TurnosRelations
> {
  constructor(
    @inject('datasources.Produccionbd') dataSource: ProduccionbdDataSource,
  ) {
    super(Turnos, dataSource);
  }
}
