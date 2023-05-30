const express = require('express')
const router = express.Router()

const authController = require('../app/controllers/auth/authController')

router.get('/', authController.createUser)

module.exports = router
