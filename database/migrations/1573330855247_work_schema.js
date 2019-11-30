'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorkSchema extends Schema {
  up () {
    this.create('works', (table) => {
      table.increments()
      table.date('fecha_de_inicio');
      table.date('fecha_de_cese');
      table.string('persona_id', 20);
      table.integer('planilla_id', 20);
      table.integer('cargo_id', 20);
      table.integer('categoria_id', 20);
      table.string('prefijo');
      table.string('perfil');
      table.date('fecha_inicio_licencia');
      table.date('fecha_fin_licencia');
      table.string('resolucion');
      table.string('email');
      table.string('plaza_id', 20);
      table.integer('type_contrato_id', 20);
      table.string('orden').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('works')
  }
}

module.exports = WorkSchema
