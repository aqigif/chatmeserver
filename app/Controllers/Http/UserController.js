"use strict"
const User = use("App/Models/User")

class UserController {
  async index ({response}) {
    let users = await User.all()
    return response.status(200).send(users)
  }
  
  async show ({params,response}) {
    const user = await User.find(params.id)
    return response.status(200).send(user)
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
      return user
    } catch (err) {
      return response.status(err.status).send(err)
    }
  }
  
  async update({params, request, response}) {
    const userInfo = request.only(['name', 'phoneNumber', "password", "avatar"])
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({data: 'Resource not found'})
    }
    user.name = userInfo.name
    user.phoneNumber = userInfo.phoneNumber
    user.password = userInfo.password
    user.avatar = userInfo.avatar
    await user.save()
    return response.status(200).json(user)
    }

    async delete ({params, response}) {
      const user = await User.find(params.id)
      if (!user) {
      return response.status(404).json({data: 'Resource not found'})
      }
      await user.delete()
      return response.status(200).json({message:'User deleted'})
      }
}

module.exports = UserController
