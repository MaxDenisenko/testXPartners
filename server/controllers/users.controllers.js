const usersService = require('../services/users.service')

class UsersControllers {
    async getUser(req, res, next) {
        try {
            const { email } = req.body
            const user = await usersService.getUser(email)
            return res.json(user)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UsersControllers()