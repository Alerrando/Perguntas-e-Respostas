const express = require("express");
const app = express();

// Estou dizendo ao Express usar o EJS como view engine
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
    res.render("index")
})

app.listen(8000, () => {
    console.log("App rodando!");
});

