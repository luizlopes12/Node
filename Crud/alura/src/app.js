import express from "express";
import routes from "./Routes/index.js";
//importando a classe de conexão
import db from './config/database.js'
//caso tenha algum erro ao se conectar, exibe o erro no console
db.on('error', console.log.bind(console, 'Erro de conexão'))
//caso esteja conectado mostra no console tbm
db.once('open', () =>{
    console.log("Conexão com o banco feita com sucesso")
})



const app = express()
app.use(express.json())
app.listen(3000, ()=>{
    console.log('uepa')
})
routes(app)

export default app;