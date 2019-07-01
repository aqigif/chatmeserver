'use strict'

class AuthController {

    async postLoginJwt({ request, auth }) {
        const { phoneNumber, password } = request.all()
        return auth
        .authenticator('jwt')
        .withRefreshToken()
        .attempt(phoneNumber, password)
        }
}

module.exports = AuthController