const express = require("express");
const app = express();

// Estou dizendo ao Express usar o EJS como view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/:nome/:lang", (req, res) => {
    let {nome, lang} = req.params
    let exibirMSG = true;

    let produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-Cola", preco: 5},
        {nome: "Leite", preco:1.45},
    ];

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        idade: 19,
        msg: exibirMSG,
        produtos: produtos,
    })
})

app.listen(8000, () => {
    console.log("App rodando!");
});