const Routes = require('express').Router
const {registration} = require('../controllers/registration.controllers')

const router = new Routes()


router.post('/registration', registration)

module.exports = router