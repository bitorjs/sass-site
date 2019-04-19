/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_menu', {
    'menuId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "菜单Id",
      autoIncrement: true
    },
    'parentId': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "上级Id"
    },
    'menuName': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "菜单名称"
    },
    'menuIcon': {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "菜单图标"
    },
    'menuUrl': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "菜单链接"
    },
    'menuType': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "菜单类型"
    },
    'menuOrder': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "菜单排序"
    },
    'menuStatus': {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "菜单状态"
    }
  }, {
    tableName: 'saas_menu'
  });
};
