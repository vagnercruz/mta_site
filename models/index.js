const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://user:password@localhost:5432/mta_site', {
  logging: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize); // Modelo de usuário
module.exports = db;
