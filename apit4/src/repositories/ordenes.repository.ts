import {DefaultCrudRepository} from '@loopback/repository';
import {Ordenes, OrdenesRelations} from '../models';
import {ProduccionbdDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenesRepository extends DefaultCrudRepository<
  Ordenes,
  typeof Ordenes.prototype.id,
  OrdenesRelations
> {
  constructor(
    @inject('datasources.Produccionbd') dataSource: ProduccionbdDataSource,
  ) {
    super(Ordenes, dataSource);
  }
}
