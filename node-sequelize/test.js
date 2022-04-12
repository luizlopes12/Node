const Sequelize = require('sequelize')
const sequelize = new Sequelize('testes_node', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

//Conectando com o banco e retornando uma mensagem
sequelize.authenticate().then(()=>{
    console.log('Conectado com sucesso!')
}).catch((err)=>{
    console.log('Falha ao se conectar: ' + err)
})


//Models
/*
Os models são um padrão de criar uma tabela sql
a partir do sequelize
*/
const User = sequelize.define('users', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    }
})

/*
O sync() cria uma tabela, depois de criada, melhor comentar o codigo para
não criar a tabela dnv no futuro
*/
//User.sync({force: true})


/*
Inserindo dados na tabela criada
*/

// User.create({
//     nome: 'Luiz',
//     email: 'luizlopes12@outlook.com',
//     senha: 'luizlopes12'
// })