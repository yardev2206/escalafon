'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeContratoSchema extends Schema {
  up () {
    this.create('type_contratos', (table) => {
      table.increments()
      table.string('descripcion');
      table.timestamps()
    })
  }

  down () {
    this.drop('type_contratos')
  }
}

module.exports = TypeContratoSchema
