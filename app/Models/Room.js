'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {
    chats () {
      return this.hasMany('App/Models/Chat')
    }
}

module.exports = Room
