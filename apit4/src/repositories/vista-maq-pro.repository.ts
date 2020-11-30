import {DefaultCrudRepository} from '@loopback/repository';
import {VistaMaqPro, VistaMaqProRelations} from '../models';
import {ProduccionbdDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VistaMaqProRepository extends DefaultCrudRepository<
  VistaMaqPro,
  typeof VistaMaqPro.prototype.id,
  VistaMaqProRelations
> {
  constructor(
    @inject('datasources.Produccionbd') dataSource: ProduccionbdDataSource,
  ) {
    super(VistaMaqPro, dataSource);
  }
}
