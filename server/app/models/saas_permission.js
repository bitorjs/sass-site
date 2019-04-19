/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_permission', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "权限Id"
    },
    'pdesc': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "权限描述"
    },
    'name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "权限名称"
    },
    'menuId': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "菜单Id",
      references: {
        model: 'saas_menu',
        key: 'menuId'
      }
    }
  }, {
    tableName: 'saas_permission'
  });
};
