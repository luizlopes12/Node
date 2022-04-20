import mongoose from "mongoose";
//connectando com o banco de dados
mongoose.connect('mongodb+srv://luizlopes12:admin@cluster0.yfbap.mongodb.net/aluranode')
//executando a conexão
const db = mongoose.connection
//exportando a classe de conexão
export default db;