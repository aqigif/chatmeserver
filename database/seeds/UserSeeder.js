'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {

  async run () {
    const u1 = new User()
    u1.name = 'Aqil Seed'
    u1.phoneNumber = '082321'
    u1.password = 'mypass'
    u1.avatar = "myPic.png"
    await u1.save()

    const u2 = new User()
    u2.name = 'Gifari Fast'
    u2.phoneNumber = '08888'
    u2.password = 'mypass'
    u2.avatar = "ourPic.gif"
    await u2.save()
    
    const u3 = new User()
    u3.name = 'aqiGif'
    u3.phoneNumber = '0999'
    u3.password = 'mypass'
    u3.avatar = "ourPic.gif"
    await u3.save()
  }
}

module.exports = UserSeeder
