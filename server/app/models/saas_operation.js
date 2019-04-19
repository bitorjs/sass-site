/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_operation', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "操作Id，主键"
    },
    'desc': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "操作描述"
    },
    'name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "操作名称"
    },
    'operation': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "操作标志",
      unique: true
    }
  }, {
    tableName: 'saas_operation'
  });
};
