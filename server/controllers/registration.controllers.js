const RegistrationService = require('../services/registration.service')

class RegistrationControllers {
    async registration(req, res, next) {
        try {
            const {name, email, password, birthday, sex, photo} = req.body

            const userData = await RegistrationService.registration(name, email, password, birthday, sex, photo)
            res.cookie('refreshToken',userData.refreshToken,{maxAge: 30*24*60*60*1000, httpOnly: true, secure: true})
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    } 
}

module.exports = new RegistrationControllers()