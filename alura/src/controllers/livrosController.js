import livros from "../Models/Livro.js";

class LivroController {

    static listarLivros = (req, res) =>{
        livros.find((err, livros) =>{
            res.status(200).json(livros)
        })
    }
    static listarLivroPorId = (req, res) =>{
        const id = req.params.id
        livros.findById(id, livros, (err)=>{
            if(err){
                res.status(400).send({message: `Houve um erro: ${err.message}`})
            }
        })
    }
    static cadastrarLivro = (req, res) =>{
        let livro = new livros(req.body)
        livro.save((err)=>{
            if(err){
                res.status(500).send({message: `Erro ao inserir dados: ${err.message}`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }
    static atualizarLivro = (req, res) =>{
        const id = req.params.id
        livros.findByIdAndUpdate(id, { $set: req.body }, (err)=>{
            if(!err){
                res.status(200).send({message: "Livro atualizado com sucesso"})
            }else{
                res.status(500).send({message: `Houve um erro: ${err.message}`})
            }
        })
    }
}


export default LivroController