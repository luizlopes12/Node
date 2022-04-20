import express from "express";
//importando a classe de conexão
import db from './config/database.js'
//importando a tabela livros do banco de dados
import livros from './Models/Livro.js'
//caso tenha algum erro ao se conectar, exibe o erro no console
db.on('error', console.log.bind(console, 'Erro de conexão'))
//caso esteja conectado mostra no console tbm
db.once('open', () =>{
    console.log("Conexão com o banco feita com sucesso")
})



const app = express()
app.get('/', (req, res)=>{
    res.json({
        "message": "Bom dia"
    })
})

app.get('/livros', (req, res)=>{
    //fazendo um select all na tabela de livros
    livros.find((err, livros) =>{
        res.status(200).json(livros)
    })

})
export default app;