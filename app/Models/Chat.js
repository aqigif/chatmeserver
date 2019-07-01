'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Chat extends Model {
    rooms () {
      return this
      .belongsToMany('App/Models/Room')
      .pivotTable('chat_rooms')
    }
}

module.exports = Chat
