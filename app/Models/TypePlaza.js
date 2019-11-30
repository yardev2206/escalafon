'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TypePlaza extends Model {

    plaza() {
        return this.hasMany('App/Models/Plaza')
    }

}

module.exports = TypePlaza
