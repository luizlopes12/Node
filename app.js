const express = require('express')

//Função para criar um id de usuario
const { randomUUID } = require("crypto")

const app = express()

//Habilitando o uso de dados em json
app.use(express.json())

const products = []

/*
POST => Inserir
GET => Buscar
PUT => Alterar
DELETE => Remover
*/


/*
Body => envia dados para a aplicação
Params => envia os dados pela url /prod/651981951519419
Query => envia dados para url, mas com formatação chave e valor /prod?id=4851161name=Luiz
*/


app.get('/', (req,res) =>{
    res.send('Servidor Iniciado')
})


app.get('/prod', (req,res) =>{
    return res.json(products)
})


app.post('/prod', (req,res) =>{

    const { name, price } = req.body;

    const prod = {
        name,
        price,
        id: randomUUID()
    }

    products.push(prod)
    return res.json(prod)
})

app.get('/prod/:id', (req,res) =>{
    const { id } = req.params
    res.json(products.find((item)=> item.id === id))
})


app.put('/prod/:id', (req,res)=>{
    const { id } = req.params
    const { name, price } = req.body;
    const itemIndex = products.findIndex((item)=> item.id === id)
    
    products[itemIndex] = {
        ...products[itemIndex],
        name,
        price
    }

    res.json({
        "message": "Produto alterado"
    })
})

app.delete('/prod/:id', (req,res)=>{
    const { id } = req.params
    const itemIndex = products.findIndex((item)=> item.id === id)
    products.splice(itemIndex, 1)

    res.json({
        'message':'Produto removido'
    })
})




app.listen(3002, () => console.log("Servidor rodando, porta 3002"))