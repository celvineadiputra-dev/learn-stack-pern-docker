const express = require('express')
const router = express.Router()

const authController = require('../app/controllers/auth/authController')

router.get('/', authController.register)

module.exports = router
