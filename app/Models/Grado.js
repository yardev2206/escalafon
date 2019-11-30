'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Grado extends Model {

    work() {
        return this.belongsTo('App/Models/Work');
    }

}

module.exports = Grado
