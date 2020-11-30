import {DefaultCrudRepository} from '@loopback/repository';
import {Productos, ProductosRelations} from '../models';
import {ProduccionbdDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductosRepository extends DefaultCrudRepository<
  Productos,
  typeof Productos.prototype.id,
  ProductosRelations
> {
  constructor(
    @inject('datasources.Produccionbd') dataSource: ProduccionbdDataSource,
  ) {
    super(Productos, dataSource);
  }
}
