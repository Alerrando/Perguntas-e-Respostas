const { Sequelize } = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "147258", {
    host: 'localhost',
    dialect:'mysql',
});

module.exports = connection;