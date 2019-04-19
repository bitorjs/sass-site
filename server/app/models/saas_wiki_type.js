/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_wiki_type', {
    'id': {
      type: DataTypes.INTEGER(11),
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
    tableName: 'saas_wiki_type'
  });
};
