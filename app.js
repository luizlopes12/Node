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

//Pagina inicial do servidor
app.get('/', (req,res) =>{
    res.send('Servidor Iniciado')
})

//Buscando todos os dados
app.get('/prod', (req,res) =>{
    return res.json(products)
})

//Inserindo dados
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

//Buscando dados pelo id
app.get('/prod/:id', (req,res) =>{
    const { id } = req.params
    res.json(products.find((item)=> item.id === id))
})

//Alterando dados a partir de seu id
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

//Deletando dados a partir do seu id
app.delete('/prod/:id', (req,res)=>{
    const { id } = req.params
    const itemIndex = products.findIndex((item)=> item.id === id)
    products.splice(itemIndex, 1)

    res.json({
        'message':'Produto removido'
    })
})

//Iniciando servidor
app.listen(3002, () => console.log("Servidor rodando, porta 3002"))