"use strict"

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

const User = use("App/Models/User")

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: "Humberto Barbosa",
      email: "humberto.obarbosa@gmail.com",
      password: "123456",
    })

    await user.teams().create({
      name: "Rocketseat",
      user_id: user.id,
    })
  }
}

module.exports = DatabaseSeeder
