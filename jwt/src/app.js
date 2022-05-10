const express = require('express')
const cors = require('cors')
const routes = require('./Routes')
const app = express()
const port = 3001

app.use(express.json())
app.use(cors())
routes(app)

app.listen(port, ()=>{
    console.log(`Servidor rodando, porta ${port}`)
})