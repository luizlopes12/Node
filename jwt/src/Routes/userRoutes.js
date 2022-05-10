const express = require('express')

const userController = require('../Controllers/userController.js')

const router = express.Router()

router
.get('/users', userController.listar)
.post('/users', userController.cadastrar)
.post('/auth', userController.autenticar)
module.exports = router


