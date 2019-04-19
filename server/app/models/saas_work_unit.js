/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_work_unit', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'utc_create': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'utc_motified': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'name': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'type': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: '2',
      comment: "1: 机构  2: 公司"
    }
  }, {
    tableName: 'saas_work_unit'
  });
};
