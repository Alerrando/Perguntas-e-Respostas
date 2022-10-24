const { Sequelize } = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "147258", {
    host: 'localhost',
    dialect:'sqlite',
});

module.exports = connection;