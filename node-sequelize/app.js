const express = require('express')
const app = express()
const { engine } = require ('express-handlebars');
const Sequelize = require('sequelize')

//Config
    // Template engine
    app.engine('handlebars', engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Conexão com o banco de dados mysql
    const sequelize = new Sequelize('testes_node', 'root', 'admin', {
        host: 'localhost',
        dialect: 'mysql'
    })

app.listen(8080,()=>{
    console.log("Servidor rodando na porta 8080")
})