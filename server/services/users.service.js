const usersModels = require('../models/userModel')

class UsersService {
    async getUser(email) {
        try {
            const user = await usersModels.find({email: {$ne: email}})
            return user
        } catch (error) {
                console.log(error)
        }
    }
}

module.exports = new UsersService()