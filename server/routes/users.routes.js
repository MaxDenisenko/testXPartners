const Routes = require('express').Router
const {getUser} = require('../controllers/users.controllers')
const authMidleware = require('../middleware/auth.midleware')

const router = new Routes()

router.post('/user', getUser)

module.exports = router