"use strict";

const User = use("App/Models/User");

class AuthController {
  async login({ request, auth, response }) {
    const { phoneNumber, password } = request.only(["phoneNumber", "password"]);
    try {
      await auth.attempt(phoneNumber, password);

      const user = await User.findBy("phoneNumber", phoneNumber);
      let token = await auth.generate(user);

      response.send({
        user: user,
        accessToken: token
      });
    } catch (error) {
      response.status(400).send({
        message: "something went wrong"
      });
      console.log(error);
    }
  }

  async logout({ auth, response }) {
    try {
      const logout = await auth.logout();
      response.send({ message: "berhasil logout" });
    } catch (error) {
      response.status().send({ message: "berhasil logout" });
      console.log(error);
    }
  }
}

module.exports = AuthController;
