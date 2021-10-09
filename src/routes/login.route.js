const express = require('express')
const route = express.Router()

const loginController = require('../controllers/LoginController')

// get index
route.post('/', loginController.login)

module.exports = route
