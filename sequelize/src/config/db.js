const Sequelize = require("sequelize");
//Conexão com o banco de dados mysql
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
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