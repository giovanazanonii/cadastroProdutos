const express = require("express");
const router = express.Router();
const Produto = require('./Produto');

router.get("/cadastrarProd", (req, res) => {
    res.render("produtos/cadastrarProd");
});

router.post("/cadastrarProduto", (req, res) => {
    var nome = req.body.nome;
    var categoria = req.body.categoria;
    var preco = req.body.preco;
    Produto.create({
        nome: nome,
        categoria :categoria,
        preco:preco
    }).then(() => {
        res.redirect("/");
    });
});



router.get("/listarProd", (req, res) => {
    Produto.findAll()
        .then(produtos => {
            res.render("produtos/listarProd", { produtos: produtos });
        })
        .catch(err => {
            console.error('Erro ao buscar produtos:', err);
            res.status(500).send('Erro no servidor.');
        });
});


module.exports = router;