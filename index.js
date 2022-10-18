const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Bem vindo ao meu site");
})

app.listen(8000, () => {
    console.log("App rodando!");
});

