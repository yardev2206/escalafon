'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlazaSchema extends Schema {
  up () {
    this.create('plazas', (table) => {
      table.string('id', 20).unique();
      table.integer('facultad_id', 20);
      table.string('resolucion');
      table.boolean('activo').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('plazas')
  }
}

module.exports = PlazaSchema
