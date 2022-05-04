const Sequelize = require("sequelize");
//Conexão com o banco de dados mysql
const sequelize = new Sequelize("testes_node", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Banco de dados conectado"))
  .catch((err) => console.log("falha ao se conectar: " + err));

module.exports = {
  Sequelize,
  sequelize,
};