const {Schema, model} = require('mongoose')

const UserSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    birthday: {type: String, required: true},
    sex: {type: String, required: true},
    photo: {type: String, required: true},
})

module.exports = model('User', UserSchema)