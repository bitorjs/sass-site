/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_role_permission', {
    'rpId': {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true,
      comment: "表Id"
    },
    'roleId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "角色Id",
      references: {
        model: 'saas_role',
        key: 'roleId'
      }
    },
    'permissionId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "权限Id",
      references: {
        model: 'saas_permission',
        key: 'id'
      }
    }
  }, {
    tableName: 'saas_role_permission'
  });
};
