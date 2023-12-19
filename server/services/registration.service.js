const usersModels = require('../models/userModel')
const bcrypt = require('bcrypt')
const ApiError = require('../exceptions/apiError')
const UserDto = require('../dto/user.dto')
const TokenService = require('../services/tokens.service')

class RegistrationService {
    async registration (name, email, password, birthday, sex, photo) {
        const findUser = await usersModels.findOne({email})
        if(findUser) {
            throw ApiError.BadRequest(`Email с таким адресов (${email} уже зарегистрирован)`)
        }
        const hashPassword = await bcrypt.hash(password, 3)

        const createUser = await usersModels.create({
            name, email, birthday, sex, photo,
            password: hashPassword,

        })

        const userDto = new UserDto(createUser)
        const tokens = TokenService.generateToken({...userDto})
        await TokenService.saveToken(createUser.id, tokens.refreshToken)

        return {user: userDto, ...tokens}
    }
}

module.exports = new RegistrationService()