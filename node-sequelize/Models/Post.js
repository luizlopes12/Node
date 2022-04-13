const db = require('./db')

const Post = db.sequelize.define('posts', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})


// Sempre comentar ou apagar a linha de criação depois de criar a tabela
// Post.sync({force: true})