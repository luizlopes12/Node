//Importando jwt e secret
const jwt = require('jsonwebtoken')
const authConfig = require('../services/auth.json')
//Função para verificar token
const auth = (req, res, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        res.status(401).send({message: 'no token provided'})
    }
    const parts = authHeader.split(' ')

    if(!parts.length === 2){
        res.status(401).send({message: 'token error'})
    }

    const [scheme, token] = parts

    if(!/^Bearer$/i.test(scheme)){
        res.status(401).send({message: 'Token malformatted'})
    }
    jwt.verify(token, authConfig.secret, (err, decoded) =>{
        if(err){
        res.status(401).send({message: 'Token invalid'})
        }
        req.userId = decoded.id
        next()
    })
}


module.exports = auth