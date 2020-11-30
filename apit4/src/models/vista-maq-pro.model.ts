import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'pro', table: 'VistaMaqPro'}}})
export class VistaMaqPro extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'cantidadProduccion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  cantidadProduccion?: number;

  @property({
    type: 'string',
    required: true,
    length: 250,
    mssql: {columnName: 'descripcion', dataType: 'nvarchar', dataLength: 250, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  descripcion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<VistaMaqPro>) {
    super(data);
  }
}

export interface VistaMaqProRelations {
  // describe navigational properties here
}

export type VistaMaqProWithRelations = VistaMaqPro & VistaMaqProRelations;
