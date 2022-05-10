const Sequelize = require('sequelize')
const connection = new Sequelize('cruds', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

connection.authenticate()
.then(()=>{
    console.log('Banco de dados conectado')
})
.catch((err)=>{
    console.log(`Banco de dados não conectado, [ERROR] ${err.message}`)
})

module.exports = {
    Sequelize,
    connection
}