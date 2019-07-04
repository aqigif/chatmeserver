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

  async create({ request, response, auth }) {
    try {
      const chat = new Chat()
      chat.message = request.input('message')
      chat.room_id = request.input('room_id')
      chat.user_id = auth.user.id
      await chat.save()
      return response.status(201).send(chat)
    } catch (error) {
       return response.status(400).send({
         message: 'Something went wrong!'
       })
    }
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
