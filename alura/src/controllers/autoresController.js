import autores from "../Models/Autor"

class AutorController {

    static listarAutores = (req, res) =>{
        autores.find((err, autores) =>{
            res.status(200).json(autores)
        })
    }
    static listarAutorPorId = (req, res) =>{
        const id = req.params.id
        autores.findById(id, autores, (err)=>{
            if(err){
                res.status(400).send({message: `Houve um erro: ${err.message}`})
            }
        })
    }
    static cadastrarAutor = (req, res) =>{
        let autor = new autores(req.body)
        autor.save((err)=>{
            if(err){
                res.status(500).send({message: `Erro ao inserir dados: ${err.message}`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }
    static atualizarAutor = (req, res) =>{
        const id = req.params.id
        autores.findByIdAndUpdate(id, { $set: req.body }, (err)=>{
            if(!err){
                res.status(200).send({message: "Autor atualizado com sucesso"})
            }else{
                res.status(500).send({message: `Houve um erro: ${err.message}`})
            }
        })
    }
    static excluirAutor = (req, res) =>{
        const id = req.params.id
        autores.findByIdAndDelete(id, err =>{
            if(!err){
                res.status(200).send({message: "Autor deletado com sucesso"})
            }else{
                res.status(500).send({message: "Houve um erro: " + err.message})
            }
        })
    }
}


export default AutorController