const Sequelize = require('sequelize');

const conexao = new Sequelize('avaliacao01','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = conexao