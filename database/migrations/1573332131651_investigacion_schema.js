'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestigacionSchema extends Schema {
  up () {
    this.create('investigacions', (table) => {
      table.increments()
      table.integer('work_id', 20);
      table.string('persona_id');
      table.string('titulo');
      table.string('descripcion')
      table.date('fecha_de_inicio');
      table.date('fecha_de_fin');
      table.timestamps()
    })
  }

  down () {
    this.drop('investigacions')
  }
}

module.exports = InvestigacionSchema
