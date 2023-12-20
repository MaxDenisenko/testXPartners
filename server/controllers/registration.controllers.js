const RegistrationService = require('../services/registration.service')
const config = require('config')

class RegistrationControllers {
    async registration(req, res, next) {
        try {
            console.log(req.files)
            const {name, email, password, birthday, sex} = req.body
            const avatar = req.files.photo
            if (avatar) {
                const photo = Date.now() + '.jpg'
                avatar.mv(config.get('staticPath') + '/' + photo)
                const userData = await RegistrationService.registration(name, email, password, birthday, sex, photo)
                return res.json(userData)
            }


            const userData = await RegistrationService.registration(name, email, password, birthday, sex)
            res.cookie('refreshToken',userData.refreshToken,{maxAge: 30*24*60*60*1000, httpOnly: true, secure: true})
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    } 
}

module.exports = new RegistrationControllers()