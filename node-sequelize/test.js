const Sequelize = require('sequelize')
const sequelize = new Sequelize('testes_node', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})


sequelize.authenticate().then(()=>{
    console.log('Conectado com sucesso!')
}).catch((err)=>{
    console.log('Falha ao se conectar: ' + err)
})