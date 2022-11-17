const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Perguntar = require("./database/Perguntar");

connection
  .authenticate()
  .then(() => {
    console.log("conexão feita");
  })
  .catch((err) => {
    console.log(err);
  });

// Estou dizendo ao Express usar o EJS como view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  Perguntar.findAll({ raw:true, order:[
    ['id', 'DESC']
  ] }).then(perguntas => {
    res.render("index", {
      perguntas:perguntas
    });

  })
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  let { titulo, descricao } = req.body;

  Perguntar.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/")
  })
});

app.get("/pergunta/:id", (req, res) => {
  let { id } = req.params

  Perguntar.findOne({
    where: { id: id }
  }).then(pergunta => {
    if(pergunta != undefined){
      res.render("pergunta")
    }else{
      res.redirect("/")
    }
  })
})

app.listen(8000, () => {
  console.log("App rodando!");
});
