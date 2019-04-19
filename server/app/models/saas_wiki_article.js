/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_wiki_article', {
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
      allowNull: false,
      comment: "null"
    },
    'type_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'content': {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "null"
    },
    'keywords': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'summary': {
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
    },
    'star': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    },
    'view': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '0',
      comment: "null"
    }
  }, {
    tableName: 'saas_wiki_article'
  });
};
