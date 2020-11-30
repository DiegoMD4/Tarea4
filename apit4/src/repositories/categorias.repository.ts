import {DefaultCrudRepository} from '@loopback/repository';
import {Categorias, CategoriasRelations} from '../models';
import {ProduccionbdDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoriasRepository extends DefaultCrudRepository<
  Categorias,
  typeof Categorias.prototype.id,
  CategoriasRelations
> {
  constructor(
    @inject('datasources.Produccionbd') dataSource: ProduccionbdDataSource,
  ) {
    super(Categorias, dataSource);
  }
}
