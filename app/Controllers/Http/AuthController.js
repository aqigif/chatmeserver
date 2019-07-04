"use strict";

class AuthController {
  async login({ request, auth }) {
    const { phoneNumber, password } = request.all();
    return auth
      .authenticator("jwt")
      .withRefreshToken()
      .attempt(phoneNumber, password);
  }

  async register({ request, response }) {
    try {
      const data = request.only(["name", "phoneNumber", "password", "avatar"]);
      const userExists = await User.findBy("phoneNumber", data.phoneNumber);
      if (userExists) {
        return response
          .status(400)
          .send({ message: { error: "User already registered" } });
      }
      const user = await User.create(data);
      return response.status(201).send(user);
    } catch (error) {
      return response.status(error.status).send(error);
    }
  }

  async profile({ response, auth }) {
    const user = await auth.getUser();
    return response.send(user);
  }
}

module.exports = AuthController;
