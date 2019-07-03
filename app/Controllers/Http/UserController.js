"use strict"
const User = use("App/Models/User")

class UserController {
  async index({ response }) {
    try {
      let users = await User.all()
      return response.status(200).send(users)
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  async show({ params, response }) {
    try {
      const user = await User.find(params.id)
      return response.status(200).send(user) 
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  async register({ request, response }) {
    try {
      const data = request.only(["name", "phoneNumber", "password", "avatar"])
      const userExists = await User.findBy("phoneNumber", data.phoneNumber)
      if (userExists) {
        return response
          .status(400)
          .send({ message: { error: "User already registered" } })
      }
      const user = await User.create(data)
      return response.status(201).send(user)
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  async update({ params, request, response }) {
    try {
      const userInfo = request.only([
        "name",
        "phoneNumber",
        "password",
        "avatar"
      ])
      const user = await User.find(params.id)
      if (!user) {
        return response.status(404).send({ data: "Resource not found" })
      }
      user.name = userInfo.name
      user.phoneNumber = userInfo.phoneNumber
      user.password = userInfo.password
      user.avatar = userInfo.avatar
      await user.save()
      return response.status(202).send(user)
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  async delete({ params, response }) {
    try {
      const user = await User.find(params.id)
      if (!user) {
        return response.status(404).json({ data: "Resource not found" })
      }
      await user.delete()
      return response.status(200).send({ message: "User deleted" })
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }
}

module.exports = UserController
