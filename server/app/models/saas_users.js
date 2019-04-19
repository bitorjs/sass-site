/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_users', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'login_name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'mobile': {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'passwd': {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "null"
    },
    'salt': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'utc_create': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'utc_modified': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'saas_users'
  });
};
