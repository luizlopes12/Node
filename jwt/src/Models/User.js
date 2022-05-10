const db = require('../services/database.js')

const User = db.connection.define('users', {
    name: {
        type: db.Sequelize.STRING,
        required: true
    },
    email: {
        type: db.Sequelize.STRING,
        required: true
    },
    password: {
        type: db.Sequelize.STRING,
        required: true
    },
})


// User.sync({force: true})


module.exports = User;