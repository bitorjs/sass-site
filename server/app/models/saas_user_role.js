/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saas_user_role', {
    'userId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "用户Id,联合主键",
      references: {
        model: 'saas_user',
        key: 'id'
      }
    },
    'roleId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "角色Id，联合主键",
      references: {
        model: 'saas_role',
        key: 'roleId'
      }
    }
  }, {
    tableName: 'saas_user_role'
  });
};
