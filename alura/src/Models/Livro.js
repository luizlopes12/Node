import mongoose from "mongoose";
//criando modelo
const livroSchema = new mongoose.Schema({
    id: {
        type: String
    },
    titulo: {
            type: String, required: true
    },
    autor: {
        type: String, required: true
    },
    editora: {
        type: String, required: true
    },
    numeroPaginas: {
        type: Number
    }
})
//criando modelo no banco de dados
const livros = mongoose.model('livros', livroSchema)
//exportando modelo
export default livros;