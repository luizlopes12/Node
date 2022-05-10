const User = require('../Models/User.js')
const jwt = require('jsonwebtoken')
const authConfig = require('../services/auth.json')

class userController {
    static listar = (req, res) =>{
        User.findAll()
        .then(value =>{
            res.status(200).json(value)
        })
        .catch(err =>{
            res.status(500).json(err.message)
        })
    }

    static cadastrar = (req, res) =>{
        let {name, email, password} = req.body
        User.create(
            {
                name,
                email,
                password
            }
        ).then(value =>{
            res.status(200).json(value)
        })
        .catch(err =>{
            res.status(500).json(err.message)
        })

    }

    static autenticar = async (req, res) =>{
        let {email, password} = req.body
        const user = await User.findOne({where: {email, password}})
        if(user){
            //Definindo token e enviando ele na resposta
            const token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400
            } )
            res.status(200).json({user, token})
        }else{
            res.status(500).json({message: 'erro na autenticação'})
        }
    }
}

module.exports = userController;