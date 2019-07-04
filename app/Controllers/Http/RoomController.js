"use strict"
const Room = use("App/Models/Room")

class RoomController {
  async index({ response }) {
    try {
      let rooms = await Room.query()
        .with("chats.user")
        .fetch()

      return response.status(200).send({ data: rooms })
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  async create({ request, response, view }) {}

  async store({ request, response }) {
  }

  async show({ params, request, response, view }) {
    try {
      const room = await Room.query().with("chats.user").where('id',params.id).fetch()
      return response.status(200).send(room) 
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  async edit({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = RoomController
