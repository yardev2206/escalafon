'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GradoSchema extends Schema {
  up () {
    this.create('grados', (table) => {
      table.increments()
      table.integer('work_id', 20);
      table.string('persona_id');
      table.integer('type_grado', 20)
      table.string('cetro_de_estudio');
      table.string('titulo');
      table.string('descripcion');
      table.date('fecha_de_inicio')
      table.date('fecha_de_cese')
      table.timestamps()
    })
  }

  down () {
    this.drop('grados')
  }
}

module.exports = GradoSchema
