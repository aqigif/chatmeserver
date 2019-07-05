'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConversationSchema extends Schema {
  up () {
    this.create('conversations', (table) => {
      table.increments()
      table.enu('type',['personal', 'group'])
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('partner').unsigned().references('id').inTable('users')
      table.integer('group').unsigned().references('id').inTable('groups')
      table.timestamps()
    })
  }

  down () {
    this.drop('conversations')
  }
}

module.exports = ConversationSchema
