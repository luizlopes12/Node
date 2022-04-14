const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const { Post } = require("./Models/Post");

//Config
// Template engine
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set("view engine", "handlebars");
//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});
app.get("/", (req, res) => {
  //Requisição de todos os dados do banco
  Post.findAll({
    order: [['id', 'DESC']]
  })
    .then((posts) => {
      res.render("home", { posts });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/cadastro", (req, res) => {
  res.render("form");
});
app.post("/add", (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(`Houve um erro: ${err}`);
    });
});



app.get('/deletar/:id', (req,res)=>{
  //Fazendo o delete  pelo id
  Post.destroy({
    where: {
      'id': req.params.id,
    }
  }).then(()=>{
    res.send('deletado com sucesso')
  }).catch((err)=>{
    res.send('Algo de errado aconteceu')
  })
})
