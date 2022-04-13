
const Sequelize = require('sequelize')
//Conexão com o banco de dados mysql
const sequelize = new Sequelize('testes_node', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = { 
    Sequelize, 
    sequelize 
}