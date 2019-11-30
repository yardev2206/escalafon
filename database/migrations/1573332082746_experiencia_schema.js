'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExperienciaSchema extends Schema {
  up () {
    this.create('experiencias', (table) => {
      table.increments()
      table.integer('work_id', 20);
      table.string('persona_id');
      table.string('descripcion');
      table.string('direccion');
      table.date('fecha_de_inicio');
      table.date('fecha_de_cese');
      table.timestamps()
    })
  }

  down () {
    this.drop('experiencias')
  }
}

module.exports = ExperienciaSchema
