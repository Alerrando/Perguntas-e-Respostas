const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/Perguntar");

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
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  let { titulo, descrição } = req.body;

  res.send(`Formulário recebido ${titulo}, ${descrição}`);
});

app.listen(8000, () => {
  console.log("App rodando!");
});
