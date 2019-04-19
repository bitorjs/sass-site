/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_collection', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'title': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'url': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'u_id': {
      type: DataTypes.INTEGER(11),
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
    tableName: 'saas_collection'
  });
};
