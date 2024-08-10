const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const controleProduto = require('./cont_produto/controleProduto');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index');
});
app.use("/",controleProduto);

app.listen(3000, () => {
    console.log("SERVIDOR RODANDO");
});
