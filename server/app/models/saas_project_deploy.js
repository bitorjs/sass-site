/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_project_deploy', {
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
    'is_done': {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0',
      comment: "0 未审核 1 待发布, 2 正在发布  3 发布成功, 4发布失败  5已回滚 10 拒绝发布 "
    }
  }, {
    tableName: 'saas_project_deploy'
  });
};
