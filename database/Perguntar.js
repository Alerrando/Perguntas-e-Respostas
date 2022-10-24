const { Sequelize } = require("sequelize");
const { connection } = require("./database");

const Pergunta = connection.define("pergunta", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: null
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: null,
    }
});

// não vai força a criação da tabela se ela já existir
Pergunta.sync({force: false})