'use strict'
const Chat = use("App/Models/Chat")

class ChatController {
  async index({ response }) {
    try {
      let chats = await Chat.query()
        .with("user")
        .fetch()
      return response.status(200).send({ data: chats })
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ChatController
