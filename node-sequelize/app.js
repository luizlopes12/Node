const express = require('express')
const app = express()
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./Models/Post.js')


//Config
    // Template engine
    app.engine('handlebars', engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Body parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    app.listen(8080, () =>{
        console.log("Servidor rodando na porta 8080")
    })
    app.get('/', (req, res) =>{
        res.json({
            message: 'Pagina inicial'
        })
    })
    app.get('/cadastro', (req, res) =>{
        res.render('form')
    })
    app.post('/add', (req, res) =>{
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(()=>{
            res.send('Post criado com sucesso')
        }).catch((err)=>{
            res.send(`Houve um erro: ${err}`)
        })
    })