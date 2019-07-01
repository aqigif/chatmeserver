'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('type', 80).notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('chat_id').unsigned().references('id').inTable('chats')
      table.timestamps()
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomSchema
