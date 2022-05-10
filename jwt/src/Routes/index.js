const express = require('express')

const users = require('./userRoutes.js')

const routes = (app) =>{
    app.use(
        users
    )
}
module.exports = routes