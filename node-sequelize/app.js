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
  Post.findAll()
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
