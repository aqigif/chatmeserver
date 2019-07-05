"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Group extends Model {
  users() {
    return this.belongsToMany("App/Models/User").pivotModel(
      "App/Models/GroupMember"
    );
  }
}

module.exports = Group;
