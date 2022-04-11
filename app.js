const express = require('express')

const app = express()


app.get('/', (req,res) =>{
    return res.json({
        'message':'Rota inicial'
    })
})



app.listen(3002, () => console.log("Servidor rodando, porta 3002"))