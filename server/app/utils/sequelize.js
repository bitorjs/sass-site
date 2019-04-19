
import Sequelize from 'sequelize';
const config = global.context.$config;

var database = config.database;

// sync database before app start, defaul is false
database.syncFirst = false;

// add longtext for mysql
Sequelize.LONGTEXT = Sequelize.LONGTEXT = Sequelize.TEXT;
if (config.dialect === 'mysql') {
  Sequelize.LONGTEXT = Sequelize.LONGTEXT = 'LONGTEXT';
}

export const sequelize = new Sequelize(database.db, database.username, database.password, database);
export const DataTypes = Sequelize.DataTypes;
export const Op = Sequelize.Op;
