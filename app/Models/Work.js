'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Work extends Model {

    plaza() {
        return this.belongsTo('App/Models/Plaza');
    }

    type_contrato() {
        return this.belongsTo('App/Moedls/TypeContrato');
    }

    sindicato() {
        return this.belongsTo('App/Models/Sindicato');
    }

    experiencias() {
        return this.hasMany('App/Models/Experiencia');
    }

    investigaciones() {
        return this.hasMany('App/Models/Investigacion');
    }



}

module.exports = Work
