'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatSchema extends Schema {
  up () {
    this.create('chats', (table) => {
      table.increments()
      table.text('message').notNullable()
      table.boolean('is_read').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('conversation_id').unsigned().references('id').inTable('conversations')
      table.timestamps()
    })
  }
  down () {
    this.drop('chats')
  }
}

module.exports = ChatSchema
