const express = require("express");
const app = express();

// Estou dizendo ao Express usar o EJS como view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let nome = "Alerrando Breno";
    let lang = "Javascript";

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        idade: 19,
    })
})

app.listen(8000, () => {
    console.log("App rodando!");
});