const { Sequelize } = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        validate:{
            notEmpty: false,
        },
    },
    descricao: {
        type: Sequelize.TEXT,
        validate:{
            notEmpty: false,
        },
    }
});

// não vai força a criação da tabela se ela já existir
Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;