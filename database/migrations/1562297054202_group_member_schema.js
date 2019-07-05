'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupMemberSchema extends Schema {
  up () {
    this.create('group_members', (table) => {
      table.increments()
      table.integer('group_id').unsigned().references('id').inTable('groups')
      table.integer('user_id').unsigned().references('id').inTable('users')
    })
  }
  down () {
    this.drop('group_members')
  }
}

module.exports = GroupMemberSchema
