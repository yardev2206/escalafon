'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Plaza extends Model {

    type_plaza() {
        return this.belongsTo('App/Models/TypePlaza');
    }

    works() {
        return this.hasMany('App/Models/Plaza');
    }

}

module.exports = Plaza
